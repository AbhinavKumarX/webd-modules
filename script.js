"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

const updateScore = (newScore) => {
  document.querySelector(".score").textContent = newScore;
};

const resetStyles = () => {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
};

const revealSecretNumber = () => {
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector("body").style.backgroundColor = "#60b347"; // Green background
  document.querySelector(".number").style.width = "30rem"; // Wider number display
};

// For debugging: Uncomment to reveal the secret number
// document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // No input
  if (!guess) {
    displayMessage("⛔ No Number!");
    return;
  }

  // Out of range
  if (guess < 1 || guess > 20) {
    displayMessage("🚫 Enter a number between 1 and 20!");
    return;
  }

  // Correct guess
  if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    revealSecretNumber();

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    return;
  }

  // Wrong guess
  if (score > 1) {
    displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
    score--;
  } else {
    displayMessage("💥 You lost the game!");
    score = 0;
  }
  updateScore(score);
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // For debugging: Uncomment to reveal the secret number
  // document.querySelector(".number").textContent = secretNumber;

  displayMessage("Start guessing...");
  updateScore(score);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  resetStyles();
});
