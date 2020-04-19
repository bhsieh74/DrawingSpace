let camera, scene, renderer, controls;

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

  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 25000);
  camera.position.z = 1000; 
  camera.position.y = 200; 
  scene.add(camera);
  let textureLoader = new THREE.TextureLoader();


  textureLoader.load('images/sun.png', function(texture) {
    let sunmaterial = new THREE.MeshStandardMaterial({map: texture});
    let sphereGeometry2 = new THREE.SphereGeometry(1000, 50, 50);
    let sun = new THREE.Mesh(sphereGeometry2, sunmaterial);
    sun.position.y = 100;
    sun.position.x = 10000;
    scene.add(sun);
  });

  var light = new THREE.AmbientLight(0xffffff); 
  scene.add( light );

  let spotlight = new THREE.SpotLight(0xffffff, 0.8, 2000);
  spotlight.position.set(500, 500, 500);

  textureLoader.load('images/earth.png', function(texture) {
    let earthmaterial = new THREE.MeshStandardMaterial({map: texture});
    let sphereGeometry = new THREE.SphereGeometry(100, 50, 50);
    let earth = new THREE.Mesh(sphereGeometry, earthmaterial);
    earth.position.y = 100;
    scene.add(earth);
  });

  textureLoader.load('images/moon.jpg', function(texture) {
    let moonmaterial = new THREE.MeshStandardMaterial({map: texture});
    let sphereGeometry2 = new THREE.SphereGeometry(20, 50, 50);
    let moon = new THREE.Mesh(sphereGeometry2, moonmaterial);
    moon.position.y = 100;
    moon.position.x = 200;
    scene.add(moon);
  });

  renderer = new THREE.WebGLRenderer({alpha: 1, antialias: true});
  renderer.setSize(width, height);

  controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera); 

  controls.update();
}

init();
animate();