class Dealer {

    constructor(){
        this.hand = []
        this.container = "dealerContainer"
    }

    addToHand(card){
        this.hand.push(card)
    }

    getHand(){
        return this.hand
    }
}

export default Dealer