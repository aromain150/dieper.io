var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.addEventListener("click",tir)

var fps = 30;
var IDsetInterval = setInterval(update, 1000/fps);

function update(){
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle ="rgb(0,0,0)";
    ctx.fillRect(10,10,20,20);
}

function tir(e){
    console.log(e.screenX);
    console.log(e.screenY);
}

console.log("hllo a");