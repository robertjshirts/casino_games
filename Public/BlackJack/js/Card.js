class Card {

    constructor(rank, suit, image){
        this.rank = rank
        this.suit = suit
        this.image = image
    }

    getRank(){
        return this.rank
    }

    getSuit(){
        return this.suit
    }

    getImage(){
        return this.image
    }
}

export default Card;