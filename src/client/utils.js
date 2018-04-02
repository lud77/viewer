const path = require('path');
const THREE = require('three');

const loadSkybox = (skybox) => {
    const textureCube = new THREE.CubeTextureLoader().load([
        path.join(skybox, `front.jpg`),
        path.join(skybox, `back.jpg`),
        path.join(skybox, `top.jpg`),
        path.join(skybox, `bottom.jpg`),
        path.join(skybox, `left.jpg`),
        path.join(skybox, `right.jpg`)
    ]);

    textureCube.mapping = THREE.CubeRefractionMapping;

    return textureCube;
};

module.exports = {
    loadSkybox
};
