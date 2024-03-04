import Card from './Card.js'
import Player from './Player.js'
import Dealer from './Dealer.js'
import Display from './Display.js'

class Game{

    constructor(bet){
        this.isGameOver = false
        this.deck = this.createDeck()
        this.player = new Player(bet)
        this.dealer = new Dealer()
        this.dealCards()
        console.log(this.player.getHand())
        Display.displayPlayerHand(this.player.getHand())
        Display.displayDealerHand(this.dealer.getHand(), this.isGameOver)
    }

    dealCards = ()=>{
        this.player.addToHand(this.getCard())
        this.player.addToHand(this.getCard()) 
        this.isBust(this.player)
        this.dealer.addToHand(this.getCard())
        this.dealer.addToHand(this.getCard())
        this.isBust(this.dealer)
    }

    createDeck = ()=>{
        let deck = []
        const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"]

        for(let suit of suits){
            for(let rank of ranks){
                const card = new Card(rank, suit, '../CasinoAssets/BlackJack/Cards/card' + suit + rank + ".png", '../CasinoAssets/BlackJack/Cards/cardBack_red2.png')
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

    getCard = ()=>{
        const index = Math.floor(Math.random() * this.deck.length)
        const card = this.deck[index]
        this.deck.splice(index, 1)
        return card
    }

    hit = ()=>{
        this.player.addToHand(this.getCard())
        Display.displayPlayerHand(this.player.getHand())
        this.isBust(this.player)
    }

    doubleDown = ()=>{
        this.player.addBet(this.player.bet * 2)
        this.player.addToHand(this.getCard())
        Display.changeBet(this.player.getBet())
        Display.displayPlayerHand(this.player.getHand())
        this.isBust(this.player)
        this.dealerTurn()
    }

    updateCash = (amount) => {
        let currentCash = parseInt(localStorage.getItem('cash'))
        localStorage.setItem('cash', currentCash + amount)
    }
    
    checkForWin = () => {
        const playerTotal = this.countCards(this.player.getHand())
        const dealerTotal = this.countCards(this.dealer.getHand())
        const bet = this.player.getBet()
    
        if (playerTotal === 21 && dealerTotal === 21) {
            alert("Tie")
            this.gameOver()
        } else if (dealerTotal === 21) {
            this.updateCash(-bet)
            alert("Dealer Wins")
            this.gameOver()
        } else if (playerTotal === 21) {
            this.updateCash(bet * 2)
            alert("Player Wins")           
            this.gameOver()
        } else if (playerTotal <= 21 && playerTotal > dealerTotal) {
            this.updateCash(bet)
            alert("Player Wins")
            this.gameOver()
        } else if (dealerTotal <= 21 && dealerTotal > playerTotal) {
            this.updateCash(-bet)
            alert("Dealer Wins")
            this.gameOver()
        } else {
            alert("Tie")
            this.gameOver()
        }

        Display.displayDealerHand(this.dealer.getHand(), this.isGameOver)
    }

    isBust = (person) =>{
        if(this.countCards(person.getHand()) > 21){
            if(person instanceof Player){
                this.updateCash(-person.getBet())
                alert("Player Bust")
                this.gameOver()
                return
            }
            alert("Dealer Busts")
            this.updateCash(this.player.getBet)
            this.gameOver()
        }
    }

    isBlackjack = (person)=>{
        if(this.countCards(this.person.getHand()) == 21){
            if(person instanceof Player){
                this.updateCash(bet * 2)
                alert("Player has Blackjack")
                this.gameOver()
            }
            alert("Dealer has Blackjack")
            this.gameOver()
        }
    }

    countCards = (hand)=>{
        if(hand == undefined || hand.length == 0){
            return 0
        }

        let amount = 0
        for(let i = 0; i < hand.length; i++){
            let card = hand[i]
            let cardValue = this.convertCard(card)
            amount += cardValue
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

    dealerTurn = ()=>{

        let isDealerDone = false
        while(!isDealerDone && !this.isGameOver){
            if(this.countCards(this.dealer.getHand()) < 17){
                this.dealer.addToHand(this.getCard())
                Display.displayDealerHand(this.dealer.getHand(), this.isGameOver)
                this.isBust(this.dealer)
            }
            else if(this.countCards(this.dealer.getHand()) >= 17){
                isDealerDone = true
            }
        } 

        this.checkForWin()
    }

    gameOver = ()=>{
        console.log(this.countCards(this.dealer.getHand()))
        this.isGameOver = true
        Display.resetDisplay()
    }
}

export default Game