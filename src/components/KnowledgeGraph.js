import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {GUI} from 'three/addons/libs/lil-gui.module.min.js';
import './css/Graph.css';
import {CSS2DRenderer} from 'three/addons/renderers/CSS2DRenderer.js';

// Indigenous Model Data
import SIMSDATA from '../lib/data/SimMat';
import INDSIMS200 from '../lib/data/IndigenousSimMat200'; // Similarity Matrix from Model trained on 200 Epochs
import IndigenousWords from '../lib/data/IndigenousSimWords';

// Class + Helper files
import {WG, WN, WE} from '../lib/WordGraphHelper';

// Color Constants
const sceneBGColor = new THREE.Color(0xeeeeee);
const edgeColor = new THREE.Color(0xFF0000); // 0xFE9946 orange
const edgeOpacity = 0.35;
const nodeColor = 0xFFFFFF; // 0xD9D192 yellow

const KnowledgeGraph = () => {
    const mountRef = useRef(null);
    const MAX_NODES = 5000;

    useEffect( () => {
        let mRef = mountRef;
        const g = new WG();
        
        // reusable variables
        let camera, scene, renderer, controls; // threejs environment variables
        let lineSegments, sphereInstance; // sphere + line variables
        let labelRenderer; // CSS2D label variable
        const _dummy = new THREE.Object3D();
        // const _matrix = new THREE.Matrix4();
        // const _position = new THREE.Vector3();
        const _points = [];
        const nScale = 60;
        let _SIMS = SIMSDATA;

        const params = {
            corpus: "western",
            nodeCount: 25,
            threshold: 0.68,
            state: 0,
            state1: () => {params.state = 1},
            state2: () => {params.state = 2},
            state3: () => {params.state = 3},
            state4: () => {params.state = 4},
        }

        const init = () => {
            // threejs scene
            scene = g.scene;
            scene.background = sceneBGColor;
            
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
            // model 0 - 30 words, only plants? 20,000 words
            // model 1 - 30 words, 50,000 words
            // model 2 - 30 words, 150,000 words
            // model 3 - 30 words, 300,000 words

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

            // buttons
            const guiStatesFolder = gui.addFolder("States");
            const graphStates = [1, 2, 3, 4];
            const statesControl = [];
            // guiStatesFolder.add(params, "state").options(graphStates).onChange((v) => {
            //     console.log(v);
            // })
            statesControl.push(guiStatesFolder.add(params, "state1"));
            statesControl.push(guiStatesFolder.add(params, "state2"));
            statesControl.push(guiStatesFolder.add(params, "state3"));
            statesControl.push(guiStatesFolder.add(params, "state4"));
        }

        const loopStates = () => {
            const functionQueue = [console.log("00"), console.log("01"), console.log("02")];
            const l = functionQueue.length;
            while (true) {
                for (let i = 0; i < l; i++) {
                    l[i]();
                }
            }
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
                            color: edgeColor,
                            transparent: true,
                            opacity: edgeOpacity,
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

            // loopStates();

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
            <div id="Graph" ref={mountRef} />
        </>
    )
}

export default KnowledgeGraph;