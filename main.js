var canvas=new fabric.Canvas('myCanvas')

ball_x=0;
ball_y=0;
hole_x=800;
hole_y=400;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf_h.png", function(Img) {
		hole_obj=Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
		top:hole_y,
		left:hole_x
		});
		canvas.add(hole_obj);
		})
		new_image()
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj=Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
		top:ball_y,
		left:ball_x
		});
		canvas.add(ball_obj);
		})
}

ball="ball.png";
ball_imgTag=new Image();
ball_imgTag.onload=uploadBall;
ball_imgTag.src="ball.png";

hole="golf_h.png";
hole_imgTag=new Image();
hole_imgTag.onload=uploadHole;
hole_imgTag.src="golf_h.png";


function uploadHole(){
    ctx.drawImage(hole_imgTag,hole_x,hole_y,block-image-width,block-image-height);
}

function uploadBall(){
    ctx.drawImage(ball_imgTag,ball_x,ball_y,block-image-width,block-image-height)
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You Hit The Goal !";
        document.getElementById("myCanvas").style.borderColor="red";
		}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>=0){
			ball_y= ball_y - block_image_height;
		console.log("Up arrow was pressed, new x= " + ball_x + "& new y=" + ball_y);
		canvas.remove(ball_obj);
		new_image();

		}
	}


	function down()
	{
		if(ball_y<=450){
		ball_y= ball_y + block_image_height;
		console.log("Down arrow was pressed, new x= " + ball_x + "& new y=" + ball_y);
		canvas.remove(ball_obj);
		new_image();
		}
	}
		

	function left()
	{
		if(ball_x >=5)
		{
			ball_x= ball_x - block_image_width;
			console.log("Left arrow was pressed, new x= " + ball_x + "& new y=" + ball_y);
			canvas.remove(ball_obj);
			new_image();
			}
		}
	

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x= ball_x + block_image_width;
			console.log("Right arrow was pressed, new x= " + ball_x + "& new y=" + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	

}
