const THREE = require('three');

const normalMaterials = () => {
    const redGlass = new THREE.MeshLambertMaterial( { color: 0xff0000, opacity: 0.75, transparent: true } );
    const yellowGlass = new THREE.MeshLambertMaterial( { color: 0xffffaa, opacity: 0.75, transparent: true } );
    const orangeGlass = new THREE.MeshLambertMaterial( { color: 0x995500, opacity: 0.75, transparent: true } );

    const orangeGlass50 = new THREE.MeshLambertMaterial( { color: 0xffbb00, opacity: 0.5, transparent: true } );
    const redGlass50 = new THREE.MeshLambertMaterial( { color: 0xff0000, opacity: 0.5, transparent: true } );

    const fullblackRough = new THREE.MeshLambertMaterial( { color: 0x000000 } );
    const blackRough = new THREE.MeshLambertMaterial( { color: 0x050505 } );
    const darkgrayRough = new THREE.MeshLambertMaterial( { color: 0x090909 } );
    const redRough = new THREE.MeshLambertMaterial( { color: 0x330500 } );

    const darkgrayShiny = new THREE.MeshPhongMaterial( { color: 0x000000, specular: 0x050505 } );
    const grayShiny = new THREE.MeshPhongMaterial( { color: 0x050505, shininess: 20 } );

    return {
        redGlass,
        yellowGlass,
        orangeGlass,

        orangeGlass50,
        redGlass50,

        fullblackRough,
        blackRough,
        darkgrayRough,
        redRough,

        darkgrayShiny,
        grayShiny
    };
};


const reflectiveMaterials = (textureCube) => {
    const orange = new THREE.MeshLambertMaterial( { color: 0xff6600, envMap: textureCube, combine: THREE.MixOperation, reflectivity: 0.3 } );
  	const blue = new THREE.MeshLambertMaterial( { color: 0x001133, envMap: textureCube, combine: THREE.MixOperation, reflectivity: 0.3 } );
  	const red =	new THREE.MeshLambertMaterial( { color: 0x660000, envMap: textureCube, combine: THREE.MixOperation, reflectivity: 0.25 } );
  	const black =	new THREE.MeshLambertMaterial( { color: 0x000000, envMap: textureCube, combine: THREE.MixOperation, reflectivity: 0.15 } );
  	const white =	new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: textureCube, combine: THREE.MixOperation, reflectivity: 0.25 } );

  	const carmine = new THREE.MeshPhongMaterial( { color: 0x770000, specular:0xffaaaa, envMap: textureCube, combine: THREE.MultiplyOperation } );
  	const gold = new THREE.MeshPhongMaterial( { color: 0xaa9944, specular:0xbbaa99, shininess:50, envMap: textureCube, combine: THREE.MultiplyOperation } );
    const bronze = new THREE.MeshPhongMaterial( { color: 0x150505, specular:0xee6600, shininess:10, envMap: textureCube, combine: THREE.MixOperation, reflectivity: 0.25 } );
  	const orangeChrome = new THREE.MeshPhongMaterial( { color: 0xffffff, specular:0xffffff, envMap: textureCube, combine: THREE.MultiplyOperation } );

  	const orangeMetal = new THREE.MeshLambertMaterial( { color: 0xff6600, envMap: textureCube, combine: THREE.MultiplyOperation } );
  	const blueMetal = new THREE.MeshLambertMaterial( { color: 0x001133, envMap: textureCube, combine: THREE.MultiplyOperation } );
  	const redMetal = new THREE.MeshLambertMaterial( { color: 0x770000, envMap: textureCube, combine: THREE.MultiplyOperation } );
  	const greenMetal = new THREE.MeshLambertMaterial( { color: 0x007711, envMap: textureCube, combine: THREE.MultiplyOperation } );
  	const blackMetal = new THREE.MeshLambertMaterial( { color: 0x222222, envMap: textureCube, combine: THREE.MultiplyOperation } );

  	const pureChrome = new THREE.MeshLambertMaterial( { color: 0xffffff, envMap: textureCube } );
  	const darkChrome = new THREE.MeshLambertMaterial( { color: 0x444444, envMap: textureCube } );
  	const darkerChrome = new THREE.MeshLambertMaterial( { color: 0x222222, envMap: textureCube } );

  	const blackGlass = new THREE.MeshLambertMaterial( { color: 0x101016, envMap: textureCube, opacity: 0.975, transparent: true } );
  	const darkGlass = new THREE.MeshLambertMaterial( { color: 0x101046, envMap: textureCube, opacity: 0.25, transparent: true } );
  	const blueGlass = new THREE.MeshLambertMaterial( { color: 0x668899, envMap: textureCube, opacity: 0.75, transparent: true } );
  	const lightGlass = new THREE.MeshBasicMaterial( { color: 0x223344, envMap: textureCube, opacity: 0.25, transparent: true, combine: THREE.MixOperation, reflectivity: 0.25 } );

    return {
        orange,
        blue,
        red,
        black,
        white,

        carmine,
        gold,
        bronze,
        orangeChrome,

        orangeMetal,
        blueMetal,
        redMetal,
        greenMetal,
        blackMetal,

        pureChrome,
        darkChrome,
        darkerChrome,

        blackGlass,
        darkGlass,
        blueGlass,
        lightGlass
    };
};

module.exports = {
    normalMaterials,
    reflectiveMaterials
};
