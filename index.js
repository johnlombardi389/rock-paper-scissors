let playerScore = 0;
let cpuScore = 0;

// Store HTML elements
const playerScore_span = document.getElementById('player-score');
const cpuScore_span = document.getElementById('cpu-score');
const scoreboard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result > p');
const rock_btn = document.getElementById('rock');
const paper_btn = document.getElementById('paper');
const scissors_btn = document.getElementById('scissors');

function getCpuChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function winner(playerChoice, cpuChoice) {
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  //Capitalize first letter of choice
  result_div.innerHTML = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1) + " > " + cpuChoice.charAt(0).toUpperCase() + cpuChoice.slice(1) + ". You win!";
  //Add green and red colors to names
  document.getElementById('player-label').classList.add('winner-badge');
  document.getElementById('cpu-label').classList.add('loser-badge');
  //Remove colors
  setTimeout(() => document.getElementById('player-label').classList.remove('winner-badge'), 750);
  setTimeout(() => document.getElementById('cpu-label').classList.remove('loser-badge'), 750);
}

function loser(playerChoice, cpuChoice) {
  cpuScore++;
  cpuScore_span.innerHTML = cpuScore;
  //Capitalize first letter of choice
  result_div.innerHTML = cpuChoice.charAt(0).toUpperCase() + cpuChoice.slice(1) + " > " + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1) + ". You lose!";
  //Add green and red colors to names
  document.getElementById('player-label').classList.add('loser-badge');
  document.getElementById('cpu-label').classList.add('winner-badge');
  //Remove colors
  setTimeout(() => document.getElementById('player-label').classList.remove('loser-badge'), 750);
  setTimeout(() => document.getElementById('cpu-label').classList.remove('winner-badge'), 750);
}

function tie(playerChoice, cpuChoice) {
  //Capitalize first letter of choice
  result_div.innerHTML = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1) + " = " + cpuChoice.charAt(0).toUpperCase() + cpuChoice.slice(1) + ". Tie!";
}

function playRound(playerChoice) {
  const cpuChoice = getCpuChoice();
  switch (playerChoice + cpuChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      winner(playerChoice, cpuChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      loser(playerChoice, cpuChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      tie(playerChoice, cpuChoice);
      break;
  }
}

main();
function main() {
  rock_btn.addEventListener('click', e => playRound("rock"));
  paper_btn.addEventListener('click', e => playRound("paper"));
  scissors_btn.addEventListener('click', e => playRound("scissors"));
}