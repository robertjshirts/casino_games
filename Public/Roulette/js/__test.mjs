import { Roulette } from './Game.mjs';

const roulette = new Roulette();
roulette.Spin();

let bets = [];

for (let i = 0; i < 36; i++) {
    bets.push(i);
}

console.log(roulette.CalculatePayout(bets, 100));