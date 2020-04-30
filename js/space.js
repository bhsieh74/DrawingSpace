let camera, scene, renderer, controls;
let earth, venus, moon, mars, mercury, jupiter, saturn, uranus, neptune;
function init() {
  scene = new THREE.Scene();
  let width = window.innerWidth;
  let height = window.innerHeight;

  scene.background = new THREE.CubeTextureLoader()
    .setPath('images/')
    .load( [
      'right.png',
      'left.png',
      'top.png',
      'bottom.png',
      'front.png',
      'back.png'
  ]);

  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 100000);
  camera.position.z = 1000; 
  camera.position.y = 200; 
  scene.add(camera);
  let textureLoader = new THREE.TextureLoader();

  var light = new THREE.AmbientLight(0xffffff); 
  scene.add(light);

  textureLoader.load('images/sun.png', function(texture) {
    let sunmaterial = new THREE.MeshStandardMaterial({map: texture});
    let sphereGeometry2 = new THREE.SphereGeometry(8655, 50, 50);
    sun = new THREE.Mesh(sphereGeometry2, sunmaterial);
    sun.position.y = 100;
    sun.position.x = 10500;
    scene.add(sun);
  });

  textureLoader.load('images/earth.png', function(texture) {
    let earthmaterial = new THREE.MeshStandardMaterial({map: texture});
    let sphereGeometry = new THREE.SphereGeometry(79, 50, 50);
    earth = new THREE.Mesh(sphereGeometry, earthmaterial);
    earth.position.y = 100;
    scene.add(earth);
  });

  textureLoader.load('images/moon.jpg', function(texture) {
    let moonmaterial = new THREE.MeshStandardMaterial({map: texture});
    let sphereGeometry2 = new THREE.SphereGeometry(10, 50, 50);
    moon = new THREE.Mesh(sphereGeometry2, moonmaterial);
    moon.position.y = 100;
    moon.position.z = -200;
    scene.add(moon);
  });

  textureLoader.load('images/mercury.jpg', function(texture) {
    let mercurymaterial = new THREE.MeshStandardMaterial({map: texture});
    let sphereGeometry = new THREE.SphereGeometry(30, 50, 50);
    mercury = new THREE.Mesh(sphereGeometry, mercurymaterial);
    mercury.position.y = 100;
    mercury.position.x = 1000;
    scene.add(mercury);
  });

  textureLoader.load('images/venus.jpg', function(texture) {
    let venusmaterial = new THREE.MeshStandardMaterial({map: texture});
    let sphereGeometry = new THREE.SphereGeometry(75, 50, 50);
    venus = new THREE.Mesh(sphereGeometry, venusmaterial);
    venus.position.y = 100;
    venus.position.x = 550;
    scene.add(venus);
  });

  textureLoader.load('images/mars.jpg', function(texture) {
    let marsmaterial = new THREE.MeshStandardMaterial({map: texture});
    let sphereGeometry = new THREE.SphereGeometry(42, 50, 50);
    mars = new THREE.Mesh(sphereGeometry, marsmaterial);
    mars.position.y = 100;
    mars.position.x = -800;
    scene.add(mars);
  });

  textureLoader.load('images/asteroid.jpg', function(texture) {
    var counter = 0;
    var randomz;
    var randomx;
    var randomy;
    while (counter <= 1500) {
      randomz = Math.floor(Math.random() * 8000);
      randomz *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
      randomx = -(Math.floor(Math.random() * 1000) + 1400);
      randomy = Math.floor(Math.random() * 250);
      randomy *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
      let asteroidmaterial = new THREE.MeshStandardMaterial({map: texture});
      let sphereGeometry = new THREE.SphereGeometry(9, 5, 5);
      let asteroid = new THREE.Mesh(sphereGeometry, asteroidmaterial);
      asteroid.position.y = randomy;
      asteroid.position.x = randomx;
      asteroid.position.z = randomz;
      counter++;
      scene.add(asteroid);
    }
  });

  textureLoader.load('images/jupiter.jpg', function(texture) {
    let jupitermaterial = new THREE.MeshStandardMaterial({map: texture});
    let sphereGeometry = new THREE.SphereGeometry(868, 50, 50);
    jupiter = new THREE.Mesh(sphereGeometry, jupitermaterial);
    jupiter.position.y = 100;
    jupiter.position.x = -4100;
    scene.add(jupiter);
  });

  textureLoader.load('images/saturn.jpg', function(texture) {
    let saturnmaterial = new THREE.MeshStandardMaterial({map: texture});
    let sphereGeometry = new THREE.SphereGeometry(726, 50, 50);
    saturn = new THREE.Mesh(sphereGeometry, saturnmaterial);
    saturn.position.y = 100;
    saturn.position.x = -8000;
    scene.add(saturn);
  });

  textureLoader.load('images/saturnring.jpg', function(texture) {
    let ringmaterial = new THREE.MeshStandardMaterial({map: texture, side: THREE.DoubleSide});
    let ringGeometry = new THREE.RingGeometry(900, 1450, 50);
    ring = new THREE.Mesh(ringGeometry, ringmaterial);
    ring.position.y = 100;
    ring.position.x = -8000;
    ring.rotateX(240);
    scene.add(ring);
  });

  textureLoader.load('images/uranus.jpg', function(texture) {
    let uranusmaterial = new THREE.MeshStandardMaterial({map: texture});
    let sphereGeometry = new THREE.SphereGeometry(315, 50, 50);
    uranus = new THREE.Mesh(sphereGeometry, uranusmaterial);
    uranus.position.y = 100;
    uranus.position.x = -16000;
    scene.add(uranus);
  });

  
  textureLoader.load('images/neptune.jpg', function(texture) {
    let neptunematerial = new THREE.MeshStandardMaterial({map: texture});
    let sphereGeometry = new THREE.SphereGeometry(300, 50, 50);
    neptune = new THREE.Mesh(sphereGeometry, neptunematerial);
    neptune.position.y = 100;
    neptune.position.x = -23000;
    scene.add(neptune);
  });

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  earth.rotation.y += 0.005;
  moon.rotation.y += 0.005;
  mercury.rotation.y += 0.005;
  venus.rotation.y += 0.005;
  mars.rotation.y += 0.005;
  jupiter.rotation.y += 0.001;
  saturn.rotation.y += 0.01;
  uranus.rotation.y += 0.005;
  neptune.rotation.y += 0.005;
  sun.rotation.y += 0.0002;
  renderer.render(scene, camera); 
  controls.update();
}

init();
animate();
