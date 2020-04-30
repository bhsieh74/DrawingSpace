
let rotation = document.getElementById("planet");

let images = document.querySelectorAll('section > a');

function mouseOn() {
    images[0].style.opacity = '0.3';
    images[1].style.opacity = '0.3';
    images[2].style.opacity = '0.3';
    this.style.opacity = '1';
}

function mouseOut() {
    images[0].style.opacity = '1';
    images[1].style.opacity = '1';
    images[2].style.opacity = '1';
}

images[0].addEventListener('mouseover', mouseOn);
images[1].addEventListener('mouseover', mouseOn);
images[2].addEventListener('mouseover', mouseOn);
images[0].addEventListener('mouseout', mouseOut);
images[1].addEventListener('mouseout', mouseOut);
images[2].addEventListener('mouseout', mouseOut);