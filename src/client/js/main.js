const THREE = require('three');
const axios = require('axios');

const browser = require('./browser');
const world = require('./world');
const { normalMaterials, reflectiveMaterials } = require('./materials');
const { loadSkybox } = require('./skybox');

const { redRough, grayShiny } = normalMaterials();

browser.log('Start-up');

const buildScene = ({ add, get, setBackground, setFog }, textureCube, refMats) => {
    axios.get('http://localhost:2327/map')
        .then((res) => {
            const maze = res.data.split('\n');
            const width = maze.length;
            const height = maze[0].length;
            for (let i = 0; i < width; i++) {
                for (let j = 0; j < height; j++)  {
                    if (maze[i][j] === 'X') add(
                        `c${i}-${j}`,
                        new THREE.Mesh(
                            new THREE.BoxGeometry(1, 1, 1),
                            refMats.pureChrome
                        ),
                        new THREE.Vector3(i - width / 2, 0, j - height / 2)
                    );
                }
            }
        })
        .catch((err) => {
            console.log(err);
        });

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
    setBackground(textureCube);
    //setBackground(new THREE.Color(0x000000));



    setFog(new THREE.FogExp2(0xcccccc, 0.002));
};

browser.addEventListener('DOMContentLoaded', () => {
    browser.log('DOM Loaded');
    const textureCube = loadSkybox('/assets/skyboxes/day');
    const refMats = reflectiveMaterials(textureCube);
    const stage = world();
    buildScene(stage, textureCube, refMats);
});
