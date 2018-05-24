// TO DO //
// Move the check for game won and lost off of key press after game is over.
// Add picture of brewery when the game is won or lost.
// Add button to restart on win or loss.
// Add button for hints.


var breweryArray = ["lagunitas", "stone", "philadelphia", "vault", "alchemist"];
var lagHints = ["This brewery is from California.", "This brewery has a dog for a mascot.", "This brewery is famous for weed related activities."];
var stoHints = ["This brewery is from California.", "This brewery is famous for their Enjoy By series", "This brewery has a devil/demon for a mascot."];
var phiHints = ["This brewery is in Philadelphia.", "This brewery is famous for their Kenzinger beer", "This brewery has a large contract brewing business"];
var vauHints = ["This brewery is in Yardley.", "This brewery makes the Mosaic Imperial IPA.", "This brewery was brought to market by ABV%"];
var alcHints = ["This brewery is in Vermont.", "This brewery makes Heady Topper.", "This brewery is considered the best in the world by many."];
var activeBrewery = "";
var guessingBrewery = [];
var guessingBreweryString = ""
var arrayLocation = [];
var lettersGuessed = [];
var lettersGuessedString = "";
var userScore = 0;
var computerScore = 0;
var remainingGuesses = 0;
var maxGuesses = 5;
var playing = false;
var blanks = "";
var userGuess = "";

//Bulk of game contained inside this function
var checkLetter = function(guess) {
    //logs key press to variable user Guess
    userGuess = event.key;

    //check if lives remain
    if (remainingGuesses === 0) {
            document.getElementById("bottomText").innerHTML = "You lost! The correct answer was " + activeBrewery;
            computerScore++;
            document.getElementById("computer-score").innerHTML = computerScore;
            playing = false
            return
        }
    else if (guessingBrewery.join("") === activeBrewery) {
        document.getElementById("bottomText").innerHTML = "You win!";
        userScore = userScore + 1;
        document.getElementById("user-score").innerHTML = userScore;
        playing = false
    }
    else
    {

    //checks if userguess has not been guessed, if it has not it adds the guess to an array to be checked next time
    if (lettersGuessed.indexOf(userGuess) === -1) {
        console.log(userGuess + "ug");
        console.log(activeBrewery + "ab");
        lettersGuessed.push(userGuess);

        //converts array to a string and prints to page
        lettersGuessedString = lettersGuessedString + " " + userGuess;
        document.getElementById("lettersGuessed").innerHTML = lettersGuessedString;

        //checks if user guess is not in active brewery and removes a life
        if (activeBrewery.indexOf(userGuess) === -1) {
            remainingGuesses = remainingGuesses - 1;
            document.getElementById("userGuesses").innerHTML = remainingGuesses;
            document.getElementById("bottomText").innerHTML = "You guessed " + userGuess.toUpperCase() + ". It was not part of the brewery. Guess Again!";
        }
        //if the letter is in the brewery name 
        else 
        {
            //iterates through brewery length matching the user guess up with the index it matches
            for (i = 0; i < activeBrewery.length; i++) {
                if (activeBrewery[i] === userGuess) {
                    guessingBrewery[i] = userGuess;
                    //removes comma used in array
                    guessingBreweryString = guessingBrewery.join(" ");
                    console.log(guessingBreweryString)
                    document.getElementById("blanks").innerHTML = guessingBreweryString;
                    document.getElementById("bottomText").innerHTML = "You guessed " + userGuess.toUpperCase() + ". Great job! Guess again!";
                    console.log(activeBrewery + guessingBrewery)
                }
            }
        }
    }
    else 
    {
        document.getElementById("bottomText").innerHTML = ("You already guessed " + userGuess + ". Please guess again.");    
            }
        }
    }

    $("#btn1").on("click", function (){
        $("#hintOne").html("<span>" + lagHints[0] + "</span>");
        console.log(lagHints[0])
    });

    $("#btn2").on("click", function (){
        $("#hintTwo").text(lagHints[1]);
    });

    $("#btn3").on("click", function (){
        $("#hintThree").text(lagHints[2]);
    });


//On any keypress selects brewery if the game has not started and wipes all info
document.onkeypress = function (event) {
    if (playing === false) {
        activeBrewery = breweryArray[Math.floor(Math.random() * 3)];
        //resets game back to default stage
        guessingBrewery = [];
        remainingGuesses = maxGuesses;
        document.getElementById("userGuesses").innerHTML = remainingGuesses;
        blanks = "";
        lettersGuessed = [];
        lettersGuessedString = ""
        //Set brewery information//
        //////////////////////////
        
        //Sets length of blanks for user to guess//

        for (var i = 0; i < activeBrewery.length; i++) {
            guessingBrewery.push("_");
        }
        //sets state of game to playing
        blanks = guessingBrewery.join(" ");
        playing = true;
        document.getElementById("blanks").innerHTML = blanks;
        
        document.getElementById("bottomText").innerHTML = "Guess any letter!";
    }
    //keypress is the game is currently being played
    else if (playing === true) {

        checkLetter(event.key);
        
           
            
    }
}