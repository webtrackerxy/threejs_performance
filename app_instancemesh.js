import * as THREE from "three";
import { BufferGeometryUtils } from "three/examples/jsm/utils/BufferGeometryUtils.js";

let width = window.innerWidth;
let height = window.innerHeight;
let renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
camera.position.z = 75;
scene.add(camera);
let light = new THREE.PointLight(0xffffff);
light.position.set(-100, 200, 100);
scene.add(light);

// Create InstancedMesh
const boxGeometry = new THREE.BoxGeometry(0.75, 0.75, 0.75);
const material = new THREE.MeshNormalMaterial();
const instances = 30 * 30 * 30;
const instancedMesh = new THREE.InstancedMesh(boxGeometry, material, instances);

let i = 0;
for (let x = 0; x < 30; x++) {
  for (let y = 0; y < 30; y++) {
    for (let z = 0; z < 30; z++) {
      let positionMatrix = new THREE.Matrix4();
      positionMatrix.setPosition(new THREE.Vector3(x - 15, y - 15, z - 15));
      instancedMesh.setMatrixAt(i, positionMatrix);
      i++;
    }
  }
}

scene.add(instancedMesh);

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}
function animate() {
  renderer.render(scene, camera);
  instancedMesh.rotation.x += 0.002;
  instancedMesh.rotation.y += 0.004;
  requestAnimationFrame(animate);
}
resize();
animate();
window.addEventListener("resize", resize);

// FPS counter
let fpsDisplay = document.getElementById("fps");
let lastFrameTime = performance.now();
let frameCount = 0;

function updateFPS() {
  let currentTime = performance.now();
  frameCount++;
  if (currentTime - lastFrameTime >= 1000) {
    fpsDisplay.textContent = `${frameCount} FPS`;
    frameCount = 0;
    lastFrameTime = currentTime;
  }
  requestAnimationFrame(updateFPS);
}

updateFPS();
