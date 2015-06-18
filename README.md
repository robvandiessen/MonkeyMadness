# MonkeyMadness
Met Monkey Madness zorg je voor wat leven in de brouwerij. De spreekwoorden “je staat voor aap” en “iemand anders na-apen” zijn bekende spreekwoorden. Het in de praktijk brengen maakt het echter nog veel leuker. 

Hoe goed vertrouw jij je vrienden? Ben jij een echte gorilla die alles aan durft. Of heb je altijd een grote mond, maar als je een opdracht uit moet voeren krabbel je terug?

## Doel
The main purpose of the Flurry Flakes app is to show how all relevant elements of a hybrid mobile app can be made to work. It requires the use of a Cordova plugin, loading data from an external service, communicating with a PHP back-end.

Het hooft doel van Monkey Madness is amusement met je vrienden / vrienden te creëren en ze opdrachten te laten doen die buiten de comfort zone treden.
Wat de app in het kort doet is:
- Random slachtoffer kiezen binnen een vriendengroep.
- Geeft een opdracht met beschrijving door aan slachtoffer.

## UI
De UI van de app is gemaakt met Ionic Framework. Met Ionic kan er eenvoudig apps worden gemaakt voor iOS en Android met behulp van: HTML, CSS en Javascript. Ionic richt zich vooral op de look en feel en UI interactie van de app. Het Framework is dan ook geen vervanging voor PhoneGap of een ander Javascript Framework. Zelf ontwikkelde: HTML, CSS en Javascript is ook zonder problemen in Ionic te verwerken.

## Plugins
**org.apache.cordova.device-motion** This plugin allows the app to read the accelerometer sensor. It is used to allow the user to navigate a list of cartoons by tilting the device. This could (but completely doens't) create a more natural way of navigating such lists.

**https://cdn.firebase.com/js/client/2.2.1/firebase.js** Firebase biedt een API aan om data te syncen in realtime. Wanneer data veranderd wordt deze over de hele app en apparaat geüpdate.


## Externe diensten 
**https://scorching-torch-6903.firebaseio.com/** De lobbys, spelers en lot nummers worden extern opgeslagen in Firebase. Firebase wordt gebruikt omdat het makkelijk en snel een database kan op zetten.  


## Back-end

**maaklobby.js** Het javascript genereerd een lobby ID van 4 random cijfers. Doormiddel van Session storage wordt dit nummer opgeslagen en later weg geschreven in Firebase als een lobby.

**joinlobby.js** Dit script maakt een invoer veld aan waar de 4 cijferige code van het gemaakte lobby kan invoeren. Via Session storage wordt dit nummer onthouden zodat het systeem weet in welke lobby hij de speler moet plaatsen.

**eesteLot.js** Dit is de backbone van de app. Als een speler een lobby maakt of deelneemt wordt er in dit script de lobby en de speler verwerkt in Firebase. Het script geeft de speler ook een uniek nummer die nodig is om een slachtoffer te kiezen. Dit nummer wordt gegenereerd met het aantal spelers binnen een lobby. Het totaal aantal spelers wordt opgeteld en een random nummer gegenereerd. Dit lotnummer moet bepalen wie van de spelers het slachtoffer is. Al deze gegevens worden opgeslagen in Firebase.  
Het script kiest een slachtoffer uit door het nummer van de speler te vergelijke met het lotnummer. Dit gaat doormiddel van een if statement. Als de speler nummer overeen komt met het lotnummer krijgt het slachtoffer een rood scherm te zien. Anderen krijgen het zogenaamde veilig scherm te zien waar in ze moeten aangeven of de opdracht geslaagd is. 
Ook kijkt het script of er een speler aanwezig is binnen de lobby. Firebase biet namelijk een functie aan die de aanwezigheid van een speler kan controleren. Dus als een speler het spel verlaat, wordt uit de lobby weg geschreven.
