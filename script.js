let computerSelection;
let score;
let computerScore;
let playARound;
let winningPhrase = "ur a winner";
let losingPhrase = "ur a loser";
let tiePhrase = "no winners here";
//let playerSelection = playerPlay();
//let choices = ["rock", "paper", "scissors"];


//randomly return rock, pape, or siz
function computerPlay() {
    let computerChoices = ["rock", "paper", "scissors"];
    let tempChoice = Math.floor(Math.random()*3);

    return(computerChoices[tempChoice]);        
}

function playerPlay() {
    //return prompt("please enter your choice of rock, paper, or sciz", "rock").toLowerCase();
}

//plays a singly round of rps,  two parameters - the playerSelection and computerSelection
// returns a string declaring winter make your function’s playerSelection parameter case-insensitive 
function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return tiePhrase;

    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return(winningPhrase)
        } else {
            return losingPhrase;
        }

    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return winningPhrase;
        } else {
            return losingPhrase;
        }

    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return winningPhrase;
        } else {
            return losingPhrase;
        }
    }
}

//Use the previous function inside of this one to 
    //play a 5 round game that keeps score and reports a winner/loser at end 
    function game() {
        score = 0;
        computerScore = 0;
        
        while (score < 5 && computerScore < 5) {
            playARound = playRound(playerPlay(), computerPlay());
            
            if (playARound == winningPhrase) {
                score ++;

            } else if (playARound == losingPhrase) {
                computerScore ++;

            } else {
                
            }
        console.log(computerScore);
        console.log(score);    
        }
        
        if (score ==5) {
                    console.log("u win");
                } else {
                    console.log("u lose");
                }

    }

const button = document.querySelector(".button");
const rock = document.querySelector("#rock");
const pape = document.querySelector("#pape");
const sciz = document.querySelector("#sciz");

rock.addEventListener('click', () => {
    return 'rock';
})

pape.addEventListener('click', () => {
    return 'paper';
})

sciz.addEventListener('click', () => {
    return 'sciz';
})

game();