var mouseEvent="empty";
var lastpostion_x,lastpostion_y;

canvas = document.getElementById ("myCanvas")
ctx= canvas.getContext("2d");

color = "green"; 
ctx.lineWidth=2;



canvas.addEventListener("mousedown", my_mousedown );

function my_mousedown(e) 
{ 
mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup );
function my_mouseup(e) 
{ 
mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave );
function my_mouseleave(e) 
{ 
mouseEvent="mouseleave";
}


canvas.addEventListener("mousemove", my_mousemove );

function my_mousemove(e) 
{ 
    currentpostion_x=e.clientX-canvas.offsetLeft;
    currentpostion_y=e.clientY-canvas.offsetTop;
if (mouseEvent= "mouseDown")
{
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.moveTo (lastpostion_x,lastpostion_y);
    ctx.lineTo (currentpostion_x,currentpostion_y);
    ctx.stroke();
}
lastpostion_x=currentpostion_x;
lastpostion_y=currentpostion_y;
}

