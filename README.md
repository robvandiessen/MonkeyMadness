# MonkeyMadness
Met Monkey Madness zorg je voor wat leven in de brouwerij. De spreekwoorden “je staat voor aap” en “iemand anders na-apen” zijn bekende spreekwoorden. Het in de praktijk brengen maakt het echter nog veel leuker. 

Hoe goed vertrouw jij je vrienden? Ben jij een echte gorilla die alles aan durft. Of heb je altijd een grote mond, maar als je een opdracht uit moet voeren krabbel je terug?


## Doel
Het hooft doel van Monkey Madness is amusement met je vrienden / vrienden te creëren en ze opdrachten te laten doen die buiten de comfort zone treden.
Wat de app in het kort doet is:
- Random slachtoffer kiezen binnen een vriendengroep.
- Geeft een opdracht met beschrijving door aan slachtoffer.

## UI
De UI van de app is gemaakt met Ionic Framework. Met Ionic kan er eenvoudig apps worden gemaakt voor iOS en Android met behulp van: HTML, CSS en Javascript. Ionic richt zich vooral op de look en feel en UI interactie van de app. Het Framework vervangt dan ook niet PhoneGap of een ander Javascript Framework. Zelf ontwikkelde: HTML, CSS en Javascript is ook zonder problemen in Ionic te verwerken.

## Plugins

### Firebase
Firebase biedt een API aan om data te syncen in realtime. Wanneer data veranderd wordt deze over de hele app en apparaat geüpdate.

**https://cdn.firebase.com/js/client/2.2.1/firebase.js**


## Externe diensten 

### Firebase database
 De lobbys, spelers en lot nummers worden extern opgeslagen in Firebase. Firebase wordt gebruikt omdat het makkelijk en snel een database kan op zetten. 
 
**https://scorching-torch-6903.firebaseio.com/**

## Back-end
**maaklobby.js** Het javascript genereerd een lobby ID van 4 random cijfers. Doormiddel van Session storage wordt dit nummer opgeslagen en later weg geschreven in Firebase als een lobby.

**joinlobby.js** Dit script maakt een invoerveld waar de 4 cijferige code van het gemaakte lobby kan invoeren. Via Session storage wordt dit nummer onthouden zodat het systeem weet in welke lobby hij de speler moet plaatsen.

**eesteLot.js** Dit is de backbone van de app. Als een speler een lobby maakt of deelneemt wordt er in dit script de lobby en de speler verwerkt in Firebase door het nummer uit de Session storage te halen. Het script geeft de speler ook een uniek nummer. Dit nummer wordt gegenereerd met het aantal spelers binnen een lobby. Het totaal aantal spelers wordt ook opgeteld om een random nummer gegenereerd. Dit lotnummer moet bepalen wie van de spelers het slachtoffer is. Al deze gegevens worden opgeslagen in Firebase.  

Het script kiest een slachtoffer uit door het nummer van de speler te vergelijke met het lotnummer. Dit gaat doormiddel van een if statement. Als het nummer van de speler overeen komt met het lotnummer krijgt het slachtoffer een rood scherm te zien en zal worden verwezen naar het rad van schaamte. Anderen krijgen het zogenaamde veilig scherm te zien waar in ze moeten aangeven of de opdracht geslaagd is. 

Ook kijkt het script of er een speler aanwezig is binnen de lobby. Firebase biet namelijk een functie aan die de aanwezigheid van een speler kan controleren. Dus als een speler het spel verlaat, wordt die uit de lobby weg geschreven.

**wheel.js** Het Rad van schaamte wordt in dit script geanimeerd. Er wordt in het script een berekening gemaakt waar het rad op moet eindigen en welke opdracht het slachtoffer krijgt. De muziek in het scherm wordt hier ook afgespeeld.

**opdrachten.js** Alle opdrachten die in de app voorkomen zijn in dit script verwerkt. Deze opdrachten zijn verdeeld onder 4 categorieën. Via het Rad van schaamte wordt de categorie bepaald. Dit script kiest onder deze categorie een random opdracht uit.

**index.js** In dit script is de structuur van de app vastgelegd. Functies die nodig zijn voor het functioneren van de app worden hier ook aangeroepen 
