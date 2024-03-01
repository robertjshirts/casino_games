class Player {
    Player(bet){
        this.hand = []
        this.bet = bet
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