// React App library
import React, {useEffect, useRef} from 'react';

// ThreeJS library
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

// Object Classes
import {ExampleGraph, ExampleNode, ExampleEdge} from '../lib/ExampleHelper';

const Example = () => {
    const mountRef = useRef(null);

    useEffect( () => {
        console.log("Example Graph Did Mount.");

        let mRef = mountRef;
        let g = new ExampleGraph();

        // reusable variables
        let camera, scene, renderer, controls; //threejs environment variables

        const init = () => {
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0xFFFFFF);

            camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.05, 500);
            camera.position.set(125, 150, 50);
            camera.lookAt(0, 0, 0);

            const testMaterial = new THREE.MeshBasicMaterial({color: 0x333333});
            const testGeom = new THREE.SphereGeometry(5, 32, 16);
            const testMesh = new THREE.Mesh(testGeom, testMaterial);
            testMesh.position.x = 0;
            testMesh.position.y = 0;
            testMesh.position.z = 0;

            const light = new THREE.HemisphereLight(0xFFFFFF, 0x9F2B68);
            scene.add(light);

            renderer = new THREE.WebGLRenderer({alpha:true, antialias: true});
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            // init orbit controls + damping
            initControls();

            // init nodes
            initNodes();

            // init edges
            initEdges();

            // render Graph + Nodes + Edges
            renderGraph();
        }

        const initControls = () => {
            controls = new OrbitControls(camera, renderer.domElement); // 2D
            controls.minDistance = 0.5;
            controls.maxDistance = 1500;
            controls.target.set(0, 0, 0);
            controls.enableDamping = true;
        }

        const initNodes = () => {
            // create three node points
            const node0 = new ExampleNode(-50, 0, 0);
            const node1 = new ExampleNode(0, 50, 0);
            const node2 = new ExampleNode(25, 50, 0);

            g.nodes.push(node0);
            g.nodes.push(node1);
            g.nodes.push(node2);
        }

        const initEdges = () => {
            const edge0 = new ExampleEdge(g.nodes[0], g.nodes[1]);
            const edge1 = new ExampleEdge(g.nodes[1], g.nodes[2]);
            const edge2 = new ExampleEdge(g.nodes[2], g.nodes[0]);

            g.edges.push(edge0);
            g.edges.push(edge1);
            g.edges.push(edge2);

            drawEdges();
        }

        const drawEdges = () => {
            for (let i = 0; i < g.edges.length; i++) {
                const pts = [g.edges[i].n0.p, g.edges[i].n1.p];
                const lineGeom = new THREE.BufferGeometry().setFromPoints(pts);
                const lineSegments = new THREE.LineSegments(lineGeom,
                    new THREE.LineBasicMaterial({
                        color: 0xFF0000,
                        transparent: true,
                        opacity: 0.6,
                        depthWrite: false
                    }));
                scene.add(lineSegments);
            }
        }

        const renderGraph = () => {
            for (let i = 0; i < g.nodes.length; i++) {
                const n = g.nodes[i];
                const material = new THREE.MeshBasicMaterial({color: 0x333333});
                const geom = new THREE.SphereGeometry(8, 32, 16);
                const sphereMesh = new THREE.Mesh(geom, material);
                
                sphereMesh.position.x = n.p.x;
                sphereMesh.position.y = n.p.y;
                sphereMesh.position.z = n.p.z;
                
                scene.add(sphereMesh);
            }
        }

        // testing sphere renders
        // const renderSpheres = () => {
        //     const material = new THREE.MeshBasicMaterial({color: 0x333333});
        //     const geom = new THREE.SphereGeometry(10, 32, 16);

        //     const sphere0 = new THREE.Mesh(geom, material);
        //     const sphere1 = new THREE.Mesh(geom, material);
        //     const sphere2 = new THREE.Mesh(geom, material);

        //     sphere0.position.x = 0;
        //     sphere0.position.y = 0;
        //     sphere0.position.z = 0;

        //     sphere1.position.x = 20;
        //     sphere1.position.y = 20;
        //     sphere1.position.z = 20;
            
        //     sphere2.position.x = -20;
        //     sphere2.position.y = -20;
        //     sphere2.position.z = -20;
            
        //     scene.add(sphere0);
        //     scene.add(sphere1);
        //     scene.add(sphere2);
        // }

        const updateCameraLookAt = () => {
            const vec = new THREE.Vector3();
            const len = g.nodes.length;
    
            for (let i = 0; i < len; ++i) {
                vec.x += g.nodes[i].p.x;
                vec.y += g.nodes[i].p.y;
                vec.z += g.nodes[i].p.z;
            }

            camera.lookAt(vec.x/len, vec.y/len, vec.z/len);
        }

        const animate = () => {
            requestAnimationFrame(animate);

            renderer.render(scene, camera);
            controls.update();
        }

        init();
        updateCameraLookAt();
        animate();

        return () => mRef.current.removeChild(renderer.domEleent);
    }, []);

    return (
        <div id="Scene" ref={mountRef} />
    )
}

export default Example;