class Dealer {

    constructor(){
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