

let comethorizontal = -150;
let cometvertical = 10;

let ufohorizontal = -1250;
let ufovertical = 1;

let satellitehorizontal = -1000;
let satellitevertical = 100;

let astronauthorizontal = -100;
let astronautvertical = 100;
let astronautrotate = 0;
let astronautdownwards = true;
let astronautleft = true;

let asteroidhorizontal = 500;
let asteroidvertical = 100;
let asteroidrotate = 0;


let spaceshiphorizontal = -300;
let spaceshipvertical = 100;

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
        objects[2].style.transform = "rotateZ(" + asteroidrotate + "deg)";
        asteroidrotate = asteroidrotate + .28;
    } 
    else {
        satellitehorizontal = -1600;
    }

    if (astronautleft == true) {
        astronauthorizontal += 5; 
        objects[3].style.right = astronauthorizontal + 'px';
        objects[3].style.transform = "rotateZ(" + astronautrotate + "deg)";
        astronautrotate = astronautrotate + 1;
        if (astronauthorizontal == screen.width-250) {
            astronautleft = false;
        }
    }

    if (astronautleft == false) {
        astronauthorizontal = astronauthorizontal - 5;
        objects[3].style.right = astronauthorizontal + 'px';
        objects[3].style.transform = "rotateZ(" + astronautrotate + "deg)";
        astronautrotate = astronautrotate + 1;
        if (astronauthorizontal == -100) {
            astronautleft = true;
        }
    }

    if (astronautdownwards == true) {
        astronautvertical += 2;
        objects[3].style.top = astronautvertical + 'px';
        if (astronautvertical == 800) {
            astronautdownwards = false;
        }
    }
    if (astronautdownwards == false) {
        astronautvertical -= 2;
        objects[3].style.top = astronautvertical + 'px';
        if (astronautvertical == 0) {
            astronautdownwards = true;
        }
    }

    if (asteroidhorizontal < 2000) {
        asteroidhorizontal += 1; 
        objects[4].style.left = asteroidhorizontal + 'px';
        objects[4].style.transform = "rotateZ(" + asteroidrotate + "deg)";
        asteroidrotate = asteroidrotate + .28;
    }
    else {
        asteroidhorizontal = -2500;
    }


    if (spaceshiphorizontal < 2000) {
        spaceshiphorizontal += .5;
        objects[5].style.left = spaceshiphorizontal + 'px';
    }
    else {
        spaceshiphorizontal = -2000;
    }

    if (spaceshipvertical < 1000) {
        spaceshipvertical += .2;
        objects[5].style.top = spaceshipvertical + 'px';
    }
 
}   
