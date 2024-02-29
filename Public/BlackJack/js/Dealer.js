class Dealer {

    Dealer(){
        this.hand = []
    }

    addToHand(card){
        this.hand.push(card)
    }

    getHand(){
        return this.hand
    }
}

export default Dealer