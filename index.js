/* Computer hand choice
function computerChoice() {
  let cpuHand = ["ROCK", "PAPER", "SCISSORS"];
  let random = Math.floor(Math.random() * cpuHand.length);
}*/

/* Player hand choice
function playerChoice() {
  let choice = prompt("Rock, Paper, or Scissors?");
  // Check for user input
  while (choice == null) {
    choice = prompt("Rock, Paper, or Scissors?");
  }
}
*/
/*
// Track player scores
let cpuScore = 0;
let playerScore = 0;

// 1 round of game
function playRound(playerSelection, cpuSelection) {
  if (playerSelection.toUpperCase() === "ROCK") {
    if (cpuSelection === "ROCK") {
      console.log("Tie!!!");
    }
    else if (cpuSelection === "PAPER") {
      cpuScore++;
      console.log("CPU wins!! Paper beats Rock");
    }
    else {
      playerScore++;
      console.log("Player wins!! Rock beats Scissors");
    }
  }
  else if (playerSelection === "PAPER") {
    if (cpuSelection === "ROCK") {
      playerScore++;
      console.log("Player wins!! Paper beats Rock");
    }
    else if (cpuSelection == "PAPER") {
      console.log("Tie!!!");
    }
    else {
      cpuScore++;
      console.log("CPU wins!! Scissors beats Paper");
    }
  }
  else {
    if (cpuSelection === "ROCK") {
      cpuScore++;
      console.log("CPU wins!! Rock beats Scissors");
    }
    else if (cpuSelection === "PAPER") {
      playerScore++;
      console.log("Player wins!! Scissors beats Paper");
    }
    else {
      console.log("Tie!!!");
    }
  }
}*/

/*
// 1 game of RPS that plays 5 rounds
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    const cpuSelection = computerChoice();
    console.log(playRound(playerSelection, cpuSelection));
    console.log("Player score: " + playerScore);
    console.log("CPU score: " + cpuScore);
  }
}

game();
*/

const cpuChoiceDisplay = document.getElementById('cpu-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultWinner = document.getElementById('result');
const possibleHandChoices = document.querySelectorAll('button');
let playerChoice;

possibleHandChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', e => {
  playerChoice = e.target.id;
  playerChoiceDisplay.innerHTML = playerChoice;
}))