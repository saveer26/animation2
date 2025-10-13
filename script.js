let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
let sun = new Image();
sun.src="canvas_sun.png";
let earth = new Image();
earth.src="canvas_earth.png";
let moon = new Image();
moon.src="canvas_moon.png";

function draw(){
    ctx.drawImage(sun,0,0,canvas.width,canvas.height)
    window.requestAnimationFrame(draw)
}
draw()