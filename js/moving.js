let comethorizontal = -150;
let cometvertical = 10;

let ufohorizontal = -1250;
let ufovertical = 1;

let satellitehorizontal = -1000;
let satellitevertical = 100;

let astronauthorizontal = -700;
let astronautvertical = 100;
let astronautrotate = 0;

let asteroidhorizontal = -1500;
let asteroidvertical = 100;


let animation = requestAnimationFrame(float);

const objects = document.querySelectorAll('.move');
console.log(objects);
function float() {
animation = requestAnimationFrame(float);

    if (comethorizontal < 2000) {
        comethorizontal += .65; 
        cometvertical += .25;
        objects[0].style.right = comethorizontal + 'px'; 
        objects[0].style.top = cometvertical + 'px';
    } 
    else {
        walker1position = -1200;
    }

    if (ufohorizontal < 2000) {
        ufohorizontal += 1; 
        objects[1].style.right = ufohorizontal + 'px'; 
    } 
    else {
        ufohorizontal = -1900;
    }

    if (satellitehorizontal < 2000) {
        satellitehorizontal += 3; 
        objects[2].style.left = satellitehorizontal + 'px'; 
    } 
    else {
        satellitehorizontal = -1600;
    }

    if (astronauthorizontal < 2000) {
        astronauthorizontal += 2; 
        objects[3].style.right = astronauthorizontal + 'px';
        objects[3].style.transform = "rotateZ(" + astronautrotate + "deg)";
        astronautrotate = astronautrotate + .5;
    } 
    else {
        astronauthorizontal = -1900;
    }

    if (asteroidhorizontal < 2000) {
        asteroidhorizontal += 1; 
        objects[4].style.left = asteroidhorizontal + 'px'; 
    }
    else {
        asteroidhorizontal = -2500;
    }
}   