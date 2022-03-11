import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls.js";
// init

const camera = window.camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.01,
  10000
);
camera.position.z = 1000;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
// scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

const loader = new FBXLoader();

loader.load(
  "/flute.fbx",
  function (fbx) {
    console.log('fbx:', fbx)
    fbx.rotation.z = Math.PI / 2
    scene.add(fbx);

    const newMaterial = fbx.children[3].material.clone()
    newMaterial.color = new THREE.Color('red')
    newMaterial.emissiveIntensity = 0
    newMaterial.reflectivity = 0
    newMaterial.refractionRatio = 0
    newMaterial.shininess = 0
    fbx.children[2].children[11].material = newMaterial;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

// lights

const light = new THREE.AmbientLight(0x404040);
scene.add(light);

const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight1.position.set(0, 0, 1000);
scene.add(directionalLight1);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight2.position.set(0, 0, -1000);
scene.add(directionalLight2);

const directionalLight3 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight3.position.set(0, 1000, 0);
scene.add(directionalLight3);

const directionalLight4 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight4.position.set(0, -1000, 0);
scene.add(directionalLight4);

const PointLight = new THREE.PointLight(0xff0000, 1, 100);
PointLight.position.set(300, 300, 300);
scene.add(PointLight);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animation);
document.body.appendChild(renderer.domElement);

const controls = new TrackballControls(camera, renderer.domElement);
controls.rotateSpeed = 1.5;
controls.zoomSpeed = 10;
controls.panSpeed = 1;

controls.keys = ["KeyA", "KeyS", "KeyD"];
// animation
function animation(time) {
  renderer.render(scene, camera);
  controls.update();
}

window.onresize = function onWindowResize() {
  const aspect = window.innerWidth / window.innerHeight;
  camera.aspect = aspect;
  renderer.setSize(window.innerWidth, window.innerHeight);
  controls.handleResize();
};
