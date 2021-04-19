/*
    rps.js
    Rock Paper Scissors
    Author: Brendan Gasparin
    Date: 2021-04-20
    JavaScript Rock Paper Scissors game written while studying The Odin Project.
*/

// Play a set of five rounds of Rock Paper Scissors.
function game() {
    console.log("###################");
    console.log("ROCK PAPER SCISSORS");
    console.log("###################");

    let p1Score = 0;    // player score
    let p2Score = 0;    // computer score

    alert('Play this game with your JavaScript console open.');

    // Play a round of Rock Paper Scissors.
    for (let i = 0; i < 5; i++)
    {
        console.log("3...2...1...");
        let playerChoice;
        while ((playerChoice != 'rock' && playerChoice != 'paper' && playerChoice != 'scissors')) {
            playerChoice = prompt('Enter rock, paper, or scissors:');
            if (playerChoice !== null) playerChoice = playerChoice.toLowerCase();
        }
        let computerChoice = computerPlay();
        let winString = getResults(playerChoice, computerChoice);
        let winnerSubstring = winString.slice(0, 7);
        if (winnerSubstring == 'You win') p1Score++;
        else if (winnerSubstring == 'You los') p2Score++;
        console.log(winString);
    }

    // Print final output.
    console.log('-----------');
    console.log('FINAL SCORE');
    console.log('-----------');
    console.log('Out of 5 games:');
    console.log('Player score: ' + p1Score);
    console.log('CPU score: ' + p2Score);
    if (p1Score > p2Score) console.log('You win!');
    else if (p2Score > p1Score) console.log('You lose!');
    else console.log('You tie!');
    console.log('Reload page in browser to play again.')
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

document.addEventListener('DOMContentLoaded', game);