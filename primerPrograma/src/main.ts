import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Establecer el color de fondo de la escena
renderer.setClearColor(new THREE.Color(1,1,1)); // Color gris oscuro en RGB

// Crear una línea
const lineMaterial = new THREE.LineBasicMaterial({
  color: new THREE.Color(1,0,0),
});
const lineGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(1.8, 0.15, 0),
    new THREE.Vector3(0.10, 1.45, 0)
]);
const line = new THREE.Line(lineGeometry, lineMaterial);
scene.add(line);

// Posicionar la cámara
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();