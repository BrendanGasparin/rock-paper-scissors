/*
    rps.js
    Rock Paper Scissors
    Author: Brendan Gasparin
    Date: 2021-04-22
    JavaScript Rock Paper Scissors game.
*/

const fps = 1000 / 30;
let p1Score = 0;
let p2Score = 0;
let rounds = 0;

// Randomly returns 'Rock', 'Paper', or 'Scissors'.
function computerPlay() {
    const num = Math.floor(Math.random() * 3);  // Random number to determine which case to return.

    switch(num) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
        default:
            console.error('computerPlay() error!');
    }
}

// Return a string stating whether the player won, lost, or tied, and what symbols were thrown.
function getResults(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') return 'You tie! Rock ties with Rock';
        else if (computerSelection == 'paper') return 'You lose! Paper beats Rock';
        else return 'You win! Rock beats Scissors';
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') return 'You win! Paper beats Rock';
        else if (computerSelection == 'paper') return 'You tie! Paper ties with Paper';
        else return 'You lose! Scissors beat Paper';
    } else {
        if (computerSelection == 'rock') return 'You lose! Rock beats Scissors';
        else if (computerSelection == 'paper') return 'You win! Scissors beat Paper';
        else return 'You tie! Scissors tie with Scissors';
    }
}

// Play a round of Rock Paper Scissors.
function playRound(e) {
    let playerChoice = e.target.value;
    let computerChoice = computerPlay();
    let winString = getResults(playerChoice, computerChoice);

    // update score and rounds
    let winnerSubstring = winString.slice(4, 7);
    if (winnerSubstring == 'win') p1Score++;
    else if (winnerSubstring == 'los') p2Score++;
    rounds++;

    updateDisplay(playerChoice, computerChoice, winString);
}

function setup() {
    const buttons = document.querySelectorAll('.choice-button');
    buttons.forEach(btn => btn.addEventListener('click', playRound));
}

function updateDisplay(pChoice, cChoice, wString) {
    const playerImage = document.querySelector('#player-graphic');
    const cpuImage = document.querySelector('#cpu-graphic');

    playerImage.alt = pChoice;
    playerImage.src = `./images/${pChoice}-left.png`;

    cpuImage.alt = cChoice;
    cpuImage.src = `./images/${cChoice}-right.png`;

    document.querySelector('.text1').textContent = wString;
    document.querySelector('.p1-score-number').textContent = p1Score;
    document.querySelector('.cpu-score-number').textContent = p2Score;

    if (rounds === 5) {
        if (p1Score > p2Score) {
            document.querySelector('.text2').textContent = 'You won the tournament!';
        } else if (p2Score > p1Score) {
            document.querySelector('.text2').textContent = 'CPU won the tournament!';
        } else {
            document.querySelector('.text2').textContent = 'Tournament was a tie!';
        }

        document.querySelector('.buttons').innerHTML = '<button class="choice-button" id="restart-button" value="restart">Restart</button>';
        document.querySelector('#restart-button').addEventListener('click', () => {
            window.location.reload();
        } );
    } else {
        document.querySelector('.text2').textContent = 'Round ' + rounds + ' of 5.'
    }
}

document.addEventListener('DOMContentLoaded', setup);