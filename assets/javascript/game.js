// TO DO //
// Move the check for game won and lost off of key press after game is over.
// Add picture of brewery when the game is won or lost.
// Add button to restart on win or loss.
// Add button for hints.
// refactor to make the breweries a key value pairing for brewery information


var breweryArray = ["lagunitas", "stone", "philadelphia", "vault", "alchemist"];
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
        switch(activeBrewery) {
            case "lagunitas":
                document.getElementById("breweryImage").src ="assets/images/lagunitas.png";
            break;
            case "stone":
                document.getElementById("breweryImage").src = "assets/images/stone.jpg";
            break;
            case "alchemist":
                document.getElementById("breweryImage").src = "assets/images/alchemist.jpg";
            break;
            case "philadelphia":
                document.getElementById("breweryImage").src = "assets/images/philadelphia.png";
            break;
            case "vault":
                document.getElementById("breweryImage").src = "assets/images/vault.jpg";
            break;
            default:
            document.getElementById("breweryImage").src = "assets/images/question.png";
                break;
        };
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
                    document.getElementById("blanks").innerHTML = guessingBreweryString.toUpperCase();
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
        activeBrewery = breweryArray[Math.floor(Math.random() * breweryArray.length)];
        //resets game back to default stage
        guessingBrewery = [];
        document.getElementById("breweryImage").src = "assets/images/question.png";
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