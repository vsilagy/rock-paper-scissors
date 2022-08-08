const picks = document.querySelectorAll(".pick");
const playerScoreDisplay = document.getElementById("score");
const computerScoreDisplay = document.getElementById("computer");
const main = document.getElementById("main");
const header = document.getElementById("header");
const result = document.getElementById("result");
const playAgainBtn = document.getElementById("play-again");
const playerChoice = document.getElementById("player-choice");
const computerChoice = document.getElementById("computer-choice");
const message = document.getElementById("message");

// rules modal
const rules = document.getElementById("rules");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

// game modal
const game = document.getElementById("game");
const gameMsg = document.getElementById("game-msg");
const resetBtn = document.getElementById("reset");

//score
let playerScore = 0;
let computerScore = 0;
let playerPick = undefined;

picks.forEach((button) => {
  button.addEventListener("click", () => {
    playerPick = button.getAttribute("id");
    playRound();
  });
});

playAgainBtn.addEventListener("click", () => {
  // show result
  main.style.display = "flex";
  result.style.display = "none";
});

openBtn.addEventListener("click", () => {
  rules.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  rules.style.display = "none";
});

resetBtn.addEventListener("click", () => {
  header.style.display = "flex";
  main.style.display = "flex";
  result.style.display = "none";
  game.style.display = "none";
});

function playRound() {
  const computerPick = getComputerPick();

  // update round
  updateRound(playerChoice, playerPick);
  updateRound(computerChoice, computerPick);

  if (playerPick === computerPick) {
    message.innerText = `It's a tie`;
  } else if (
    (playerPick === "paper" && computerPick === "rock") ||
    (playerPick === "rock" && computerPick === "scissors") ||
    (playerPick === "scissors" && computerPick === "paper")
  ) {
    updatePlayerScore(1);
    message.innerText = `You win!`;
  } else {
    updateComputerScore(1);
    message.innerText = `You Lose!`;
  }

  if (playerScore === 5) {
    gameMsg.innerText = "Congratulations! You won the game";
    gameOver();
  } else if (computerScore === 5) {
    gameMsg.innerText = "Game over";
    gameOver();
  } else {
    // show the selection, hide main
    main.style.display = "none";
    result.style.display = "flex";
  }
}

function updatePlayerScore(value) {
  playerScore += value;
  playerScoreDisplay.innerText = playerScore;
}

function updateComputerScore(value) {
  computerScore += value;
  computerScoreDisplay.innerText = computerScore;
}

function gameOver() {
  header.style.display = "none";
  main.style.display = "none";
  result.style.display = "none";
  game.style.display = "flex";
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.innerText = 0;
  computerScoreDisplay.innerText = 0;
}

function getComputerPick() {
  const random = Math.random();
  if (random < 0.34) {
    return "rock";
  } else if (random <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function updateRound(selectionEl, pick) {
  // reset class
  selectionEl.classList.remove("btn-paper");
  selectionEl.classList.remove("btn-rock");
  selectionEl.classList.remove("btn-scissors");
  // update the image
  const img = selectionEl.querySelector("img");
  selectionEl.classList.add(`btn-${pick}`);
  img.src = `./img/icon-${pick}.svg`;
  img.alt = pick;
}
