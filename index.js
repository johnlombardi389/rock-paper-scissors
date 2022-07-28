let playerScore = 0;
let cpuScore = 0;

// Store HTML elements
const playerScore_span = document.getElementById('player-score');
const cpuScore_span = document.getElementById('cpu-score');
const scoreboard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result');
const rock_btn = document.getElementById('rock');
const paper_btn = document.getElementById('paper');
const scissors_btn = document.getElementById('scissors');

function getCpuChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function playRound(playerChoice) {
  const cpuChoice = getCpuChoice();
  switch (playerChoice + cpuChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      console.log("Player wins!");
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      console.log("CPU wins!");
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      console.log("Tie!");
      break;
  }
}

main();
function main() {
  rock_btn.addEventListener('click', e => playRound("rock"));
  paper_btn.addEventListener('click', e => playRound("paper"));
  scissors_btn.addEventListener('click', e => playRound("scissors"));
}



