import Card from '/Card.js'

const initGame = ()=>{
    deck = createDeck()
}

const createDeck = ()=>{
    deck = []
    const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "Jack", "Queen", "King", "Ace"]

    for(let suit of suits){
        for(let rank of ranks){
            const card = new Card(suit, rank)
            deck.push(card)
        }
    }
    
    return shuffle(deck)
}

const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    return array
}

const hit = (deck, player)=>{
    const index = Math.random(0, deck.length)
    const card = deck[index]
    player.addToHand(card)
    deck.splice(index, 1)
    return deck
}

const doubleDown = (player)=>{
    player.addBet(player.bet * 2)
    deck = hit(player)
    //check for win immediately after 
}

const checkForWin = (dealer, player)=>{
    
    if(countCards(player.getHand()) > countCards(dealer.getHand())){

    }

}

const countCards = (hand)=>{
    let amount = 0
    for(let card of hand){
        amount += convertCard(card, amount)
    }
    return amount
}

const convertCard = (card, amount)=>{
    let value = card.rank
    try{
        let cardNumber = parseInt(value)
        return cardNumber
    }
    catch{
        if(value.rank = "Ace"){
            //add logic for returning one or 11
            return 1
        }
        return 10
    }
}x