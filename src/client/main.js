const THREE = require('three');

const browser = require('./browser');

const { normalMaterials } = require('./materials');

const { redRough } = normalMaterials();

browser.log('Start-up');

const world = require('./world');

browser.addEventListener('DOMContentLoaded', () => {
    browser.log('DOM Loaded');

    const { add, get } = world('/assets/skyboxes/day');

    add(
        'cubetto',
        new THREE.Mesh(
            new THREE.BoxGeometry(1, 2, 1),
            redRough
        )
    );
});
