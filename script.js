const picks = ["rock", "paper", "scissors"];

function game() {
  playRound();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`It's a tie`);
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`You win!`);
  } else {
    console.log(`You Lose!`);
  }
}
const computerSelection = computerPick();
const playerSelection = playerPick();

function computerPick() {
  return picks[Math.floor(Math.random() * picks.length)];
}

function playerPick() {
  return "rock";
}

game();
