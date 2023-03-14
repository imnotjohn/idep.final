import * as THREE from 'three';

class ExampleGraph {
    constructor() {
        this.nodes = [];
        this.edges = [];
        this.scene = new THREE.Scene();
    }
}

class ExampleEdge {
    constructor(node0, node1) {
        this.n0 = node0;
        this.n1 = node1;
        this.targetLength = 100.0;
        this.k = 0.15; // spring constant
        this.show = true;
    }
}

class ExampleNode {
    constructor(p) {
        this.p = new THREE.Vector3(p);
        this.u = new THREE.Vector3();
        this.f = new THREE.Vector3();
    }
}

export {ExampleGraph, ExampleNode, ExampleEdge};