var breweryArray = ["brewonex", "brewtwoxx", "brewthreexxx"];
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
        }
    else
    {

    //checks if userguess has not been guessed, if it has not it adds the guess to an array to be checked next time
    if (lettersGuessed.indexOf(userGuess) === -1) {
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



//On any keypress selects brewery if the game has not started and wipes all info
document.onkeypress = function (event) {
    if (playing === false) {
        activeBrewery = breweryArray[Math.floor(Math.random() * 3)];
        //resets game back to default stage
        guessingBrewery = [];
        remainingGuesses = maxGuesses;
        blanks = "";

        //Set brewery information//
        //////////////////////////
        
        //Sets length of blanks for user to guess//

        for (var i = 0; i < activeBrewery.length; i++) {
            guessingBrewery.push("_");
        }
        //sets state of game to playing
        playing = true;
        document.getElementById("blanks").innerHTML = blanks;
        
        document.getElementById("bottomText").innerHTML = "Guess any letter!";
    }
    //keypress is the game is currently being played
    else if (playing === true) {

        checkLetter(event.key);
        
           
            
    }
}