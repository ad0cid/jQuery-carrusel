var contador = 1;

$(document).ready(function(){

	$("#controles button").click(function(){
		xvar slide = $(this).attr("slide");
		// console.log("slide", slide);
		$("#carrusel ul li").css("display", "none");
		$("#carrusel ul li:nth-child("+ slide +")").fadeIn();
		$("#controles button").css("color", "white");
		$(this).css("color", "red");
		
	});


	function avanzar(){
		if(contador >=5){
			contador = 1;
		}
		else{
			contador ++;
		}
		$("#carrusel ul li").css("display", "none");
		$("#carrusel ul li:nth-child("+ contador +")").fadeIn();
		$("#controles button").css("color", "yellow");
		$("#controles button:nth-child("+ contador +")").css("color","red");
	}



	$("#next").click(avanzar);


	$("#prev").click(function(){
		if(contador <=1){
			contador = 5;
		}
		else{
			contador--;
		}
		$("#carrusel ul li").css("display", "none");
		$("#carrusel ul li:nth-child("+ contador +")").fadeIn();
		$("#controles button").css("color", "yellow");
		$("#controles button:nth-child("+ contador +")").css("color","red");
	});

	// setInterval(function(){
	// 	avanzar();
	// },5000);

});