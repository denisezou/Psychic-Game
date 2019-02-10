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

//When the user presses a key.
document.onkeyup = function(event) {
//defines userGuess as the onkeyup event.
    userGuess.push(String.fromCharCode(event));
    
    //computer chooses what letter will win. 
    var computerGuess= computerchoices[Math.floor(Math.random()*computerchoices.length)];
    console.log(computerGuess);

    //logic for wins and losses.
    if ((userGuess !== computerGuess) || (userGuess.length < 8)){
        guessleft--;
    }
    
    if ((guessleft===0)){
        losses++;
        guessleft=7;
    }

    if ((userGuess === computerGuess)){
        guessleft=7;
        wins++;
    }
    
    


//controlling the stats displayed on the page.
    holdsguesses.textContent = "These have been your guesses: " + userGuess;
    holdsguessleft.textContent = "Guesses left: " + guessleft;
    holdswins.textContent = "Wins: " + wins;
    holdslosses.textContent = "Losses: " + losses;
}