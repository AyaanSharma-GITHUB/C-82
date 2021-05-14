canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")

var mouseEvent = "empty";
var last_pos_of_x, last_pos_of_y;

color = "cyan";
wof = 2;
rad = 20;


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){

   color = document.getElementById("c").value
   wof = document.getElementById("w").value
   rad = document.getElementById("r").value

    mouseEvent = "mouseDown";

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){

    mouseEvent = "mouseUP";

}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){

    mouseEvent = "mouseleave";

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){

    current_pos_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_pos_of_mouse_y = e.clientY - canvas.offsetTop;

   if (mouseEvent == "mouseDown") {

     
     
     
     console.log("Current position of X and Y coordinates");
     console.log("x =" + current_pos_of_mouse_x + "y =" + current_pos_of_mouse_y);
     ctx.lineTo(current_pos_of_mouse_x, current_pos_of_mouse_y);
     

     console.log("Last position of X and Y coordinates");
     console.log("x =" + last_pos_of_mouse_x + "y =" + last_pos_of_mouse_y);
     ctx.moveTo(last_pos_of_mouse_x, last_pos_of_mouse_y);

     ctx.beginPath();
     ctx.strokeStyle = color ;
     ctx.lineWidth = wof ;
     ctx.arc(current_pos_of_mouse_x, current_pos_of_mouse_y, rad, 0, 2 * Math.PI);
     ctx.stroke();

   }

   last_pos_of_mouse_x = current_pos_of_mouse_x
   last_pos_of_mouse_y = current_pos_of_mouse_y

}