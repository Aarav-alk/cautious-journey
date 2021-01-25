var last_x,last_y;
canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");

color="black";
width_line=2;
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;
if(width<992)
{
    document.getElementById("mycanvas").width=new_width;
    document.getElementById("mycanvas").height=new_height;
    document.body.style.overflow=hidden;
}

canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e)
{
    
    console.log ("touchstart");
    color=document.getElementById("color").value;
    width_line=document.getElementById("width").value;
    last_x=e.touches[0].clientX-canvas.offsetLeft;
    last_y=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e)
{
 current_x=e.touches[0].clientX-canvas.offsetLeft;
 current_y=e.touches[0].clientY-canvas.offsetTop; 

    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_line;
    console.log("Last position of x and y coordinates =");
    console.log("X=" + last_x + "Y=" + last_y);
    ctx.moveTo(last_x,last_y);
    console.log("current position of x and y coordinates =");
    console.log("X=" + current_x + "Y=" + current_y);
    ctx.lineTo(current_x,current_y);
ctx.stroke();
last_x=current_x;
last_y=current_y;
 }

 function cleararea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
 }
 
