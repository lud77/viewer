const THREE = require('three');
const OrbitControls = require('three-orbit-controls')(THREE);

const browser = require('./browser');

module.exports = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    const controls = new OrbitControls(camera, renderer.domElement);

    const objects = {};

    const add = (id, obj) => {
        objects[id] = { obj };
        scene.add(obj);
    };

    const get = (id) => objects[id];

    const setBackground = (background) => {
        scene.background = background;
    };

    const setFog = (fog) => {
        scene.fog = fog;
    };

    const updateFrame = () => {};

    const render = () => {
        requestAnimationFrame(render);
        controls.update();
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

    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', handleResize, false);
    handleResize();

    add('camera', camera);

    camera.position.set(0, 5, 0);
    controls.update();

    render();

    return { add, get, setBackground, setFog };
};
