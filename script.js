const picks = document.querySelectorAll(".pick");
const playerScoreDisplay = document.getElementById("score");
const computerScoreDisplay = document.getElementById("computer");
const main = document.getElementById("main");
const header = document.getElementById("header");
const result = document.getElementById("result");
const playAgainBtn = document.getElementById("play-again");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");

let playerScore = 0;
let houseScore = 0;
let playerPick = undefined;

picks.forEach((button) => {
  button.addEventListener("click", () => {
    playerPick = button.getAttribute("id");
    console.log(playerPick);
  });
});

// function game() {
//   playRound();
// }

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     console.log(`It's a tie`);
//   } else if (
//     (playerSelection === "paper" && computerSelection === "rock") ||
//     (playerSelection === "rock" && computerSelection === "scissors") ||
//     (playerSelection === "scissors" && computerSelection === "paper")
//   ) {
//     console.log(`You win!`);
//   } else {
//     console.log(`You Lose!`);
//   }
// }
// const computerSelection = computerPick();
// const playerSelection = playerPick();

// function computerPick() {
//   return picks[Math.floor(Math.random() * picks.length)];
// }

// function playerPick() {
//   return "rock";
// }

// game();
