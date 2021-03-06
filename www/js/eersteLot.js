function geefLotNummer() {
    $("#barLeaveIcon").addClass('disableClick')
    document.getElementById( 'barLeaveIcon' ).style.opacity = '0.2';
    $('ion-item').hide();
    document.getElementById( 'lobbyNumber' ).style.display = 'block';
    $('#StartContainer').addClass('NeutraalLot');
    $('#strookje, #startAfwachten').hide();
    $('#strookje').show();
    $('#btnOpnieuw').remove();
    $('#START_Aap_opnieuw, #opnieuwUitleg, #strookjeGeslaagd, #strookjeNietGeslaagd, #opnieuwUitleg').hide();
    // Prompt the user for a name to use.
		//name = prompt("Your name?", "Guest");
    

    lobby = sessionStorage.getItem('lobby');
    console.log(lobby);

    name = lobby;

    //var name = prompt("Your name?", "Guest");
    var currentStatus = "? online";

    // Get a reference to the presence data in Firebase.
    var userListRef = new Firebase("https://scorching-torch-6903.firebaseio.com/" + name );

    // Generate a reference to a new location for my user with push.
    myUserRef = userListRef.push();


    // Get a reference to my own presence status.
    var connectedRef = new Firebase("https://scorching-torch-6903.firebaseio.com//.info/connected");

    connectedRef.on("value", function(isOnline) {

      if (isOnline.val()) {
          // If we lose our internet connection, we want ourselves removed from the list.
          myUserRef.onDisconnect().remove();

          // Set our initial online status.
          setUserStatus("? online");
        }

      else {
          // We need to catch anytime we are marked as offline and then set the correct status. We
          // could be marked as offline 1) on page load or 2) when we lose our internet connection
          // temporarily.
              
          setUserStatus(currentStatus);
        }

    });

    var fredRef = new Firebase('https://scorching-torch-6903.firebaseio.com/');
    var fredSnapshot;
    
    fredRef.once('value', function(dataSnapshot) {
          
        // store dataSnapshot for use in below examples.
        fredSnapshot = dataSnapshot.numChildren();

        //myUserRef.set({status: dataSnapshot.numChildren() + 1
          myUserRef.set({status: dataSnapshot.child(name).numChildren() + 1

    });

    function getMessageId(snapshot) {
          
        return snapshot.key().replace(/[^a-z0-9\-\_]/gi,'');
      
    }

     
      // Update our GUI to show someone"s online status.
    userListRef.once("child_added", function(snapshot) {
    
   user = snapshot.val();
   sessionStorage.setItem("nummer", user.status);

   nummerGebruiker = sessionStorage.getItem('nummer');
      // Get a database reference to our posts
      ref = new Firebase('https://scorching-torch-6903.firebaseio.com/lotten/' + name + '/random/number');
         
      

      // Attach an asynchronous callback to read the data at our posts reference   
      ref.on("value", function(snapshot) {

          ter = snapshot.val();
          sessionStorage.setItem("randomNumber", ref);

          randomNummer = sessionStorage.getItem('randomNumber');

            $("#strookje").click( function() {

              $("#barLeaveIcon").removeClass('disableClick')
              $('ion-item').show();
              document.getElementById( 'barLeaveIcon' ).style.opacity = '1';

              if(nummerGebruiker == ter){
                  $("#spelersNummer").html('Jij staat voor aap!' );
                  $( "#btnCheck" ).remove(); 
                  $( "#btnOpnieuw" ).remove();
                  $('#StartContainer').removeClass('NeutraalLot');
                  $('#StartContainer').addClass('HelaasLot');
                  $( '<a class="waves-effect grey-text text-darken-4 yellow btn" id="btnCheck" ui-sref="app.wheel" icon-off="ion-ios7-filing-outline" href="#/app/wheel"> Ga door </a>' ).appendTo( "#myDiv" );
                  
              }

              else{   

                  $("#spelersNummer").html('Je hebt geluk!' );
                  $( "#btnCheck, #btnOpnieuw" ).remove();
                  $('#strookje').hide();
                  $('#StartContainer').removeClass('NeutraalLot');
                  $('#START_Aap_opnieuw, #opnieuwUitleg, #strookjeGeslaagd, #strookjeNietGeslaagd, #opnieuwUitleg').show();
                  $("#opnieuwUitleg").html('Een van je medespelers moet een opdracht uitvoeren... Vind jij de opdracht geslaagd? ');

              }

              myUserRef.remove();

            });

          });


      });
  
      fredRef.once('value', function(dataSnapshot) {
          
          // store dataSnapshot for use in below examples.
          fredSnapshot = dataSnapshot.child(name).numChildren();


          var ref1 = new Firebase('https://scorching-torch-6903.firebaseio.com/lotten/' + name);
          var usersRef = ref1.child("random");
          usersRef.set({

          number: Math.floor((Math.random() * fredSnapshot) + 1)

      });


          
      });

    });
  
}

function nietGeslaagd()
{
  $("#opnieuwUitleg").html('Wacht geduldig af tot een van je medespelers nog een keer aan het rad van schaamte heeft gedraaid');
  
}


