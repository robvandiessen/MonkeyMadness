# MonkeyMadness
Met Monkey Madness zorg je voor wat leven in de brouwerij. De spreekwoorden “je staat voor aap” en “iemand anders na-apen” zijn bekende spreekwoorden. Het in de praktijk brengen maakt het echter nog veel leuker. 

Hoe goed vertrouw jij je vrienden? Ben jij een echte gorilla die alles aan durft. Of heb je altijd een grote mond, maar als je een opdracht uit moet voeren krabbel je terug?


## Doel
Het belangrijkste doel van Monkey Madness is het creëren van amusement met je vrienden. Met deze app laat je jouw vrienden opdrachten uitvoeren om ze buiten hun comfortzone te laten treden.

Wat de app in het kort doet is:
- Spel lobbys aanmaken, zodat je echt alleen met jouw vrienden samen zit
- Random een slachtoffer kiezen binnen een lobby
- Geeft een opdracht met beschrijving door aan slachtoffer.
- Anderen spelers bepalen of de opdracht geslaagd is.

## UI
De UI van de app is gemaakt met het ionic Framework. Met Ionic kan er op een simpelere manier een app worden gemaakt voor iOS en Android met behulp van: HTML, CSS en Javascript. Ionic richt zich vooral op de look en feel en native interactie van de app. Het Framework vervangt PhoneGap niet of een ander Javascript Framework. Zelf ontwikkelde HTML, CSS en Javascript is ook zonder problemen in Ionic te verwerken.

## Plugins

### Firebase
Firebase biedt een API aan om data in realtime te syncen. Wanneer data veranderdt wordt deze door de hele app en apparaaten geüpdate.

**https://cdn.firebase.com/js/client/2.2.1/firebase.js**


## Externe diensten 

### Firebase database
De lobby, de spelers en lotnummers worden extern opgeslagen in Firebase. Firebase wordt gebruikt vanwege het feit dat je vrij makkelijk en relatief snel een database op kan zetten. Het maken van een aparte database en mysql server is hierdoor overbodig. 
 
**https://scorching-torch-6903.firebaseio.com/**

## Back-end
**maaklobby.js** Dit script genereerd een lobby ID van 4 random cijfers. Doormiddel van Session Storage wordt dit nummer opgeslagen en later weggeschreven in Firebase als een lobby. Op deze manier wordt een unieke lobby gecreërd voor jou en je vrienden. 

**joinlobby.js** Dit script maakt een invoerveld aan waar de 4 cijferige code van een bestaande lobby kan worden ingevoerd. Via Session Storage wordt dit nummer onthouden, zodat het systeem weet in welke lobby hij de speler moet plaatsen.

**eesteLot.js** Dit is de backbone van de app, omdat het de lobby, spelers en het lotnummer aanmaakt. Ook bepaalt het script wie van de spelers het slachtoffer is.

Als een speler een lobby aanmaakt of deelneemt wordt door middel van dit script de lobby en de speler verwerkt in Firebase. Het lobbynummer wordt uit de Session Storage gehaald. Het script geeft de speler ook een uniek nummer. Dit nummer wordt gegenereerd op basis van het aantal spelers binnen een lobby. Het totaal aantal spelers wordt opgeteld om een random nummer te genereren. Dit lotnummer moet bepalen wie van de spelers het slachtoffer is. 

Al deze gegevens worden opgeslagen in Firebase en ge-update wanneer nodig.

Het script kiest een slachtoffer uit door het nummer van de speler te vergelijke met het lotnummer. Dit gaat doormiddel van een if statement. Als het nummer van de speler overeen komt met het lotnummer krijgt het slachtoffer een rood scherm te zien en zal worden doorverwezen naar het Rad van Schaamte. De overige spelers krijgen het zogenaamde veilige scherm te zien waar ze aan moeten geven of de opdracht geslaagd is om zo een nieuwe ronde te beginnen. Er bestaat ook een optie om aan te geven dat de opdracht niet geslaagd is, waardoor de speler nog een keer aan het rad moet draaien. Hij blijft namelijk een rood scherm houden, omdat hij op dat moment de enige speler is.

Tevens staan in dit script enkele functies die de juiste geluiden afspelen op de juiste momenten. Op het moment dat de speler in de view van het rad komt start het juiste nummer. Verlaat de gebruiker dit scherm weer, dan stopt het geluid. De functie om het geluid te stoppen wordt vaker in de app aangeroepen, zodat de gebruiker zich er niet aan hoeft te storen wanneer hij/zij zich in een andere view bevindt. 

**wheel.js** Het Rad van schaamte wordt in dit script geanimeerd. Er wordt in het script ook een berekening gemaakt waar het rad op moet eindigen. Op deze manier weet het rad naar welke categoriepagina het slachtoffer gestuurd moet worden. Er zijn vier verschillende categorieën. Gorilla, chimpanzee, baviaan en maki. 

**opdrachten.js** Alle opdrachten die in de app voorkomen zijn in dit script verwerkt. Deze opdrachten zijn verdeeld over de vier categorieën. Via het Rad van schaamte wordt de categorie bepaald. De opdrachten staan per categorie in een array. Dit script kiest zorgt ervoor dat er random een opdracht uit het array wordt gehaald. De juiste array wordt ingeladen op basis van welke categorie de gebruiker heeft gedraaid.  

**index.js** In dit script is de structuur van de app vastgelegd. Functies die nodig zijn voor het functioneren van de app worden hier ook aangeroepen. 

**mainfunctions.js** In dit script zijn enkele functies vastgelegd die bepaalde elementen hiden en showen op de momenten dat het nodig is.
