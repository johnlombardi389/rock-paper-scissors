function getComputerChoice() {
  let cpuHand = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * cpuHand.length);
  console.log(cpuHand[random]);
}

getComputerChoice();