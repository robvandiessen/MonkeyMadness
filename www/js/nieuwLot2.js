
function geefNieuwLotNummer() {
    $('#StartContainer').removeClass('VeiligLot');
    $('#StartContainer').addClass('NeutraalLot');
    $('#btnOpnieuw').remove();
    $( '<button onclick="geefLotNummer()" class="hideItem waves-effect grey-text text-darken-4 light-green lighten-4 btn" id="btnOpnieuw"> Opnieuw </button>' ).appendTo( "#myDiv" );

    var fredRef = new Firebase('https://scorching-torch-6903.firebaseio.com/');
     lobby = sessionStorage.getItem('lobby');
    console.log(lobby);
    name = lobby;



      fredRef.once('value', function(dataSnapshot) {
          alert('fredRef ingeladen?!');
          // store dataSnapshot for use in below examples.
          fredSnapshot = dataSnapshot.child(name).numChildren();


          var ref1 = new Firebase('https://scorching-torch-6903.firebaseio.com/lotten/' + name);
          var usersRef = ref1.child("random");
          usersRef.set({

          number: Math.floor((Math.random() * fredSnapshot) + 1)

      });


          
      });
    }
    
    // Prompt the user for a name to use.
    //name = prompt("Your name?", "Guest");
    //document.getElementById( 'barHomeIconFake' ).style.display = 'block';
    //document.getElementById( 'barHomeIcon' ).style.display = 'none';

    

    
    //var name = prompt("Your name?", "Guest");
   // var currentStatus = "? online";

    // Get a reference to the presence data in Firebase.
    var userListRef = new Firebase("https://scorching-torch-6903.firebaseio.com/" + name );

    // Generate a reference to a new location for my user with push.
    //myUserRef = userListRef.push();

/*
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

    });*/

    /*
     userListRef.once("value", function(snapshot) {
    
        var user = snapshot.val();
      });
    */
    
    



