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

//grabs the text to display on the page.
var holdsguesses= document.getElementById("player-guess-text");
var holdsguessleft = document.getElementById("guesses-remain-text");
var holdswins = document.getElementById("wins-text");
var holdslosses = document.getElementById("loss-text");

//When the user presses a key.
document.onkeyup = function(event) {
//defines userGuess as the onkeyup event.
    var userGuess=event.key;
    --guessleft;
}