const THREE = require('three');
const OrbitControls = require('three-orbit-controls')(THREE);

const browser = require('./browser');

module.exports = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    const controls = new OrbitControls(camera, renderer.domElement);
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let selected = null;

    const objects = [];

    const add = (id, obj, position) => {
        obj.name = id;
        objects.push({ id, obj });

        if (position != null) {
            obj.position.x = position.x;
            obj.position.y = position.y;
            obj.position.z = position.z;
        }
        scene.add(obj);
    };

    const move = (id, position) => {
        const obj = get(id);
        obj.position.x = position.x;
        obj.position.y = position.y;
        obj.position.z = position.z;
    };

    const moveBy = (id, position) => {
        const obj = get(id);
        obj.position.x = position.x;
        obj.position.y = position.y;
        obj.position.z = position.z;
    };

    const get = (id) => objects.find((el) => el.id === id);

    const getAllObjects = () => objects.map((el) => el.obj);

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

    const handleMouseDown = (event) => {
        mouse.x = 2 * (event.clientX / window.innerWidth) - 1;
        mouse.y = 1 - 2 * (event.clientY / window.innerHeight);

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(scene.children);

        if (intersects.length > 0) {
            console.log(`intersected ${intersects[0].object.name}`, intersects[0]);
            selected = intersects[0];
        } else {
            selected = null;
        }
    };

    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', handleResize, false);
    handleResize();

    document.addEventListener('mousedown', handleMouseDown);

    add('camera', camera);

    camera.position.set(0, 15, 0);
    controls.update();

    render();

    return {
        add,
        get,
        setBackground,
        setFog,
        move,
        moveBy
    };
};
