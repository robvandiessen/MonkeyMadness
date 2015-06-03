// Prompt the user for a name to use.
	function myFunction() {
		name = prompt("Your name?", "Guest");
	
	
	
	
      //var name = prompt("Your name?", "Guest");
      var currentStatus = "? online";

      // Get a reference to the presence data in Firebase.
      var userListRef = new Firebase("https://scorching-torch-6903.firebaseio.com/user");



      // Generate a reference to a new location for my user with push.
      var myUserRef = userListRef.push(


      );


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







      var fredRef = new Firebase('https://scorching-torch-6903.firebaseio.com/user/');
      var fredSnapshot;
      fredRef.once('value', function(dataSnapshot) {
          // store dataSnapshot for use in below examples.
          fredSnapshot = dataSnapshot.numChildren();

          myUserRef.set({ name: name, status: dataSnapshot.numChildren() + 1});




      function getMessageId(snapshot) {
          return snapshot.key().replace(/[^a-z0-9\-\_]/gi,'');
      }

      // Update our GUI to show someone"s online status.
      userListRef.once("child_added", function(snapshot) {
          var user = snapshot.val();

          $("<div/>")
                  .attr("id", getMessageId(snapshot))
                  .text(user.name + " is currently " + user.status)
                  .appendTo("#presenceDiv");



          // Get a database reference to our posts
          var ref = new Firebase("https://scorching-torch-6903.firebaseio.com/random/number");
          // Attach an asynchronous callback to read the data at our posts reference
          ref.on("value", function(snapshot) {

              var ter = snapshot.val();



          $("#strookje").click( function() {











//
// alert(user.status);


              //
              if(user.status == ter){
                  //    alert("Lucky 7!");
                  document.getElementById("myDiv").style.backgroundColor = "red";

                  $( '<a class="btn" ui-sref="app.login2" icon-off="ion-ios7-filing-outline" href="#/app/login2"> Ga door </a>' ).appendTo( ".container" );

              }else{
                  //   alert("You're not very lucky today...");
                  document.getElementById("myDiv").style.backgroundColor = "blue";


              }



              });

          });






      });


          // Update our GUI to remove the status of a user who has left.
          userListRef.on("child_removed", function(snapshot) {
              $("#presenceDiv").children("#" + getMessageId(snapshot))
                      .remove();
          });

          userListRef.on("child_changed", function(snapshot) {
              var user = snapshot.val();
              $("#presenceDiv").children("#" + getMessageId(snapshot))
                      .text(user.name + " is currently " + user.status);





          });



      fredRef.once('value', function(dataSnapshot) {
          // store dataSnapshot for use in below examples.
          fredSnapshot = dataSnapshot.numChildren();


          var ref1 = new Firebase('https://scorching-torch-6903.firebaseio.com/');
          var usersRef = ref1.child("random");
          usersRef.set({

              number: Math.floor((Math.random() * fredSnapshot) + 1)


          });


          
      });
      });
}
