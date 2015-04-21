/*
*Author Arnis Lupiks
*/



var ImageArr5 = new Array("1.jpg","2.jpg","3.jpg");
  
  function RotateImages10(Start)
  {
  	var a = "ImageArr5";
  	var b = document.getElementById('Rotating10');
  	if(Start>=3)
  		Start=0;
  	b.src = "Images/Phones/" + ImageArr5[Start];
  	window.setTimeout("RotateImages10("+(Start+1)+")",5000);
  }
