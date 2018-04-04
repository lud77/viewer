const THREE = require('three');

const browser = require('./browser');
const world = require('./world');

const { normalMaterials } = require('./materials');
const { loadSkybox } = require('./skybox');

const { redRough } = normalMaterials();

browser.log('Start-up');

const buildScene = ({ add, get, setBackground, setFog }) => {
    add(
        'cubetto',
        new THREE.Mesh(
            new THREE.BoxGeometry(1, 2, 1),
            new THREE.MeshLambertMaterial({ color: 0xff0000, opacity: 1, transparent: false })
        )
    );

    add('ambient-light', new THREE.AmbientLight(0x222222));

    const sun = new THREE.DirectionalLight(0xffffff);
    sun.position.set(-2000, 2000, -2000);

    add('sun-light', sun);

/*
    const ground = new THREE.PlaneGeometry(100000, 100000);

    //ground.rotation.x = -Math.PI / 2;

    ground.traverse((obj) => {
        obj.castShadow = true;
        obj.receiveShadow = true;
    });

    add('ground', ground);
*/
    const textureCube = loadSkybox('/assets/skyboxes/day');
    setBackground(textureCube);
    //setBackground(new THREE.Color(0x000000));
    setFog(new THREE.FogExp2(0xcccccc, 0.002));
};

browser.addEventListener('DOMContentLoaded', () => {
    browser.log('DOM Loaded');
    const stage = world();
    buildScene(stage);
});
