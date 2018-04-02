const THREE = require('three');

const browser = require('./browser');

const { normalMaterials } = require('./materials');
const { loadSkybox } = require('./utils');

const { redRough } = normalMaterials();

browser.log('Start-up');

const world = require('./world');

browser.addEventListener('DOMContentLoaded', () => {
    browser.log('DOM Loaded');

    const { add, get, setBackground } = world();

    add(
        'cubetto',
        new THREE.Mesh(
            new THREE.BoxGeometry(1, 2, 1),
            new THREE.MeshLambertMaterial({ color: 0xff0000, opacity: 1, transparent: false })
        )
    );

    //const textureCube = loadSkybox('/assets/skyboxes/day');
    //setBackground(textureCube);
    setBackground(new THREE.Color(0x000000));
});
