//Canvas
var ctx = document.getElementById("ctx").getContext("2d");
var WIDTH = 1920;
var HEIGHT = 1080;
var w = window.innerWidth;
var h = window.innerHeight;
var ratioX = w/WIDTH;
var ratioY= h/HEIGHT;
//Images
var back = new Image(); back.src = "img/background.png";


function mining() {
    console.log("mining");
    ctx.drawImage(back, 0, 0, WIDTH, HEIGHT);
}

// // Start // //
window.onload = mining;
