//Initiates variables established in HTML doc //
var userScoreV = 0;
var computerScoreV = 0;
var guessesRemainingV = 0;
var lettersGuessedV = "";
var hintOneV = "";
var hintTwoV = "";
var hintThreeV = "";
var breweryImageV = "";
var blanks = "";
var bottomText = "Press any key to begin playing!";

//Initiates variables used for game //

var guessPool = [];
var breweries = ["Ballast Point", "Lagunitas", "Urban Village"];
var activeBrewery = "";

//When player presses any key begins the game by picking a random brewery//
document.onkeypress = function (event) {
    activeBrewery = breweries[Math.floor(Math.random() * 3)];

    //Set brewery information//
    
    
    //Sets length of blanks for user to guess//

    for (var i = 0; i < activeBrewery.length; i++) {
        blanks = blanks + " _ ";
    }
    document.getElementById("blanks").innerHTML = blanks;
    
    document.getElementById("bottomText").innerHTML = "Guess any letter!";

    //Checks if user guesses a letter and logs letter to variable

    document.onkeypress = function(event) {
        var userGuess = event.key;
        

        if (event.keyCode >= 65 && event.keyCode <= 122) {
        lettersGuessedV = lettersGuessedV + userGuess + " ";
        document.getElementById("lettersGuessed").innerHTML = lettersGuessedV;
        document.getElementById("bottomText").innerHTML = "You guessed " + userGuess.toUpperCase();
            //If a letter was guessed progress into switch statement for the game//
            switch (activeBrewery) {
                case breweries[0]:
                    console.log("i 0");
                    brewArray = activeBrewery.split("");
                    console.log(brewArray);
                break;

                case breweries[1]:
                    console.log("i 1");
                    brewArray = activeBrewery.split("");
                    console.log(brewArray);
                break;

                case breweries[2]:
                    console.log("i 2");
                    brewArray = activeBrewery.split("");
                    console.log(brewArray);
                break;

                default:
                    console.log("what?");
                break;
            }        
        }
        else {
            document.getElementById("bottomText").innerHTML = "That wasn't a letter. Please guess any letter.";
        }


    }

}