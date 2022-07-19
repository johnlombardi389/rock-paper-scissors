// Computer hand choice
function getComputerChoice() {
  let cpuHand = ["ROCK", "PAPER", "SCISSORS"];
  let random = Math.floor(Math.random() * cpuHand.length);
  console.log("CPU: " + cpuHand[random]);
}

// Player hand choice
function playerChoice() {
  let choice = prompt("Rock, Paper, or Scissors?");
  while (choice == null) {
    choice = prompt("Rock, Paper, or Scissors?");
  }
  choice = choice.toUpperCase();
}