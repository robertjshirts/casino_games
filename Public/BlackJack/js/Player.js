class Player {
    constructor(bet){
        this.hand = []
        this.splitHand = []
        this.bet = bet
        this.handContainer = "handContainer"
        this.splitContainer = "splitContainer"
    }

    addToHand(card){
        this.hand.push(card)
    }

    resetHand(hand){
        this.hand = hand
    }

    addBet(bet){
        this.bet = bet
    }

    getHand(){
        return this.hand
    }

    getBet(){
        return this.bet
    }

    setSplitHand(hand){
        this.splitHand = hand
    }

    addToSplitHand(card){
        this.splitHand.push(card)
    }

    getSplitHand(){
        return this.splitHand
    }
}

export default Player