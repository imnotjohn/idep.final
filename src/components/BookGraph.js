import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {GUI} from 'three/addons/libs/lil-gui.module.min.js';
import {CSS2DRenderer} from 'three/addons/renderers/CSS2DRenderer.js';
import './css/Graph.css';

// Book Titles
import NativeReadsBookTitles from '../lib/data/NativeReadsBookTitles.js';
// Titles SIMMAT
import NRBOOKSSIMMAT from '../lib/data/NativeReadsBookSimMat.js';

// Book Themes
import NativeReadsWords from '../lib/data/NativeReadsWords'; // NR Word List
// Themes SIMMAT
import NativeReadsWordsSimMat from '../lib/data/NativeReadsWordsSimMat';

// Class + Helper files
import {G, N, E} from '../lib/BookGraphHelper';

// test
import { Line2 } from 'three/addons/lines/Line2.js';                        //test
import { LineMaterial } from 'three/addons/lines/LineMaterial.js';          //test
import { LineGeometry } from 'three/addons/lines/LineGeometry.js';          //test

// Color Constants
const sceneBGColor = new THREE.Color(0xeeeeee);
const edgeColor = new THREE.Color(0xFF0000); // 0xFE9946 orange
const edgeOpacity = 0.35;
const nodeColor = 0xFFFFFF; // 0xD9D192 yellow

const BookGraph = () => {
    const mountRef = useRef(null);
    const MAX_NODES = 5000;

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
        let _SIMS = NRBOOKSSIMMAT; // similarity matrix data
        let _WORDS = NativeReadsBookTitles;

        const params = {
            nodeCount: _WORDS.length,
            threshold: 0.65,
            demo: "Book Titles",
        }

        const init = () => {
            // threejs scene
            g = new G();
            scene = g.scene;
            scene.background = sceneBGColor;
            
            // if (document.querySelector("#count")) {
            //     const countElement = document.querySelector("#count");
            //     const threshElement = document.querySelector("#threshold");
            //     countElement.innerText = params.nodeCount;
            //     threshElement.innerText = params.threshold;
            // }

            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(225, 250, 100);
            camera.lookAt(0, 0, 0);

            const light = new THREE.HemisphereLight(0xFFFFFF, 0x999999);
            scene.add(light);

            renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );

            initLabels(); // CSS2D Object
            initNodeObject(); // Instanced Object
            initGUI(); // GUI Object

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
            sphereInstance = new THREE.InstancedMesh(
                new THREE.SphereGeometry(0.8, 32, 16),
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
            const guiDemoStates = ["Book Titles", "Book Themes"];
            guiDemoFolder.add(params, "demo").options(guiDemoStates).onChange((v) => {
                if (!v.includes("Themes")) {
                    purgeChildren();

                    // Book Titles
                    _SIMS = NRBOOKSSIMMAT;
                    _WORDS = NativeReadsBookTitles;

                    params.threshold = 0.70;
                    params.nodeCount = _WORDS.length;

                    init();
                    initNodes();

                } else {
                    // TODO: How to clear Scene?`
                    purgeChildren();

                    // Book Themes
                    _SIMS = NativeReadsWordsSimMat;
                    _WORDS = NativeReadsWords;

                    params.threshold = 0.29;
                    params.nodeCount = _WORDS.length;

                    init();
                    initNodes();
                }
            })

            // similarity threshold
            const guiThresholdFolder = gui.addFolder("Threshold");
            guiThresholdFolder.add(params, "threshold", 0.15, 1.00, 0.01).onChange((v) => {
                initEdges();
                params.threshold = v;
            });
        }

        const purgeChildren = () => {
            g.Purge();
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
                    _WORDS[i]));
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
                        e.weight = sim; // test
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
                    // const lineGeo = new LineGeometry();  //test
                    // lineSegments = new Line2(lineGeo,    //test
                    //     new LineMaterial({               //test
                    //         color: edgeColor,            //test
                    //         transparent: true,           //test
                    //         opacity: edgeOpacity,        //test
                    //         linewidth: 10,               //test
                    //         depthWrite: false,           //test
                    //     }));                             //test
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
            initEdges();
            render();
            controls.update();
        }

        init();
        initNodes();
        animate();

        return () => mRef.current.removeChild(renderer.domElement);
    }, []);

    return (
        <>
            <div id="Graph" ref={mountRef} />
        </>
    )
}

export default BookGraph;