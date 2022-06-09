'use strict';

let SecretNumber = Math.floor(Math.random() * 20)+1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector(".message").textContent = '🚫 No Number!!';
    } else if (guess === SecretNumber){
        document.querySelector('.message').textContect = 'Correct Number!🎈🎆';
        document.querySelector('.number').textContect = SecretNumber;
        document.querySelector('body').style.backgroundColor = '#60b547';
        document.querySelector('.number').style.widht = '30rem';
        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
            document.querySelector('.highscore').textContent = score;
        }
    } else if (guess !== SecretNumber) {
        if (score > 1){
            document.querySelector('.message').textContent = guess > SecretNumber ? 'Number to High! 💹':'Number to Low 📉';
            score--;
            document.querySelector('.score').textContent = score;
            } else {
            document.querySelector('.message').textContent = 'Game Over!! 🕹';
            document.querySelector('.score').textContent = 0;
        }
    }});