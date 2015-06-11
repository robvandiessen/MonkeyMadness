var chars = "0123456789";
var string_length = 4;
var randomstring = '';
for (var i=0; i<string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
}
//console.log(randomstring);
//  document.write(randomstring).;



function maakLobby(){
    $("#Number").html(randomstring);
   // document.getElementById("Number").innerHTML= "WHATEVER YOU WANT...";
   // $( "#Number" ).append( "<strong>Hello</strong>" );
/*
    var node = document.getElementById("Number");
    node.innerHTML = "<p>" + "Hello World!" + "</p>";*/

    sessionStorage.setItem('lobby', randomstring)
};


