class Player {
    Player(){
        this.hand = []
        this.bet = 0
    }

    addToHand(card){
        this.hand.push(card)
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
}

export default Player