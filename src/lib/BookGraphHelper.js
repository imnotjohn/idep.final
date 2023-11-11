import * as THREE from 'three';
// Labels
import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

// Graph
class G {
    constructor() {
        this.nodes = [];
        this.themeNodes = [];
        this.edges = [];
        this.westernEdges = [];
        this.fixed = false; // when to stop loops
        this.scene = new THREE.Scene();
    }

    Purge = () => {
        this.nodes = [];
        this.edges = [];

        const sc = this.scene.children;
        for (let i = 0; i < sc.length; i++) {
            const obj = sc[i];
            
            // purge lineSegments for Edges
            if (obj.isLineSegments && obj.name !== "westernLineSegment") {
                obj.geometry.dispose();
                obj.material.dispose();
                this.scene.remove(obj);
            }

            // purge instancedMesh for Nodes
            if (obj.isInstancedMesh) {
                obj.geometry.dispose();
                obj.material.dispose();
                this.scene.remove(obj);
            }

            // test
            obj.traverse((c) => {
                this.scene.remove(c);
            });

            this.scene = new THREE.Scene();
        }
    }

    #PurgeSceneChild = (c) => {
        c.geometry.dispose();
        c.material.dispose(); 
        this.scene.remove(c);
    }

    PurgeEdges = () => {
        this.edges = [];

        for (let i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].isLineSegments) {
                this.#PurgeSceneChild(this.scene.children[i]);
            }
        }
    }

    PurgeWesternEdges = () => {
        this.westernEdges = [];


        for (let i = 0; i < this.scene.children.length; i++) {
            if (this.scene.children[i].name === "westernLineSegment") {
                this.#PurgeSceneChild(this.scene.children[i]);
            }
        }
    }

    PurgeLabels = () => {
        const sc = this.scene.children;
        for (let i = 0; i < sc.length; i++) {
            if (sc[i].isCSS2DObject) {
                this.scene.remove(sc[i]);
            }
        }
    }

    Move = (damping, dt) => {
        if (this.fixed) return;
        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].f = new THREE.Vector3(0.0, 0.0, 0.0);
            this.initLabels(this.nodes[i]);
        }

       for (let i = 0; i < this.edges.length; i++) {
           this.edges[i].ApplySpringForce();
        }

        for (let i = 0; i < this.nodes.length; i++) {
            this.nodes[i].Move(damping, dt);
        }
    }

    // convert word string to Title Case
    titleCaseLabels = (w) => {
        let title = w.split(" ");
        title.map( (t) => {return t.length > 3 ? t.toUpperCase() : t.toLowerCase()});
        return title.join(" ");
    }

    initLabels = (node) => {
        //2D
        const nodeDiv = document.createElement("div");
        nodeDiv.className = "label";
        nodeDiv.textContent = this.titleCaseLabels(node.w);
        nodeDiv.style.marginTop = "-1em";
        const nodeLabel = new CSS2DObject(nodeDiv);
        nodeLabel.position.set(node.p.x, node.p.y, node.p.z);
        // sphereInstance.add(nodeLabel);
        this.scene.add(nodeLabel);       
    }
}

// Node
class N {
    constructor (p, w, t) {
        this.p = p; // position (x, y)
        this.w = w; // word
        this.themes = t; 
        this.u = new THREE.Vector3();
        this.f = new THREE.Vector3();        
    }

    Move = (damping, dt) => {
        this.u.multiplyScalar(damping);
        this.u.add(this.f.multiplyScalar(dt));
        this.p.add(this.u.multiplyScalar(dt));
    }
}

// Edge
class E {
    constructor(n0, n1) {
        this.n0 = n0;
        this.n1 = n1;
        this.targetLength = 100.0;
        this.k = 0.15; // spring constant
        this.weight = 0.0;
        this.show = false;        
    }

    ApplySpringForce = () => {
        let forceDir = this.n1.p.clone()
        forceDir.sub(this.n0.p); // forceDir
        const dist = forceDir.length(); // currentLength
        const strain = (dist - this.targetLength) * this.k;
        forceDir.normalize();
        forceDir.multiplyScalar(strain)

        this.n0.f.add(forceDir);
        this.n1.f.sub(forceDir);
    }
}

export {G, N, E};