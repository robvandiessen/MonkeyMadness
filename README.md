# Monkey Madness

TODO: Write a project description

Met Monkey Madness zorg je voor wat leven 

in de brouwerij. De spreekwoorden “je staat voor aap” en “iemand anders na-apen” zijn 

bekende spreekwoorden. Het in de praktijk brengen maakt het echter nog veel leuker. Hoe 

goed vertrouw jij je vrienden? Ben jij een echte gorilla die alles aan durft. Of heb je altijd een 

grote mond, maar als je een opdracht uit moet voeren krabbel je terug?

## Installation

TODO: Describe the installation process

## Usage

TODO: Write usage instructions

## Lotje trek systeem opzet
Monkey Madness maakt gebruik van Firebase voor het vastleggen van de spelers binnen een lobby. Het lotje trek systeem kiest uit de aantal spelers binnen een lobby een speler die een opdracht moet uitvoeren. Deze gegevens worden opgeslagen in de Firebase locatie: https://scorching-torch-6903.firebaseio.com/
Wanneer een speler een lobby betreed, wordt er op basis van de aantal spelers binnen de lobby een nummer toegewezen en deze wordt weg geschreven in de Firebase.
Het systeem kiest een slachtoffer uit door een random nummer te kiezen tussen de 1 en aantal spelers binnen de lobby dit gaat doormiddel een if statement van javascript. 
Als het speler nummer overeen komt met dit nummer krijgt die een rood scherm.
Anderen spelers binnen de lobby krijgen een blauw scherm te zien waar ze aan geven of de opdracht geslaagd is.

## Lobbys maken
Wanneer een speler de app opstart kan er een lobby worden gemaakt of kan er aan een lobby worden deel genomen. Wanneer een speler een lobby aanmaakt wordt er via javascript functie een code met 4 cijfers gegenereerd.  Deze code moeten de anderen spelers invoeren die aan het spel willen deelnemen. Doormiddel van Session storage wort deze code onthouden en zo later weg geschreven in Firebase die van deze code een lobby aan maakt. Wanneer er lootjes zijn getrokken  is wordt er de speler tijdelijk uit de lobby en Firebase verwijderd. Wanneer een speler aangegeeft om weer deel te nemen met een nieuwspel zal die weer in de lobby worden geplaatst. Omdat lobby code nog in de session storage aan wezig is weet het systeem welke lobby de speler geplaats moet worden. 

##Stemmen.
Wanneer het slachtoffer een opdracht heeft gedaan kunnen de anderen spelers aangeven of de opdracht is voltooit. Deze spelers worden tijdelijk uit de lobby gezet. Als een speler aangeeft dat de opdracht is voltooit zal deze meedoen aan de volgen de ronden. Als alle anderen speler die opdracht niet geslaagd vinden zal het slachtoffer de lobby alleen moeten betreden om zo weer een rood scherm te krijgen

## Wiel van schaamte


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

TODO: Write history

## Credits

TODO: Write credits

## License

TODO: Write license
