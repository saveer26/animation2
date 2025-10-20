let canvas=document.getElementById("canvas");
let ctx=canvas.getContext("2d");
canvas.width = 300;
canvas.height = 300;
let sun = new Image();
sun.src="canvas_sun.png";
let earth = new Image();
earth.src="canvas_earth.png";
let moon = new Image();
moon.src="canvas_moon.png";

function draw(){
    //drw new images behind
    ctx.globalCompositeOperation = "destination-over"
    ctx.clearRect(0,0,300,300)
    ctx.save()//save the default canvas
    ctx.translate(150,150)
    //Earth
    const time = new Date()
    ctx.rotate(
        ((2 * Math.PI) / 60) * time.getSeconds() + 
        ((2 * Math.PI/60000) * time.getMilliseconds())
    )
    ctx.translate(105,0)
    ctx.drawImage(earth, -12, -12)
    
    //moon
    ctx.save()
    ctx.rotate(
        ((2 * Math.PI) / 6) * time.getSeconds() + 
        ((2 * Math.PI/6000) * time.getMilliseconds())
    );
    ctx.translate(0, 28.5)
    ctx.drawImage(moon,-3.5,-3.5)
        ctx.restore()
        ctx.restore()
    
    //draworbitpath

    ctx.strokeStyle="rgb(0 150 255 / 40%)"
    ctx.beginPath()
    ctx.arc(150,150,105,Math.PI * 2, false)
    ctx.stroke()
    //sun
    ctx.fontStyle()
    ctx.drawImage(sun,0,0,300,300)
    ctx.font="50px Arial"
    ctx.fillText("HELLO THINS IS AN ANIMATION YBY SAVEER!",200,200)
    window.requestAnimationFrame(draw)
}
draw()
