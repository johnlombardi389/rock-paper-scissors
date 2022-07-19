function getComputerChoice() {
  let cpuHand = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * cpuHand.length);
  console.log("CPU: " + cpuHand[random]);
}

function game(playerSelection, cpuSelection){
  playerSelection = prompt("Rock, Paper, or Scissors?");
  cpuSelection = getComputerChoice();

  console.log("Player: " + playerSelection);
}

game();