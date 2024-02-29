let bets = [];

import { Roulette } from './Game.js';

const roulette = new Roulette();

const actionButton = document.getElementById('actionButton');
const outcomeElement = document.getElementById('outcome');

actionButton.addEventListener('click', (ev) => {
    let outcome = roulette.Spin();
    updateOutcomeElement(outcome);
    let tabulatedBets = tabulateBets();
    for (let bet in tabulatedBets) {
        localStorage.cash += roulette.CalculatePayout(bet);
    }
});

function updateOutcomeElement(outcome) {
    outcomeElement.innerHTML = outcome;
    outcomeElement.classList.remove('red', 'green', 'black');
    outcomeElement.classList.add(roulette.wheelColor);
}

function tabulateBets() {
    for (let bet of bets) {
        //TODO: This
    }
}