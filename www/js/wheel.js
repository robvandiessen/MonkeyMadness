// sequential order
// advances 3 segments each click
var _target, _deg = 0;



function speelGeluid() {
    audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'sounds/startWheel.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
            audioElement.play();
            }, true);

    }

function stopGeluid(){
    audioElement.pause();

}

function speelGeluidOpdracht() {
    audioElement2 = document.createElement('audio');
    audioElement2.setAttribute('src', 'sounds/notLucky.mp3');
    audioElement2.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement2.addEventListener("load", function() {
            audioElement2.play();
            }, true);

    }




function ordSequential() {
    var randomNummer = Math.floor(Math.random() * 75);
    return _deg = _deg + (randomNummer*3) + 1080;
};

function spin(){
        console.log(_deg);
        $( "#btnToonOpdracht" ).remove();
        // select algorithm sequential, random or preset :
        ordSequential();
        _target = (_deg - (360 * parseInt(_deg / 360))) / 45;
        
        // start animation
        // reset opacity of all segments to 1
        $(".fancybox").velocity({ //parent("li")
            opacity: 1
        }, {
            duration: 100,
            complete: function () {

                $(".wheel").velocity({

                    rotateZ: "-" + _deg + "deg"
                }, {
                    duration: 3000,
                    complete: function (elements) {
                        _target = _target.toFixed();
                        console.log(_target);
                        if (_target == 0) {
                            $( "#btnToonOpdracht" ).remove();
                            $("#WheelTitle").html('Gorilla');
                            $( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/categorie1" onclick="toonCategorie1()">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );
                            
                        };

                        if (_target == 1) {
                            $( "#btnToonOpdracht" ).remove();
                            $("#WheelTitle").html('Maki');
                            $( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/categorie2" onclick="toonCategorie2()">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );
                            
                        };

                        if (_target == 2) {
                            $( "#btnToonOpdracht" ).remove();
                            $("#WheelTitle").html('Chimpanzee');
                            $( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/categorie3" onclick="toonCategorie3()">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );
                            
                        };

                        if (_target == 3) {
                            $( "#btnToonOpdracht" ).remove();
                            $("#WheelTitle").html('Baviaan');
                            $( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/categorie4" onclick="toonCategorie4()">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );
                            
                        };

                        if (_target == 4) {
                            $( "#btnToonOpdracht" ).remove();
                            $("#WheelTitle").html('Gorilla');
                            $( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/categorie1" onclick="toonCategorie1()">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );
                            
                        };

                        if (_target == 5) {
                            $( "#btnToonOpdracht" ).remove();
                            $("#WheelTitle").html('Maki');
                            $( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/categorie2" onclick="toonCategorie2()">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );
                            
                        };

                        if (_target == 6) {
                            $( "#btnToonOpdracht" ).remove();
                            $("#WheelTitle").html('Chimpanzee');
                            $( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/categorie3" onclick="toonCategorie3()">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );
                            
                        };

                        if (_target == 7) {
                            $( "#btnToonOpdracht" ).remove();
                            $("#WheelTitle").html('Baviaan');
                            $( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/categorie4" onclick="toonCategorie4()">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );
                            
                        };

                        // after spinning animation is completed, set opacity of target segment's parent
                        $(".fancybox").parent("li").eq(_target).velocity({
                            opacity: 0.4
                        }, {
                            duration: 100,
                            // after opacity is completed, fire targeted segment in fancybox
                            complete: function () {


                                console.log('test');

                                //$(".fancybox").eq(_target).trigger("click");
                            } // third animation completed
                        }); // nested velocity 2
                    } // second animation completed
                }); // nested velocity 1
            } // first animation completed

        }); // velocity
        removeSpinButton();
        return false;
        
}

/*
var spin = (function () {
    var neverCalled = true;
    return function (arg, arg2, arg3) { //Any args for myFunction should be set here
        if(neverCalled) {
            neverCalled = false;
            console.log(_deg);
        $( "#btnToonOpdracht" ).remove();
        //$( "#btnSpin" ).remove();
        // select algorithm sequential, random or preset :
        ordSequential();
        _target = (_deg - (360 * parseInt(_deg / 360))) / 45;
        
        // start animation
        // reset opacity of all segments to 1
        $(".fancybox").velocity({ //parent("li")
            opacity: 1
        }, {
            duration: 100,
            complete: function () {

                $(".wheel").velocity({

                    rotateZ: "-" + _deg + "deg"
                }, {
                    duration: 3000,
                    complete: function (elements) {
                        _target = _target.toFixed();
                        console.log(_target);
                        if (_target == 0) {
                            $( "#btnToonOpdracht" ).remove();
                            $("#WheelTitle").html('Gorilla');
                            $( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/categorie1" onclick="removeSpinButton(); toonCategorie1(); ">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );
                            
                        };

                        if (_target == 1) {
                            $( "#btnToonOpdracht" ).remove();
                            $("#WheelTitle").html('Maki');
                            $( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/categorie2" onclick="removeSpinButton(); toonCategorie2();">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );
                            
                        };

                        if (_target == 2) {
                            $( "#btnToonOpdracht" ).remove();
                            $("#WheelTitle").html('Chimpanzee');
                            $( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/categorie3" onclick="removeSpinButton(); toonCategorie3();">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );
                            
                        };

                        if (_target == 3) {
                            $( "#btnToonOpdracht" ).remove();
                            $("#WheelTitle").html('Baviaan');
                            $( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/categorie4" onclick="removeSpinButton(); toonCategorie4();">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );
                            
                        };

                        if (_target == 4) {
                            $( "#btnToonOpdracht" ).remove();
                            $("#WheelTitle").html('Gorilla');
                            $( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/categorie1" onclick="removeSpinButton(); toonCategorie1();">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );
                            
                        };

                        if (_target == 5) {
                            $( "#btnToonOpdracht" ).remove();
                            $("#WheelTitle").html('Maki');
                            $( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/categorie2" onclick="removeSpinButton(); toonCategorie2();">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );
                            
                        };

                        if (_target == 6) {
                            $( "#btnToonOpdracht" ).remove();
                            $("#WheelTitle").html('Chimpanzee');
                            $( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/categorie3" onclick="removeSpinButton(); toonCategorie3();">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );
                            
                        };

                        if (_target == 7) {
                            $( "#btnToonOpdracht" ).remove();
                            $("#WheelTitle").html('Baviaan');
                            $( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnToonOpdracht" href="#/app/categorie4" onclick="removeSpinButton(); toonCategorie4();">Toon opdracht</a>' ).appendTo( "#uitlegOpdracht" );
                            
                        };

                        // after spinning animation is completed, set opacity of target segment's parent
                        $(".fancybox").parent("li").eq(_target).velocity({
                            opacity: 0.4
                        }, {
                            duration: 100,
                            // after opacity is completed, fire targeted segment in fancybox
                            complete: function () {


                                console.log('test');

                                //$(".fancybox").eq(_target).trigger("click");
                            } // third animation completed
                        }); // nested velocity 2
                    } // second animation completed
                }); // nested velocity 1
            } // first animation completed
        }); // velocity
        return false;
            
            return true; //or whatever
        } 
        return false; //or do nothing, or whatever
    };
}());
*/

function spinButton(){

    $( '<a class="btn" onclick="spin()" id="spinButtonWheel">Spin</a>' ).appendTo( "#wheelSection" );


}

function removeSpinButton()
{
    $('#spinButtonWheel').addClass('notActive');
}



