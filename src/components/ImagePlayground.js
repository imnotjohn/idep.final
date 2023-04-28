import React, {useEffect, useRef} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

// Class + Helper files
import {G, N} from '../lib/KnowledgeGraphHelper';

// Import JSON
import data from "../lib/books.json";

// Color Constants
const sceneBGColor = new THREE.Color(0xeeeeee);
// const edgeColor = new THREE.Color(0xFF0000); // 0xFE9946 orange
// const edgeOpacity = 0.35;
const nodeColor = 0xFFFFFF; // 0xD9D192 yellow

const MAX_NODES = 10;

const ImagePlayground = () => {
    const mountRef = useRef(null);
    const objects = data.books;

    useEffect( () => {
        let mRef = mountRef;
        const g = new G();

        // reusable
        let camera, scene, renderer, controls;
        let sphereInstance; // sphere + line variables
        const _dummy = new THREE.Object3D();

        // state / GUI parameters
        const params = {nodeCount: objects.length};

        const init = () => {
            scene = g.scene;
            scene.background = sceneBGColor;
            
            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(225, 250, 100);
            camera.lookAt(0, 0, 0);

            const light = new THREE.HemisphereLight(0xFFFFFF, 0x999999);
            scene.add(light);

            renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            // initLabels(); // CSS2D Object
            initControls();
            initNodeObject(); // Instanced Object
            // initGUI(); // GUI Object

            window.addEventListener( 'resize', onWindowResize );
            onWindowResize();
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
                    objects[i].title));
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

        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
            // labelRenderer.setSize(window.innerWidth, window.innerHeight);
        }

        const initControls = () => {
            controls = new OrbitControls(camera, renderer.domElement); // 2D
            controls.minDistance = 25;// zoom min
            controls.maxDistance = 700;// zoom max
            controls.target.set(0, 0, 0);
            controls.enableDamping = true;
        }

        const render = () => {
            if (sphereInstance) {
                scene.rotation.y += 0.00015;
                scene.updateMatrixWorld();
                sphereInstance.updateMatrixWorld();
            }

            renderer.render(scene, camera);
            // labelRenderer.render(scene, camera);
        }

        const animate = () => {
            requestAnimationFrame(animate);

            // g.PurgeLabels();
            // g.Move(0.95, 0.015);
            updateNodes();
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

export default ImagePlayground;