class Card {

    constructor(rank, suit, image, backImage){
        this.rank = rank
        this.suit = suit
        this.image = image
        this.backImage = backImage
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

    getBackImage(){
        return this.backImage
    }
}

export default Card;