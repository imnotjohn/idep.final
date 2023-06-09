import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {GUI} from 'three/addons/libs/lil-gui.module.min.js';
import './css/Graph.css';
import {CSS2DRenderer} from 'three/addons/renderers/CSS2DRenderer.js';
// Data
import SIMSDATA from '../lib/data/SimMat';
// Indigenous Model Data
import INDSIMS200 from '../lib/data/IndigenousSimMat200'; // Similarity Matrix from Model trained on 200 Epochs
import IndigenousWords from '../lib/data/IndigenousSimWords';

import {WG, WN, WE} from '../lib/WordGraphHelper';

const WordGraph = () => {
    const mountRef = useRef(null);
    const MAX_NODES = 25;

    useEffect( () => {
        let mRef = mountRef;
        let g = new WG();

        // reusable variables
        let camera, scene, renderer, controls; // threejs environment variables
        let lineSegments, sphereInstance; // sphere + line variables
        let labelRenderer; // CSS2D label variable
        const _dummy = new THREE.Object3D();
        const _matrix = new THREE.Matrix4();
        const _position = new THREE.Vector3();
        const _points = [];
        const nScale = 60;
        let _SIMS = SIMSDATA;

        const params = {
            corpus: "western",
            nodeCount: 25,
            threshold: 0.70, //0.68
        }
        // params.threshold = params.nodeCount > 100 ? 0.85 : 0.65;

        const init = () => {

            // threejs Environment
            scene = g.scene;
            scene.background = new THREE.Color(0x222E1A);
            
            if (document.querySelector("#count")) {
                const countElement = document.querySelector("#count");
                const threshElement = document.querySelector("#threshold");
                countElement.innerText = params.nodeCount;
                threshElement.innerText = params.threshold;
            }

            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(225, 250, 100);
            camera.lookAt(0, 0, 0);

            const light = new THREE.HemisphereLight(0xFFFFFF, 0x999999);
            scene.add(light);

            renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
            renderer.setPixelRatio( window.devicePixelRatio );
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );

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

            // Instanced Object
            sphereInstance = new THREE.InstancedMesh(
                new THREE.SphereGeometry(0.8, 32, 16),
                new THREE.MeshPhongMaterial({color: 0xD9D192}),
                MAX_NODES
            );
            sphereInstance.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // will be updated every frame

            scene.add(sphereInstance);

            // set up GUI
            const gui = new GUI();
            // node counts
            // gui.add(sphereInstance, "count", 1, MAX_NODES, 10).onChange((v) => {
                // countElement.innerText = params.nodeCount;
            // });
            // model dropdowns
            const guiModelFolder = gui.addFolder("Model Selection");
            const modelStates = ["western", "non-western"];
            guiModelFolder.add(params, "corpus").options(modelStates).onChange((v) => {
                if (!v.includes("non")) {
                    params.threshold = 0.70;
                    _SIMS = SIMSDATA;
                } else {
                    // params.threshold = 0.56; //100 Epochs
                    params.threshold = 0.52; //200 Epochs
                    _SIMS = INDSIMS200;
                }
            })
            // similarity threshold
            const guiThresholdFolder = gui.addFolder("Threshold");
            guiThresholdFolder.add(params, "threshold", 0.45, 1.00, 0.01).onChange((v) => {
                initEdges();
            });
        
            window.addEventListener( 'resize', onWindowResize );
            onWindowResize();
        }

        const setTargetAverage = () => {
            const vec = new THREE.Vector3();
            const len = g.nodes.length;
    
            for (let i = 0; i < len; ++i) {
                vec.x += g.nodes[i].p.x;
                vec.y += g.nodes[i].p.y;
                vec.z += g.nodes[i].p.z;
            }

            camera.lookAt(vec.x/len, vec.y/len, vec.z/len);
        }

        const initNodes = () => {
            // when changing slider for amount of nodes
            if (g.nodes.length > 0) {
                g.Purge();
            }

            for (let i = 0; i < params.nodeCount; i++) {
                g.nodes.push(new WN(
                    new THREE.Vector3(
                        Math.random() * 200 - 10,
                        Math.random() * 200 - 10,
                        Math.random() * 200 - 50,
                        ), 
                    IndigenousWords[i]));
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
                    const e = new WE(g.nodes[j], g.nodes[i])
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
                            color: 0xFE9946,
                            transparent: true,
                            opacity: 0.6,
                            depthWrite: false
                        }));
                    scene.add(lineSegments);
                }
            }

            sphereInstance.instanceMatrix.needsUpdate = true;
            lineSegments.geometry.setDrawRange(0, lineNum);
            lineSegments.geometry.attributes.position.needsUpdate = true;
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

            g.removeLabels();
            g.Move(0.95, 0.015);
            updateNodes();
            initEdges();
            render();
            controls.update();
        }

        init();
        initNodes();
        setTargetAverage(); // update position to centroid of nodes
        animate();

        return () => mRef.current.removeChild(renderer.domElement);
    }, []);

    return (
        <>
            <div id="title">First Futures: Gather</div>
            <div id="status">
                <p>Count: <span id="count"></span></p>
                <p>Threshold: <span id="threshold"></span></p>
            </div>
            <div id="Graph" ref={mountRef} />
        </>
    )
}

export default WordGraph;