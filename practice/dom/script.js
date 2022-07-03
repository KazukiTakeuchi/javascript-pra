'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = `No number!`;
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = `🎉 Correct Number`;
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = `Too hight`;
        score--;
        document.querySelector('.score').textContent = score;
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = `Too low`;
        score--;
        document.querySelector('.score').textContent = score;
    }

    if (score < 1) {
        document.querySelector('.message').textContent = `You lost the game`
    }
});
