import * as THREE from 'three';

const camera = (window.camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.01,
  10000
));
camera.position.z = 750;

export { camera };
