import Card from './Card.js'
import Player from './Player.js'
import Dealer from './Dealer.js'

class Game{

    Game = (bet)=>{
        this.deck = createDeck()
        this.player = new Player(bet)
        this.dealer = new Dealer()
        this.dealCards()
    }

    dealCards = ()=>{
        this.player.addToHand(this.hit())
        this.player.addToHand(this.hit()) 
        this.dealer.addToHand(this,hit())
        this.dealer.addToHand(this.hit())
        this.checkForWin()
    }

    createDeck = ()=>{
        deck = []
        const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"]

        for(let suit of suits){
            for(let rank of ranks){
                const card = new Card(suit, rank, './Public/CasinoAssets/BlackJack/Cards/card' + suit + rank + ".png")
                deck.push(card)
            }
        }
        
        return shuffle(deck)
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
        const index = Math.random(0, this.deck.length)
        const card = this.deck[index]
        this.player.addToHand(card)
        this.deck.splice(index, 1)
    }

    doubleDown = ()=>{
        this.player.addBet(this.player.bet * 2)
        this.deck = hit(this/player)
        //check for win immediately after 
    }

    checkForWin = () => {
        let playerTotal = countCards(this.player.getHand())
        let dealerTotal = countCards(this.dealer.getHand())
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
        for(let card of hand){
            amount += convertCard(card, amount)
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