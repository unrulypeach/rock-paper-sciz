let computerSelection;
let score = 0;
let computerScore = 0;
let playARound;
let winningPhrase = "ur a winner";
let losingPhrase = "ur a loser";
let tiePhrase = "no winners here";



//randomly return rock, pape, or siz
function computerPlay() {
    let computerChoices = ["rock", "paper", "sciz"];
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
        results.textContent = "tie";
        resultsContainer.appendChild(results);

    } else if (playerSelection == "rock") {
        if (computerSelection == "sciz") {
            score += 1;
            results.textContent = winningPhrase;
            resultsContainer.appendChild(results);
        } else {
            computerScore += 1;
            results.textContent = losingPhrase;
            resultsContainer.appendChild(results);
        }

    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            score += 1;
            results.textContent = winningPhrase;
            resultsContainer.appendChild(results);
        } else {
            computerScore += 1;
            results.textContent = losingPhrase;
            resultsContainer.appendChild(results);
        }

    } else if (playerSelection == "sciz") {
        if (computerSelection == "paper") {
            score += 1;
            results.textContent = winningPhrase;
            resultsContainer.appendChild(results);
        } else {
            computerScore += 1;
            results.textContent = losingPhrase;
            resultsContainer.appendChild(results);
        }
    }

    scores.textContent = `your score is: ${score} vs the bots score is: ${computerScore}`;
    resultsContainer.appendChild(scores);
}

//Use the previous function inside of this one to 
//play a 5 round game that keeps score and reports a winner/loser at end 
function game() {
    if (score == 5) {
        results.textContent = 'u win, click to play again';
        resultsContainer.appendChild(results);
        score = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        results.textContent = 'u lose loser, click to lose to the bot again lil noob';
        resultsContainer.appendChild(results);
        computerScore = 0;
        score = 0;
    } else {

    }

}

const resultsContainer = document.querySelector(".results-container");
const results = document.createElement('p');
results.classList.add('results');

const scores = document.createElement('p');
scores.classList.add('scores');

const button = document.querySelector(".button");
const rock = document.querySelector("#rock");
const pape = document.querySelector("#pape");
const sciz = document.querySelector("#sciz");

rock.addEventListener('click', () => {
    playRound('rock', computerPlay());
    game()
})

pape.addEventListener('click', () => {
    playRound('paper', computerPlay());
    game()
})

sciz.addEventListener('click', () => {
    playRound('sciz', computerPlay());
    game()
})

