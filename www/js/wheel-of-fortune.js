	console.log('JavaScript Wheel of Fortune is ingeladen');
	
$(function() {
	var colors = ["#fdc731", "#00d0f5", "#ff7663", "#fdc731",
               "#00d0f5", "#ff7663"];
	  var opdrachten = 
	  [	"Na-apen", 
	  	"Bier halen", 
	  	"Lichaam van Christus", 
	  	"Toiletpas",
	   	"Yoga alfabet", 
	   	"Dronken test"];

	  var opdracht_uitleg = 
	  [	"NA-APEN, Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat. Nunc vehicula dapibus ipsum. Duis venenatis risus non nunc fermentum dapibus. Morbi lorem ante, malesuada in mollis nec, auctor nec massa. Aenean tempus dui eget felis blandit at fringilla urna ultrices. Suspendisse feugiat, ante et viverra lacinia, lectus sem lobortis dui, ultricies consectetur leo mauris at tortor. Nunc et tortor sit amet orci consequat semper. Nulla non fringilla diam. ", 
	  	"BIER HALEN, Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat. Nunc vehicula dapibus ipsum. Duis venenatis risus non nunc fermentum dapibus. Morbi lorem ante, malesuada in mollis nec, auctor nec massa. Aenean tempus dui eget felis blandit at fringilla urna ultrices. Suspendisse feugiat, ante et viverra lacinia, lectus sem lobortis dui, ultricies consectetur leo mauris at tortor. Nunc et tortor sit amet orci consequat semper. Nulla non fringilla diam.", 
	  	"LICHAAM VAN CHRISTUS, Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat. Nunc vehicula dapibus ipsum. Duis venenatis risus non nunc fermentum dapibus. Morbi lorem ante, malesuada in mollis nec, auctor nec massa. Aenean tempus dui eget felis blandit at fringilla urna ultrices. Suspendisse feugiat, ante et viverra lacinia, lectus sem lobortis dui, ultricies consectetur leo mauris at tortor. Nunc et tortor sit amet orci consequat semper. Nulla non fringilla diam.", 
	  	"TOILETPAS, Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat. Nunc vehicula dapibus ipsum. Duis venenatis risus non nunc fermentum dapibus. Morbi lorem ante, malesuada in mollis nec, auctor nec massa. Aenean tempus dui eget felis blandit at fringilla urna ultrices. Suspendisse feugiat, ante et viverra lacinia, lectus sem lobortis dui, ultricies consectetur leo mauris at tortor. Nunc et tortor sit amet orci consequat semper. Nulla non fringilla diam.",
	   	"YOGA ALFABET, Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat. Nunc vehicula dapibus ipsum. Duis venenatis risus non nunc fermentum dapibus. Morbi lorem ante, malesuada in mollis nec, auctor nec massa. Aenean tempus dui eget felis blandit at fringilla urna ultrices. Suspendisse feugiat, ante et viverra lacinia, lectus sem lobortis dui, ultricies consectetur leo mauris at tortor. Nunc et tortor sit amet orci consequat semper. Nulla non fringilla diam.", 
	   	"DRONKEN TEST, Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat. Nunc vehicula dapibus ipsum. Duis venenatis risus non nunc fermentum dapibus. Morbi lorem ante, malesuada in mollis nec, auctor nec massa. Aenean tempus dui eget felis blandit at fringilla urna ultrices. Suspendisse feugiat, ante et viverra lacinia, lectus sem lobortis dui, ultricies consectetur leo mauris at tortor. Nunc et tortor sit amet orci consequat semper. Nulla non fringilla diam."];
	  
	  var startAngle = 0;
	  var arc = Math.PI / 3;
	  var spinTimeout = null;
	  
	  var spinArcStart = 10;
	  var spinTime = 0;
	  var spinTimeTotal = 0;
	  
	  var ctx;

	  function test(){
	  	console.log('test');
	  }
	  
	  function drawRouletteWheel() {
	    var canvas = document.getElementById("wheelcanvas");
	    if (canvas.getContext) {
	      var outsideRadius = 200;
	      var textRadius = 160;
	      var insideRadius = 0;
	      
	      ctx = canvas.getContext("2d");
	      ctx.clearRect(0,0,500,500);
	      
	      ctx.font = "16px roboto";
	      
	      //in de for loop, i < 12 wordt aantal partities gewijzigd
	      for(var i = 0; i < 6; i++) {
	        var angle = startAngle + i * arc;
	        ctx.fillStyle = colors[i];
	        
	        ctx.beginPath();
	        ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
	        ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
	        ctx.fill();
	        
	        ctx.save();
	        ctx.fillStyle = "#262626";
	        ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 250 + Math.sin(angle + arc / 2) * textRadius);
	        ctx.rotate(angle + arc / 2 + Math.PI / 2);
	        var text = opdrachten[i];
	        ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
	        ctx.restore();
	      } 
	      
	      //Arrow
	      ctx.fillStyle = "#262626";
	      ctx.beginPath();
	      ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
	      ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
	      ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
	      ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
	      ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
	      ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
	      ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
	      ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
	      ctx.fill();
	    }
	  }
	  
	  function spin() {
	    spinAngleStart = Math.random() * 10 + 10;
	    spinTime = 0;
	    spinTimeTotal = Math.random() * 3 + 4 * 1000;
	    rotateWheel();

	  }
	  
	  function rotateWheel() {
	    spinTime += 30;
	    if(spinTime >= spinTimeTotal) {
	      stopRotateWheel();
	      return;
	    }
	    var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
	    startAngle += (spinAngle * Math.PI / 180);
	    drawRouletteWheel();
	    spinTimeout = setTimeout('rotateWheel()', 30);
	  }
	  
	  function stopRotateWheel() {

	    clearTimeout(spinTimeout);
	    var degrees = startAngle * 180 / Math.PI + 90;
	    var arcd = arc * 180 / Math.PI;
	    var index = Math.floor((360 - degrees % 360) / arcd);
	    ctx.save();
	    ctx.font = "35px open sans";

	    /*
	    var text = opdrachten[index] 
	    ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
	    */

	    ctx.restore();
	    var element = document.getElementById("uitleg-opdracht");
		element.innerHTML = 
		'<h1>' + opdrachten[index] + '</h1>' + '<p>' + opdracht_uitleg[index] + '</p>'

	  }
	  
	  function easeOut(t, b, c, d) {
	    var ts = (t/=d)*t;
	    var tc = ts*t;
	    return b+c*(tc + -3*ts + 3*t);
	  }
	  
}	  



