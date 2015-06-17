function hideHeadBar(){

	$( document ).ready(function() {
	    $('#barHomeIcon, #sideMenuIcon').hide();
	});
}

function showHeadBar(){

	$( document ).ready(function() {
	    $('#barHomeIcon, #sideMenuIcon').show();

	});
}

/* FUNCTIE OM ELEMENTEN TE HIDEN/SHOWEN START SPEL */
function StartElements()
{
  $('#START_Aap_opnieuw, #strookjeGeslaagd, #strookjeNietGeslaagd, #opnieuwUitleg').hide();
  document.getElementById( 'barHomeIcon' ).style.display = 'none';
  document.getElementById( 'barLeaveIcon' ).style.display = 'block';
}


function toonLobby()
{
  $("#lobbyNumber").html('Lobbynummer: ' + name);

}

function verwijderGebruikers()
{
	document.getElementById( 'barLeaveIcon' ).style.display = 'none';
	myUserRef.remove();

}