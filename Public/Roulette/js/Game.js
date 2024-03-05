export class Roulette {
    constructor() {
        this.wheelNumber = Number(0);
        this.wheelColor = 'green';
        this.greenNumbers = [0];
        this.redNumbers = [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3];
        this.blackNumbers = [15, 4, 2, 17, 6, 13, 11, 8, 10, 24, 33, 20, 31, 22, 29, 28, 35, 26];
    }

    /**
     * Does the next roulette spin and stores for payout calculations for each bet
     * @returns {Number} The outcome of the roulette spin
     */
    Spin() {
        this.wheelNumber = Math.floor(Math.random() * 37);

        // Really complicated expression to set wheelColor
        if (this.redNumbers.includes(this.wheelNumber)) {
            this.wheelColor = 'red';
        } else if (this.blackNumbers.includes(this.wheelNumber)) {
            this.wheelColor = 'black';
        } else {
            this.wheelColor = 'green';
        }

        return this.wheelNumber;
    }

    /**
     * Calculates payout for one bet on the roulette board.
     * @param {Array} bets An array of roulette numbers being bet on
     * @param {Number} amount An integer amount being wagered on the roulette bets
     * @returns {Number} The return on the bet
     */
    CalculatePayout(bets, amount) {
        for (let bet of bets) {
            if (this.wheelNumber === bet) {
                return Math.floor(((36 / bets.length) - 1) * amount) + bet;
            }
        }

        // Use Number() bc js and 0's can get fucky
        return Number(0);
    }
}