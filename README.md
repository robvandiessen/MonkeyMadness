# MonkeyMadness
Met Monkey Madness zorg je voor wat leven in de brouwerij. De spreekwoorden “je staat voor aap” en “iemand anders na-apen” zijn bekende spreekwoorden. Het in de praktijk brengen maakt het echter nog veel leuker. 

Hoe goed vertrouw jij je vrienden? Ben jij een echte gorilla die alles aan durft. Of heb je altijd een grote mond, maar als je een opdracht uit moet voeren krabbel je terug?


## Doel
Het hooft doel van Monkey Madness is amusement met je vrienden / vrienden te creëren en ze opdrachten te laten doen om buiten hun comfort zone treden.
Wat de app in het kort doet is:
- Random slachtoffer kiezen binnen een vriendengroep.
- Geeft een opdracht met beschrijving door aan slachtoffer.
- Anderen spelers bepalen of de opdracht geslaagd is.
- Maakt spel lobbys aan.


## UI
De UI van de app is gemaakt met Ionic Framework. Met Ionic kan er eenvoudig apps worden gemaakt voor iOS en Android met behulp van: HTML, CSS en Javascript. Ionic richt zich vooral op de look en feel en UI interactie van de app. Het Framework vervangt ook PhoneGap niet of een ander Javascript Framework. Zelf ontwikkelde HTML, CSS en Javascript is ook zonder problemen in Ionic te verwerken.

## Plugins

### Firebase
Firebase biedt een API aan om data in realtime te syncen. Wanneer data veranderd wordt deze over de hele app en apparaaten geüpdate.

**https://cdn.firebase.com/js/client/2.2.1/firebase.js**


## Externe diensten 

### Firebase database
De lobby, spelers en lot nummers worden extern opgeslagen in Firebase. Firebase wordt gebruikt omdat het makkelijk en snel een database kan op zetten. Het maken van een aparte database en mysql server is hierdoor overbodig. 
 
**https://scorching-torch-6903.firebaseio.com/**

## Back-end
**maaklobby.js** Het javascript genereerd een lobby ID van 4 random cijfers. Doormiddel van Session Storage wordt dit nummer opgeslagen en later weg geschreven in Firebase als een lobby.

**joinlobby.js** Dit script maakt een invoerveld aan waar de 4 cijferige code van een bestand lobby kan worden ingevoert. Via Session Storage wordt dit nummer onthouden zodat het systeem weet in welke lobby hij de speler moet plaatsen.

**eesteLot.js** Dit is de backbone van de app omdat het de lobby, spelers en het lotnummer aanmaakt. Ook bepaald het script wie van de speler het slachtoffer is. 

Als een speler een lobby maakt of deelneemt wordt er in dit script de lobby en de speler verwerkt in Firebase, door het lobby nummer uit de Session Storage te halen. Het script geeft de speler ook een uniek nummer. Dit nummer wordt gegenereerd met het aantal spelers binnen een lobby. Het totaal aantal spelers wordt ook opgeteld om een random nummer gegenereerd. Dit lotnummer moet bepalen wie van de spelers het slachtoffer is. 

Al deze gegevens worden opgeslagen in Firebase.

Het script kiest een slachtoffer uit door het nummer van de speler te vergelijke met het lotnummer. Dit gaat doormiddel van een if statement. Als het nummer van de speler overeen komt met het lotnummer krijgt het slachtoffer een rood scherm te zien en zal worden verwezen naar het Rad van schaamte. Anderen krijgen het zogenaamde veilige scherm te zien waar in ze moeten aangeven of de opdracht geslaagd is om zo een nieuwe ronde te beginnen.


**wheel.js** Het Rad van schaamte wordt in dit script geanimeerd. Er wordt in het script een berekening gemaakt waar het rad op moet eindigen en welke categorie opdracht het slachtoffer krijgt. 

**opdrachten.js** Alle opdrachten die in de app voorkomen zijn in dit script verwerkt. Deze opdrachten zijn verdeeld onder 4 categorieën. Via het Rad van schaamte wordt de categorie bepaald. Dit script kiest onder deze categorie een random opdracht uit.

**index.js** In dit script is de structuur van de app vastgelegd. Functies die nodig zijn voor het functioneren van de app worden hier ook aangeroepen. 

