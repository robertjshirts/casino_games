import Card from './Card.js'
import Player from './Player.js'
import Dealer from './Dealer.js'
import Dispaly from './Display.js'

class Game{

    constructor(bet){
        this.deck = this.createDeck()
        this.player = new Player(bet)
        this.dealer = new Dealer()
        this.dealCards()
        console.log(this.player.getHand())
        Dispaly.displayPlayerHand(this.player.getHand())
        // Display.displayDealerHand(this.dealer.getHand)
    }

    dealCards = ()=>{
        this.player.addToHand(this.hit())
        this.player.addToHand(this.hit()) 
        this.dealer.addToHand(this.hit())
        this.dealer.addToHand(this.hit())
        this.checkForWin()
    }

    createDeck = ()=>{
        let deck = []
        const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"]

        for(let suit of suits){
            for(let rank of ranks){
                const card = new Card(suit, rank, '../CasinoAssets/BlackJack/Cards/card' + suit + rank + ".png")
                deck.push(card)
            }
        }

        return this.shuffle(deck)
    }

    shuffle = (array) => {
        let currentIndex = array.length,  randomIndex

        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }

        return array
    }

    hit = ()=>{
        const index = Math.floor(Math.random() * this.deck.length)
        const card = this.deck[index]
        this.deck.splice(index, 1)
        return card
    }

    doubleDown = ()=>{
        this.player.addBet(this.player.bet * 2)
        this.deck = hit(this/player)
        //check for win immediately after 
    }

    checkForWin = () => {
        let playerTotal = this.countCards(this.player.getHand())
        let dealerTotal = this.countCards(this.dealer.getHand())
        let bet = this.player.getBet()
    
        if (playerTotal > 21) {
            localStorage.setItem('cash', parseInt(localStorage.getItem('cash')) - bet)
            return "Player Busts"
        } else if (dealerTotal > 21) {
            localStorage.setItem('cash', parseInt(localStorage.getItem('cash')) + bet)
            return "Dealer Busts"
        } else if (playerTotal === 21 && dealerTotal === 21) {
            return "Tie"
        } else if (dealerTotal === 21) {
            localStorage.setItem('cash', parseInt(localStorage.getItem('cash')) - bet)
            return "Dealer Wins"
        } else if (playerTotal === 21) {
            localStorage.setItem('cash', parseInt(localStorage.getItem('cash')) + (bet * 2))
            return "Player Wins"
        } else if (playerTotal > dealerTotal) {
            localStorage.setItem('cash', parseInt(localStorage.getItem('cash')) + bet)
            return "Player Wins"
        } else if (dealerTotal > playerTotal) {
            localStorage.setItem('cash', parseInt(localStorage.getItem('cash')) - bet)
            return "Dealer Wins"
        } else {
            return "Tie"
        }
    }

    countCards = (hand)=>{
        let amount = 0
        for(let i = 0; i < hand.length; i++){
            amount += this.convertCard(hand[i])
        }
        return amount
    }

    convertCard = (card) => {
        let value = card.rank;
        if (value === "A") {
            return 11
        } else if (['J', 'Q', 'K'].includes(value)) {
            return 10;
        } else {
            return parseInt(value)
        }
    }   
}

export default Game