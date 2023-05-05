import React, {useEffect, useState, useRef} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {GUI} from 'three/addons/libs/lil-gui.module.min.js';
import {CSS2DRenderer} from 'three/addons/renderers/CSS2DRenderer.js';
import './css/Graph.css';

// Book Titles
import BookTitles from '../lib/data/BookTitles.js';
import ThemeWords from '../lib/data/ThemeWords'; // NR Word List

// Western Data
import BOOKS_WESTERN from '../lib/data/BooksWestern';
import THEMES_WESTERN from '../lib/data/ThemesWestern';

import BOOKS from '../lib/data/Books';
import THEMES from '../lib/data/Themes';

// Class + Helper files
import {G, N, E} from '../lib/BookGraphHelper';

// Color Constants
// const sceneBGColor = new THREE.Color(0xeeeeee);
const nodeColor = 0xFFFFFF; // 0xD9D192 yellow

const BookGraph = () => {
    const mountRef = useRef(null);
    const MAX_NODES = 100;

    const [mouseXpercentage, setMouseXpercentage] = useState(0);
    const [mouseYpercentage, setMouseYpercentage] = useState(0);

    useEffect( () => {
        let mRef = mountRef;
        let g;
        
        // reusable variables
        let camera, scene, renderer, controls; // threejs environment variables
        let lineSegments, sphereInstance; // sphere + line variables
        let labelRenderer; // CSS2D label variable
        const _dummy = new THREE.Object3D();
        const _points = [];
        const nScale = 60;
        let _SIMS = BOOKS; // similarity matrix data
        let _WORDS = BookTitles;
        let _WESTERN, westernLineSegments;

        const params = {
            nodeCount: _WORDS.length,
            threshold: 0.57, // 0.65
            westernThreshold: 0.852,
            demo: "Books Demo",
            western: false,
        }

        const init = () => {
            // threejs scene
            g = new G();
            scene = g.scene;
            // scene.background = sceneBGColor;
            
            if (document.querySelector("#container")) {
                const demoElement = document.querySelector("#demotype");
                const countElement = document.querySelector("#count");
                demoElement.innerText = params.demo;
                countElement.innerText = params.nodeCount + " Nodes";
            }

            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
            camera.position.set(225, 250, 100);
            camera.lookAt(0, 0, 0);

            const light = new THREE.HemisphereLight(0xFFFFFF, 0x999999);
            scene.add(light);        

            renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
            renderer.setClearColor(0xeeeeee, 0.0); // test
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );

            initLabels(); // CSS2D Object
            initNodeObject(); // Instanced Object
            initGUI(); // GUI Object

            window.addEventListener('mousemove', onPointerMove);
            window.addEventListener( 'resize', onWindowResize );
            onWindowResize();
        }
        
        const initLabels = () => {
            // CSS2D Label Renderer
            labelRenderer = new CSS2DRenderer(); // 2D
            labelRenderer.setSize(window.innerWidth, window.innerHeight);
            labelRenderer.domElement.style.position = "absolute";
            labelRenderer.domElement.style.top = "0px";
            document.body.appendChild(labelRenderer.domElement);

            controls = new OrbitControls(camera, labelRenderer.domElement); // 2D
            controls.minDistance = 25;// zoom min
            controls.maxDistance = 700;// zoom max
            controls.target.set(0, 0, 0);
            controls.enableDamping = true;
        }

        const initNodeObject = () => {
            const nodeGeometry = params.demo.includes("Books") ? new THREE.BoxGeometry(1, 6, 4.5) : new THREE.SphereGeometry(0.8, 32, 16);

            sphereInstance = new THREE.InstancedMesh(
                nodeGeometry,
                new THREE.MeshPhongMaterial({color: nodeColor}),
                MAX_NODES
            );
            sphereInstance.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // will be updated every frame

            scene.add(sphereInstance);
        }

        const initGUI = () => {
            // set up GUI
            const gui = new GUI();

            // dropdown
            const guiDemoFolder = gui.addFolder("Demo Selection");
            const guiDemoStates = ["Books Demo", "Themes Demo"];
            guiDemoFolder.add(params, "demo").options(guiDemoStates).onChange((v) => {
                
                // TODO: add counter for Edges
                // TODO: implement view of themes per book?
                switch (v) {
                    case "Themes Demo":
                        purgeChildren();

                        _SIMS = THEMES;
                        _WORDS = ThemeWords;

                        params.threshold = 0.38; // 0.32
                        params.westernThreshold = 0.78;
                        params.nodeCount = _WORDS.length;

                        init();
                        initNodes();
                        break;
                    
                    default:
                        purgeChildren();

                        _SIMS = BOOKS;
                        // _WORDS = BookTitles;
                        _WORDS = BookTitles.map((e) => e.title);

                        params.threshold = 0.57;
                        params.westernThreshold = 0.852;
                        params.nodeCount = _WORDS.length;

                        init();
                        initNodes();
                }
            });

            // similarity threshold
            const guiThresholdFolder = gui.addFolder("Slider");
            guiThresholdFolder.add(params, "threshold", 0.15, 1.00, 0.01).onChange((v) => {
                initEdges();
                params.threshold = v;
            });

            // toggle western edges visibility
            const westernFolder = gui.addFolder("Toggle Western Lens");
            westernFolder.add(params, "western").onChange((e) => {
                if (e && params.demo.includes("Themes")) {
                    // demo is visualizing Themes
                    _WESTERN = THEMES_WESTERN;
                } else if (e) {
                    // demo is visualizing Books
                    _WESTERN = BOOKS_WESTERN;
                } else {
                    g.PurgeWesternEdges();

                    for (let i = 0; i < scene.children.length; i++) {
                        if (scene.children[i].name === "westernLineSegment") {
                            const obj = scene.children[i];
                            obj.geometry.dispose();
                            obj.material.dispose(); 
                            scene.remove(obj);
                        }
                    }
                }
            })
        }

        const initWesternEdges = () => {
            for (let j = 0; j < params.nodeCount; j++) {
                const row = _WESTERN[j]; // western corpus
                for (let i = j + 1; i < params.nodeCount; i++) {
                    const e = new E(g.nodes[j], g.nodes[i]);
                    g.westernEdges.push(e);
                    const sim = row[i];
                    if (sim < params.westernThreshold) {
                        e.show = false;
                    } else {
                        e.k = 0;
                        e.targetLength = (e.n1.p.clone().sub(e.n0.p)).length();
                        e.show = true;
                    }
                }
            }

            drawWesternEdges();            
        }

        const drawWesternEdges = () => {
            let westernLineNum = 0;
            for (let i = 0; i < g.westernEdges.length; i++) {
                if (g.westernEdges[i].show) {
                    westernLineNum++;
                    const pts = [g.westernEdges[i].n0.p, g.westernEdges[i].n1.p];
                    const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
                    westernLineSegments = new THREE.LineSegments(lineGeo,
                        new THREE.LineBasicMaterial({
                            color: 0xFF0000,
                            transparent: true,
                            opacity: 0.02,
                            depthWrite: false,
                        }));
                    westernLineSegments.name = "westernLineSegment";

                    westernLineSegments.geometry.setDrawRange(0, westernLineNum);
                    westernLineSegments.geometry.attributes.position.needsUpdate = true;    

                    scene.add(westernLineSegments);
                }
            }

            // westernLineSegments.geometry.setDrawRange(0, westernLineNum);
            // westernLineSegments.geometry.attributes.position.needsUpdate = true;            
        }

        const purgeChildren = () => {
            g.Purge();

            if (params.western) {
                g.PurgeWesternEdges();
                params.western = false;

                for (let i = 0; i < scene.children.length; i++) {
                    if (scene.children[i].name === "westernLineSegment") {
                        const obj = scene.children[i];
                        obj.geometry.dispose();
                        obj.material.dispose(); 
                        scene.remove(obj);
                    }
                }
            }

            scene = null;
            document.body.removeChild(renderer.domElement);
            renderer = null;
            lineSegments = null;
            sphereInstance = null;
            camera = null;
            controls = null; 
            document.body.removeChild(labelRenderer.domElement);
            labelRenderer = null; 
        }

        const initNodes = () => {
            // when changing slider for amount of nodes
            if (g.nodes.length > 0) {
                g.Purge();
            }


            for (let i = 0; i < params.nodeCount; i++) {
                g.nodes.push(new N(
                    new THREE.Vector3(
                        Math.random() * 200 - 10,
                        Math.random() * 200 - 10,
                        Math.random() * 200 - 50,
                        ), 
                    _WORDS[i],
                    params.demo === "Book Demo" ? BookTitles[i].themes : ""));
            }

            updateNodes();
        }

        const updateNodes = () => {
            for (let i = 0; i < g.nodes.length; i++) {
                const n = g.nodes[i];
                _dummy.position.set(n.p.x, n.p.y, n.p.z);
                _dummy.updateMatrix();
                sphereInstance.setMatrixAt(i, _dummy.matrix);
            }

            sphereInstance.instanceMatrix.needsUpdate = true;
            sphereInstance.geometry.attributes.position.needsUpdate = true;
        }

        const initEdges = () => {
            // Clear Edges if Edges already exists
            if (g.edges.length > 0) {
                g.PurgeEdges();

                for (let i = 0; i < scene.children.length; i++) {
                    if (scene.children[i].isLineSegments) {
                        const obj = scene.children[i];
                        obj.geometry.dispose();
                        obj.material.dispose(); 
                        scene.remove(obj);
                    }
                }
            }

            const moveScale = nScale;
            for (let j = 0; j < params.nodeCount; j++) {
                const row = _SIMS[j];
                for (let i = j + 1; i < params.nodeCount; i++) {
                    const e = new E(g.nodes[j], g.nodes[i])
                    g.edges.push(e);
                    const sim = row[i];
                    if (sim < params.threshold) {
                        e.k = 10.0;
                        e.targetLength = 100 + (1.0 - sim) * moveScale; // 200.0;
                        e.show = false;
                    } else {
                        _points.push(g.nodes[j].p)
                        e.k = 50;
                        e.targetLength = 35 + (1.0 - sim) * moveScale; // 20.0;//
                        e.weight = sim;
                        e.show = true;
                    }
                }
            }

            drawEdges();
        }

        const drawEdges = () => {
            // update edges connections
            let lineNum = 0;
            for (let i = 0; i < g.edges.length; i++) {
                if (g.edges[i].show) {
                    lineNum++;
                    const pts = [g.edges[i].n0.p, g.edges[i].n1.p];
                    const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
                    lineSegments = new THREE.LineSegments(lineGeo, 
                        new THREE.LineBasicMaterial({
                            // color: edgeColor,
                            // color: `hsl(${i * 360 / g.edges.length}, 80%, 50%)`, // rainbow
                            color: 0x000000,
                            transparent: true,
                            // opacity: edgeOpacity,
                            linewidth: 0.5,
                            opacity: 0.9 - (1.0 - g.edges[i].weight),
                            depthWrite: false
                        }));

                    lineSegments.geometry.setDrawRange(0, lineNum);
                    lineSegments.geometry.attributes.position.needsUpdate = true;
                    scene.add(lineSegments);
                }
            }
            // lineSegments.geometry.setDrawRange(0, lineNum);
            // lineSegments.geometry.attributes.position.needsUpdate = true;
        }

        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
            labelRenderer.setSize(window.innerWidth, window.innerHeight);
        }

        const onPointerMove = (e) => {
            e.preventDefault();

            // pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
            // pointer.y = (e.clientY / window.innerHeight) * 2 + 1;

            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            setMouseXpercentage(Math.round(e.pageY / windowHeight * 100));
            setMouseYpercentage(Math.round(e.pageX / windowWidth * 100));
        }

        const render = () => {
            if (sphereInstance) {
                scene.rotation.y += 0.00015;
                scene.updateMatrixWorld();
                sphereInstance.updateMatrixWorld();
            }

            renderer.render(scene, camera);
            labelRenderer.render(scene, camera);
        }

        const animate = () => {
            requestAnimationFrame(animate);

            g.PurgeLabels();
            g.Move(0.95, 0.015);
            updateNodes();

            if (params.western) {
                initWesternEdges();
            }

            initEdges();
            render();
            controls.update();
        }

        _WORDS = BookTitles.map((e) => e.title);
        init();
        initNodes();
        animate();

        return () => mRef.current.removeChild(renderer.domElement);
    }, []);

    const style = {background: `radial-gradient(ellipse at ' + ${mouseXpercentage} + '% ' + ${mouseYpercentage} + '%, #ee8d76, #FFFFFF), radial-gradient(ellipse at top, #9b59b6, transparent)`};
    return (
        <> 
            <div id="container">
                <span id="demotype">Demo Test</span>
                <span id="count">15 Nodes</span>
            </div>
            <div id="Graph" style={style} ref={mountRef} />
        </>
    )
}

export default BookGraph;