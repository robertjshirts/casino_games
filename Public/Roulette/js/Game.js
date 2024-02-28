class Roulette {
    constructor() {
        this.wheelNumber = Number(0);
    }

    /**
     * Does roulette spin and returns result
     * @param {Array} bets An array of Integers (whole numbers) that the player is betting on
     * @param {Number} amount An integer (whole number) amount that the player is betting
     * @returns {Boolean} Returns true if the player got a winning number, and false if not.
     */
    SpinWheel(bets, amount) {
        this.wheelNumber = Math.floor(Math.random() * 37);
        let win = this.isWinningNumber(bets);
        this.payout = this.calculatePayout(bets.length, amount);
        return win;
    }
    
    /**
     * Determines whether there is a winning number in the array of bets
     * @param {Array} bets 
     */
    isWinningNumber(bets) {
        for (let bet in bets) {
            if (this.wheelNumber == bet) {
                return true;
            }
        }
        return false;
    }

    /**
     * Just calculates payout. Doesn't check to see if the bet was correct
     * @param {Number} numBets An integer (whole number) that represents how many numbers the player bet on (think bets.length)
     * @param {Number} amount An integer (whole number) amount that the player is betting
     * @returns {Number} The return on the bet
     */
    calculatePayout(numBets, amount) {
        return Math.floor(((36 / numBets) - 1) * amount);
    }
}