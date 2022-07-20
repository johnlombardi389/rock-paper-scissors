// Computer hand choice
function computerChoice() {
  let cpuHand = ["ROCK", "PAPER", "SCISSORS"];
  let random = Math.floor(Math.random() * cpuHand.length);
  // console.log("CPU: " + cpuHand[random]);
}

// Player hand choice
function playerChoice() {
  let choice = prompt("Rock, Paper, or Scissors?");
  // Check for user input
  while (choice == null) {
    choice = prompt("Rock, Paper, or Scissors?");
  }
}

let cpuScore = 0;
let playerScore = 0;

function gameRound(playerSelection, cpuSelection) {
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
}