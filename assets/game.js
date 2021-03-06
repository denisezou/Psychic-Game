//holds all possible letters in the alphabet.
var computerchoices = ["a", "b", "c",
                    "d", "e", "f",
                    "g", "h", "i",
                    "j", "k", "l",
                    "m", "n", "o",
                    "p", "q", "r",
                    "s", "t", "u",
                    "v", "w", "x",
                    "y", "z"];

//variables to grab the stats of the game.
var wins = 0;
var losses = 0;
var guessleft= 7;
var userGuess= []; 

//grabs the text to display on the page.
var holdsguesses= document.getElementById("player-guess-text");
var holdsguessleft = document.getElementById("guesses-remain-text");
var holdswins = document.getElementById("wins-text");
var holdslosses = document.getElementById("loss-text");

//computer chooses what letter will win. 
let computerGuess = computerchoices[Math.floor(Math.random() * computerchoices.length)];



//When the user presses a key.
document.onkeyup = function(event) {

    //defines userGuess as the onkeyup event.
    userGuess.push(event.key);

    //logic for wins and losses.
    if ((userGuess.includes(computerGuess))){
        wins++;
        guessleft=7;
        function reset () {
            //empty array
            userGuess.length = 0;
            //computer picks new letter
            let computerGuess = computerchoices[Math.floor(Math.random() * computerchoices.length)];
        }
        reset ();
    } else {
        guessleft--;
    }

    
    if ((guessleft===0)){
        losses++;
        guessleft=7;
        function reset () {
            //empty array
            userGuess.length = 0;
            //computer picks new letter
            let computerGuess = computerchoices[Math.floor(Math.random() * computerchoices.length)];
        }
        reset ();
    }

//controlling the stats displayed on the page.
    holdsguesses.textContent = "These have been your guesses: " + userGuess;
    holdsguessleft.textContent = "Guesses left: " + guessleft;
    holdswins.textContent = "Wins: " + wins;
    holdslosses.textContent = "Losses: " + losses;
}