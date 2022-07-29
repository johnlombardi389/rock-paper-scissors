let playerScore = 0;
let cpuScore = 0;
let finishedGame = 1;

// Store HTML elements
const playerScore_span = document.getElementById('player-score');
const cpuScore_span = document.getElementById('cpu-score');
const scoreboard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result > p');
const rock_btn = document.getElementById('rock');
const paper_btn = document.getElementById('paper');
const scissors_btn = document.getElementById('scissors');
const history_div = document.getElementById('history');
const gameNum_div = document.getElementById('game-num');
const gameWinner_div = document.getElementById('game-winner');
const gameScore_div = document.getElementById('game-score');

//Generate random hand for computer
function getCpuChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

//Get winner from 1 round
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

//Get loser from 1 round
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

//Identify tie from 1 round
function tie(playerChoice, cpuChoice) {
  //Capitalize first letter of choice
  result_div.innerHTML = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1) + " = " + cpuChoice.charAt(0).toUpperCase() + cpuChoice.slice(1) + ". Tie!";
}

//Play 1 round of rps
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
  //Update scores and log in history if player wins 5 times
  if (playerScore === 5) {
    playerScore_span.innerHTML = 0;
    cpuScore_span.innerHTML = 0;

    const newGameDiv = document.createElement('div');
    gameNum_div.append(newGameDiv);
    newGameDiv.classList.add('result-line');
    newGameDiv.innerHTML = finishedGame;

    const newWinnerDiv = document.createElement('div');
    gameWinner_div.append(newWinnerDiv);
    newWinnerDiv.classList.add('result-line');
    newWinnerDiv.innerHTML = "Player";

    const newScoreDiv = document.createElement('div');
    gameScore_div.append(newScoreDiv);
    newScoreDiv.classList.add('result-line');
    newScoreDiv.innerHTML = playerScore + " > " + cpuScore;

    playerScore = 0;
    cpuScore = 0;
    finishedGame += 1;
  }

  //Update scores and log in history if computer wins 5 times
  if (cpuScore === 5) {
    playerScore_span.innerHTML = 0;
    cpuScore_span.innerHTML = 0;

    const newGameDiv = document.createElement('div');
    gameNum_div.append(newGameDiv);
    newGameDiv.classList.add('result-line');
    newGameDiv.innerHTML = finishedGame;

    const newWinnerDiv = document.createElement('div');
    gameWinner_div.append(newWinnerDiv);
    newWinnerDiv.classList.add('result-line');
    newWinnerDiv.innerHTML = "CPU";

    const newScoreDiv = document.createElement('div');
    gameScore_div.append(newScoreDiv);
    newScoreDiv.classList.add('result-line');
    newScoreDiv.innerHTML = cpuScore + " > " + playerScore;

    playerScore = 0;
    cpuScore = 0;
    finishedGame += 1;
  }
}

//Get player choice
main();
function main() {
  rock_btn.addEventListener('click', e => playRound("rock"));
  paper_btn.addEventListener('click', e => playRound("paper"));
  scissors_btn.addEventListener('click', e => playRound("scissors"));
}