/*
 * 
 */
  var ImageArr1 = new Array("Pict1.jpg","Pict2.jpg","Pict3.jpg","Pict4.jpg","Pict5.jpg");
  
  function RotateImages(Start)
  {
  	var a = "ImageArr1";
  	var b = document.getElementById('Rotating1');
  	if(Start>=5)
  		Start=0;
  	b.src = "Images/Images/" + ImageArr1[Start];
  	window.setTimeout("RotateImages("+(Start+1)+")",5000);
  }
  
  //BANNER for DVD
  
    var ImageArr2 = new Array("Pict6.jpg","Pict7.jpg","Pict8.jpg","Pict9.jpg","Pict10.jpg");
    
    function RotateImagesDVD(Start)
    {
    	var a = "ImageArr2";
    	var b = document.getElementById('Rotating2');
    	if(Start>=5)
    		Start=0;
    	b.src = "Images/Images/" + ImageArr2[Start];
    	window.setTimeout("RotateImagesDVD("+(Start+1)+")",5000);
  }
  
  
    
    //BANNER for DVD
    
      var ImageArr3 = new Array("Pict11.jpg","Pict12.jpg","Pict13.jpg","Pict14.jpg","Pict15.jpg");
      
      function RotateImagesDVD3(Start)
      {
      	var a = "ImageArr3";
      	var b = document.getElementById('Rotating3');
      	if(Start>=5)
      		Start=0;
      	b.src = "Images/Images/" + ImageArr3[Start];
      	window.setTimeout("RotateImagesDVD3("+(Start+1)+")",5000);
    }
    
     //BANNER for DVD
        
          var ImageArr4 = new Array("Pict16.jpg","Pict17.jpg","Pict18.jpg","Pict19.jpg","Pict20.jpg");
          
          function RotateImagesDVD4(Start)
          {
          	var a = "ImageArr4";
          	var b = document.getElementById('Rotating4');
          	if(Start>=5)
          		Start=0;
          	b.src = "Images/Images/" + ImageArr4[Start];
          	window.setTimeout("RotateImagesDVD4("+(Start+1)+")",5000);
    }
  
  
//-----------------------------------------------------------------------
function ShowDate()
{
	var currentTime = new Date()
	var month = currentTime.getMonth() + 1
	var day = currentTime.getDate()
	var year = currentTime.getFullYear()
	document.write(day + "/" + month + "/" + year)
}
//----------------------------------------------------------------------
function validate()
	{
		if(document.form1.name.value.length == 0)
		{
			window.alert("Please Enter your Firstname");
			document.all("fname").focus();
			return false;
		}
		if(document.form1.sname.value.length == 0)
		{
			window.alert("Please Enter your Surname");
			document.all("sname").focus();
			return false;
		}
		if(document.form1.email.value.length == 0)
		{
			window.alert("Please Enter your Email Address");
			document.all("email").focus();
			return false;
		}
		if(document.form1.phone.value.length == 0)
		{
			window.alert("Please Enter your Mobile Number");
			document.all("phone").focus();
			return false;
		}
		return true;
	}

//--------------------------------------------------------------------

function show_alert(){
	alert("You entered not valid Login or Password");
	}