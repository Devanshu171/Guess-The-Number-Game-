'use strict';
// ------------------------------------------------------
let secretNumber;
function getRandom() {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
}

let score = 20;
let hightScore = 0;
getRandom();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (score > 0) {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ No number!';
    } else if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉 Correct Number';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (score > hightScore) {
        hightScore = score;
        document.querySelector('.highscore').textContent = hightScore;
      }
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      updateScore();
    } else {
      document.querySelector('.message').textContent = '📈 Too High!';
      score--;
      updateScore();
    }
    if (score <= 0) {
      document.querySelector('.message').textContent = '💥 You lost the game!';
    }
  }
});

function updateScore() {
  document.querySelector('.score').textContent = score;
}

document.querySelector('.again').addEventListener('click', function () {
  let hightScore = document.querySelector('.highscore').textContent;
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  updateScore();
  getRandom();
});
