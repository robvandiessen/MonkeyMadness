	console.log('JavaScript Wheel of Fortune is ingeladen');
	
	function speelGeluid() {
		var audioElement = document.createElement('audio');
	        audioElement.setAttribute('src', 'sounds/startWheel.mp3');
	        audioElement.setAttribute('autoplay', 'autoplay');
	        //audioElement.load()
	        $.get();
	        audioElement.addEventListener("load", function() {
	        audioElement.play();
	        }, true);
	}
	
	var colors = ["#689f38", "#8bc34a", "#dcedc8", "#689f38",
               "#8bc34a", "#dcedc8"];
	  var opdrachten = 
	  [	"Gorilla", "Chimpanzee", "opdracht 3", "opdracht 4","opdracht 5", "opdracht 6"];

	  var opdrachtnummers = 
	  [	"opdracht1", 
	  	"opdracht2", 
	  	"opdracht3", 
	  	"opdracht4",
	   	"opdracht5", 
	   	"opdracht6"];
	  
	  var startAngle = 0;
	  var arc = Math.PI / 3;
	  var spinTimeout = null;
	  
	  var spinArcStart = 10;
	  var spinTime = 0;
	  var spinTimeTotal = 0;
	  
	  var ctx;

	  	var img1=new Image();
		img1.onload=start;
		img1.src="../img/HOME-bg.jpg";

		var img2=new Image();
		img2.onload=start;
		img2.src="../img/START-bg-veilig.jpg";

		var img3=new Image();
		img3.onload=start;
		img3.src="https://dl.dropboxusercontent.com/u/139992952/multple/mm.jpg";

		var img4=new Image();
		img4.onload=start;
		img4.src="https://dl.dropboxusercontent.com/u/139992952/stackoverflow/water1.jpg";

		var imgCount=4;

	  function start(){
		  if(--imgCount>0){return;}
		  pattern1=ctx.createPattern(img1,'no-repeat');
		  pattern2=ctx.createPattern(img2,'no-repeat');
		  pattern3=ctx.createPattern(img3,'repeat');
		  pattern4=ctx.createPattern(img4,'no-repeat');
		  draw();
		}

		function draw() {
		  drawRouletteWheel();
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
	        ctx.fillStyle = (i/2==parseInt(i/2))?pattern2:pattern1;//colors[i];
	        
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
	  	$( "#btnSpinWheel" ).remove();
	    spinAngleStart = Math.random() * 40 + 10; // SPEED WHEEL
	    spinTime = 0;
	    spinTimeTotal = Math.random() * 3 + 4 * 2000; // DURATION WHEEL
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

	    //var text = opdrachten[index] 
	    //ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
	    

	    ctx.restore();

	    console.log(opdrachten[index]);

	    
	    if(opdrachtnummers[0] == opdrachtnummers[index]){

	    	$( "#btnToonOpdracht" ).remove();
	    	$("#WheelTitle").html(opdrachten[index]);
			$( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/' + opdrachtnummers[index] + '">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );

       	}

       	
       	if(opdrachtnummers[1] == opdrachtnummers[index]){

       		$( "#btnToonOpdracht" ).remove();
       		$("#WheelTitle").html(opdrachten[index]);
			$( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/' + opdrachtnummers[index] + '">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );

       	}

       	if(opdrachtnummers[2] == opdrachtnummers[index]){

			$( "#btnToonOpdracht" ).remove();
			$("#WheelTitle").html(opdrachten[index]);
			$( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/' + opdrachtnummers[index] + '">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );

       	}

       	if(opdrachtnummers[3] == opdrachtnummers[index]){

			$( "#btnToonOpdracht" ).remove();
			$("#WheelTitle").html(opdrachten[index]);
			$( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/' + opdrachtnummers[index] + '">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );

       	}

       	if(opdrachtnummers[4] == opdrachtnummers[index]){

			$( "#btnToonOpdracht" ).remove();
			$("#WheelTitle").html(opdrachten[index]);
			$( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/' + opdrachtnummers[index] + '">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );

       	}

       	if(opdrachtnummers[5] == opdrachtnummers[index]){

			$( "#btnToonOpdracht" ).remove();
			$("#WheelTitle").html(opdrachten[index]);
			$( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/' + opdrachtnummers[index] + '">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );

       	}

	  }
	  
	  function easeOut(t, b, c, d) {
	    var ts = (t/=d)*t;
	    var tc = ts*t;
	    return b+c*(tc + -3*ts + 3*t);
	  }
	  
	  



