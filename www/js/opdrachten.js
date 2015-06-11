/* CATEGORIE 1 */

var categorie1Nummers = 
	  [	0, 
	  	1, 
	  	2, 
	  	3,
	   	4, 
	   	5];

var categorie1Titel = 
[	"3 optie groet", 
	"Dronken test",
	"Dat is jullie wc niet",
	"Stem verloren",
	"Teveel wc papier?",
	"Handen schudden"
]

var categorie1Beschrijving = 
[	"Vertel de eerste beste onbekende persoon dat je hem leuk vind, haat of van hem houdt", 
	"Neem een flinke slok, draai 10 rondjes en loop een rechte lijn",
	"Bezoek de wc van het tegengestelde geslacht (FILMEN!)",
	"Roep heel hard “HELP! Ik ben mijn stem kwijt, heeft iemand hem gevonden?”",
	"Laat wc papier uit je broek komen gedurende de rest van het spel. Duidelijk zichtbaar!",
	"Schud een onbekend persoon 1 minuut lang de hand zonder iets te zeggen"
]

//Random nummer wordt aangemaakt, om willekeurig een opdracht te kiezen!
var random1 = categorie1Nummers[Math.floor(Math.random() * categorie1Nummers.length)];

var titelCat1 = categorie1Titel[random1];
var beschrijvingCat1 = categorie1Beschrijving[random1];

function toonCategorie1(){
	$("#titelCat1").html(titelCat1);
	$("#beschrijvingCat1").html(beschrijvingCat1);
}

/* CATEGORIE 2 */

var categorie2Nummers = 
	  [	0, 
	  	1, 
	  	2, 
	  	3,
	   	4, 
	   	5];

var categorie2Titel = 
[	"Hey heb je toevaling WC papier bij je?", 
	"Yoga afabet",
	"Na-apen",
	"Lichaam van Christus",
	"Neustongen",
	"Tarzan"
]

var categorie2Beschrijving = 
[	"Vraag een onbekend persoon of die toevallig een rol toilet papier heeft", 
	"Probeer je eleboog te likken terwijl je het afabet zingt",
	"Imiteer de persoon links van je gedurende 15 minuten",
	"Eindig elke zin met ‘Lichaam van Christus’  gedurende 30 minuten",
	"Raak je neus met je tong. Lukt het je niet? Dan moet je de neuzen van de andere spelers aantikken met je tong.",
	"Acteer als tarzan gedurende 30 seconden"
]

//Random nummer wordt aangemaakt, om willekeurig een opdracht te kiezen!
var random2 = categorie2Nummers[Math.floor(Math.random() * categorie2Nummers.length)];

var titelCat2 = categorie2Titel[random2];
var beschrijvingCat2 = categorie2Beschrijving[random2];

function toonCategorie2(){
	$("#titelCat2").html(titelCat2);
	$("#beschrijvingCat2").html(beschrijvingCat2);
}

/* CATEGORIE 3 */

var categorie3Nummers = 
	  [	0, 
	  	1, 
	  	2, 
	  	3,
	   	4, 
	   	5];

var categorie3Titel = 
[	"De ‘uh’ die niet genoemd mag worden", 
	"Peperheet",
	"Natte voeten",
	"Joehoe, je bent een drag queen!",
	"Verliefd op eten",
	"Dorstig aapje"
]

var categorie3Beschrijving = 
[	"15 minuten lang mag je geen ‘uh’ zeggen. Doe je dit wel. Flinke slok drinken!", 
	"Stop een flinke theelepel peper in je mond",
	"Stop een ijsblokje aan de voorkant in je broek en wacht tot deze volledig is gesmolten",
	"Je moet lipstick bij een teamgenoot opdoen, maar mag je handen niet gebruiken",
	"Kies een willekeurig stuk eten en kus het 90 seconden hartstochtelijk",
	"Neem twee flinke slokken van je bier"
]

//Random nummer wordt aangemaakt, om willekeurig een opdracht te kiezen!
var random3 = categorie3Nummers[Math.floor(Math.random() * categorie3Nummers.length)];

var titelCat3 = categorie3Titel[random3];
var beschrijvingCat3 = categorie3Beschrijving[random3];

function toonCategorie3(){
	$("#titelCat3").html(titelCat3);
	$("#beschrijvingCat3").html(beschrijvingCat3);
}

/* CATEGORIE 4 */

var categorie4Nummers = 
	  [	0, 
	  	1, 
	  	2, 
	  	3,
	   	4, 
	   	5];

var categorie4Titel = 
[	"Toilet pas", 
	"Voet verkiezingen",
	"Wat zit er in de beurs",
	"Zonde van de saus",
	"Snotjes voor iedereen",
	"Luister naar de apen"
]

var categorie4Beschrijving = 
[	"Gedurende de rest van het spel moet je aan de groep toestemming vragen of je naar het toilet mag", 
	"Ruik de voeten van iedere persoon in de groep en maak een ranking welken het ergste stinkt",
	"Laat de groep de inhoud van je portomonee zien",
	"Bestel met de groep bitterballen met verschillende sausen. Alles op of niet? Jij eet alle overgebleven saus op",
	"U zult uw neus peuteren en het resultaat tonen aan de groep",
	"Je moet 10 minuten doen wat je groep zegt."
]

//Random nummer wordt aangemaakt, om willekeurig een opdracht te kiezen!
var random4 = categorie4Nummers[Math.floor(Math.random() * categorie4Nummers.length)];

var titelCat4 = categorie4Titel[random4];
var beschrijvingCat4 = categorie4Beschrijving[random4];

function toonCategorie4(){
	$("#titelCat4").html(titelCat4);
	$("#beschrijvingCat4").html(beschrijvingCat4);
}












