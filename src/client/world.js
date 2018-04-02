const path = require('path');
const THREE = require('three');
const OrbitControls = require('three-orbit-controls')(THREE);

const browser = require('./browser');

module.exports = (skybox) => {
    const container = document.createElement('div');
	  document.body.appendChild(container);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    const controls = OrbitControls(camera);

    const objects = {};

    const add = (id, obj) => {
        objects[id] = { obj };
        scene.add(obj);

        if (obj.type === 'PerspectiveCamera') animate();
    };

    const get = (id) => objects[id];

    const loadSkybox = (skybox) => new THREE.CubeTextureLoader().load([
        path.join(skybox, `front.jpg`),
        path.join(skybox, `back.jpg`),
        path.join(skybox, `top.jpg`),
        path.join(skybox, `bottom.jpg`),
        path.join(skybox, `left.jpg`),
        path.join(skybox, `right.jpg`)
    ]);

    const updateFrame = () => {};

    const animate = () => {
        requestAnimationFrame(animate);
        updateFrame();
        renderer.render(scene, camera);
    };

    const handleResize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();

        renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize, false);
    handleResize();

    container.appendChild(renderer.domElement);

    const textureCube = loadSkybox(skybox);
    textureCube.mapping = THREE.CubeRefractionMapping;

    scene.background = textureCube;

    add('camera', camera);

    return { add, get };
};
