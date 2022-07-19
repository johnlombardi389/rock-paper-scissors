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
  choice = choice.toUpperCase();
}

function gameRound(computerChoice, playerChoice) {
  let computerChoice = computerChoice();
  let playerChoice = playerChoice();

  console.log("CPU chooses " + computerChoice);
  console.log("Player chooses " + playerChoice);

  if (playerChoice == "ROCK" && computerChoice == "SCISSORS" || playerChoice == "PAPER" && computerChoice == "ROCK" || playerChoice == "PAPER" && computerChoice == "ROCK") {
    console.log("Player wins!!!");
  }
  else if (playerChoice == "ROCK" && computerChoice == "ROCK" || playerChoice == "PAPER" && computerChoice == "PAPER" || playerChoice == "SCISSORS" && computerChoice == "SCISSORS") {
    console.log("Tie game!!!");
  }
  else {
    console.log("CPU wins!!!");
  }
}