import Card from './Card.js'
import Player from './Player.js'
import Dealer from './Dealer.js'
import Display from './Display.js'

class Game {

    constructor(bet) {
        this.isGameOver = false
        this.gameSplit = false
        this.isSplitBust = false
        this.deck = this.createDeck()
        this.player = new Player(bet)
        this.dealer = new Dealer()
        this.dealCards()
        Display.displayPlayerHand(this.player.getHand())
        Display.displayDealerHand(this.dealer.getHand(), this.isGameOver)
    }

    dealCards = () => {
        this.player.addToHand(this.getCard())
        this.player.addToHand(this.getCard())
        this.isBust(this.player)
        this.isBlackjack(this.player)
        this.dealer.addToHand(this.getCard())
        this.dealer.addToHand(this.getCard())
        this.isBust(this.dealer)
        this.isBlackjack(this.dealer)
    }

    createDeck = () => {
        let deck = []
        const suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"]

        for (let suit of suits) {
            for (let rank of ranks) {
                const card = new Card(rank, suit,
                    '../CasinoAssets/BlackJack/Cards/card' + suit + rank + ".png", '../CasinoAssets/BlackJack/Cards/cardBack_red2.png')
                deck.push(card)
            }
        }

        return this.shuffle(deck)
    }

    shuffle = (array) => {
        let currentIndex = array.length, randomIndex

        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }

        return array
    }

    makePlayerHandPair = () => {
        let card1 = new Card("4", "Diamonds", '../CasinoAssets/BlackJack/Cards/cardDiamonds4.png', '../CasinoAssets/BlackJack/Cards/cardBack_red2.png')
        let card2 = new Card("4", "Hearts", '../CasinoAssets/BlackJack/Cards/cardHearts4.png', '../CasinoAssets/BlackJack/Cards/cardBack_red2.png')
        let hand = [card1, card2]
        this.player.resetHand(hand)
        Display.displayPlayerHand(this.player.getHand())
    }

    split = () => {
        // this.makePlayerHandPair()
        if (this.player.getHand().length === 2 && this.checkForPair()) {
            this.player.setSplitHand([this.player.getHand()[0], this.getCard()])
            this.player.resetHand([this.player.getHand()[1], this.getCard()])
            Display.displayPlayerHand(this.player.getHand())
            Display.displayPlayerSplitHand(this.player.getSplitHand())
            this.gameSplit = true
            return
        }
        alert("You can only split when your first two cards are a pair")
    }

    checkForPair = () => {
        if (this.convertCard(this.player.getHand()[0], 0) === this.convertCard(this.player.getHand()[1], 0)) {
            return true
        }

        return false
    }

    getCard = () => {
        const index = Math.floor(Math.random() * this.deck.length)
        const card = this.deck[index]
        this.deck.splice(index, 1)
        return card
    }

    hit = () => {
        if (this.gameSplit) {
            console.log(this.player.getSplitHand())
            this.player.addToSplitHand(this.getCard())
            console.log(this.countCards(this.player.getSplitHand()))
            Display.displayPlayerSplitHand(this.player.getSplitHand())
            this.isBust(this.player)
            return
        }
        this.player.addToHand(this.getCard())
        Display.displayPlayerHand(this.player.getHand())
        this.isBust(this.player)
    }

    doubleDown = () => {
        if (this.player.getHand().length > 2) {
            alert("You can only double down on your first hit")
            return
        }

        this.player.addBet(this.player.bet * 2)
        this.player.addToHand(this.getCard())
        let bet = this.player.getBet()
        Display.changeBet(bet)
        Display.displayPlayerHand(this.player.getHand())
        this.isBust(this.player)
        this.dealerTurn()
    }

    updateCash = (amount) => {
        let currentCash = parseInt(localStorage.cash) + amount
        localStorage.cash = currentCash
        Display.updateBalance()
    }

    checkForWinSplit = (dealerTotal, bet) => {
        const total = this.countCards(this.player.getSplitHand())
        if (total === 21 && dealerTotal === 21) {
            Display.showOutput(`Split Tie! Bet: ${bet}`);
        } else if (dealerTotal === 21) {
            this.updateCash(-bet);
            Display.showOutput(`Split Dealer Wins! Bet: ${bet}`);
        } else if (total === 21) {
            this.updateCash(bet * 2);
            Display.showOutput(`Split Player Wins! Bet: ${bet}`);
        } else if (total <= 21 && total > dealerTotal) {
            this.updateCash(bet);
            Display.showOutput(`Split Player Wins! Bet: ${bet}`);
        } else if (total <= 21 && dealerTotal > 21) {
            this.updateCash(bet);
            Display.showOutput(`Split Player Wins! Bet: ${bet}`);
        } else if (total <= 21 && dealerTotal > total) {
            this.updateCash(-bet);
            Display.showOutput(`Split Dealer Wins! Bet: ${bet}`);
        } else {
            Display.showOutput(`Split Tie! Bet: ${bet}`);
        }
    }
    
    checkForWin = () => {
        const playerTotal = this.countCards(this.player.getHand());
        const dealerTotal = this.countCards(this.dealer.getHand());
        const bet = this.player.getBet();
    
        if (this.player.getSplitHand() && this.player.getSplitHand().length >= 2 && !this.isSplitBust) {
            this.checkForWinSplit(dealerTotal, bet);
        }
    
        if (playerTotal === 21 && dealerTotal === 21) {
            Display.showOutput(`Tie! Bet: ${bet}`);
            this.gameOver();
        } else if (dealerTotal === 21) {
            this.updateCash(-bet);
            Display.showOutput(`Dealer Wins! Bet: ${bet}`);
            this.gameOver();
        } else if (playerTotal === 21) {
            this.updateCash(bet * 2);
            Display.showOutput(`Player Wins! Bet: ${bet}`);
            this.gameOver();
        } else if (playerTotal <= 21 && playerTotal > dealerTotal) {
            this.updateCash(bet);
            Display.showOutput(`Player Wins! Bet: ${bet}`);
            this.gameOver();
        } else if (dealerTotal <= 21 && dealerTotal > playerTotal) {
            this.updateCash(-bet);
            Display.showOutput(`Dealer Wins! Bet: ${bet}`);
            this.gameOver();
        } else {
            Display.showOutput(`Tie! Bet: ${bet}`);
            this.gameOver();
        }
    
        Display.displayDealerHand(this.dealer.getHand(), this.isGameOver);
    }

    isBust = (person) => {
        if (this.gameSplit) {
            if (this.countCards(person.getSplitHand()) > 21) {
                this.updateCash(-person.getBet())
                Display.showOutput("Split Player Bust");
                this.gameSplit = false
                this.isSplitBust = true
            }
        }
    
        if (this.countCards(person.getHand()) > 21) {
            if (person instanceof Player) {
                this.updateCash(-person.getBet())
                Display.showOutput("Player Bust");
                if (!this.gameSplit || (this.gameSplit && this.isSplitBust)) {
                    this.gameOver();
                }
            } else {
                Display.showOutput("Dealer Busts");
                this.updateCash(this.player.getBet())
                this.gameOver()
            }
        }
    }

    isBlackjack = (person) => {
        if (this.countCards(person.getHand()) === 21) {
            if (person instanceof Player) {
                this.updateCash(this.player.getBet() * 2)
                Display.showOutput("Player has Blackjack");
                this.gameOver()
            } else {
                Display.showOutput("Dealer has Blackjack");
                this.gameOver()
            }
        }
    }

    countCards = (hand) => {
        if (hand === undefined || hand.length === 0) {
            return 0
        }
        hand = this.checkForAce(hand)

        let amount = 0
        for (let i = 0; i < hand.length; i++) {
            let card = hand[i]
            let cardValue = this.convertCard(card, amount)
            amount += cardValue
        }
        return amount
    }

    checkForAce = (hand) => {
        let newHand = []
        let aceHand = []
        for (let i = 0; i < hand.length; i++) {
            if (hand[i].rank === "A") {
                aceHand.push(hand[i])
                continue
            }
            newHand.push(hand[i])
        }

        if (aceHand.length > 0) {
            newHand.push(...aceHand)
        }

        return newHand
    }

    convertCard = (card, amount) => {
        let value = card.rank;
        if (value === "A") {
            if (amount + 11 > 21) {
                return 1
            }
            return 11
        } else if (['J', 'Q', 'K'].includes(value)) {
            return 10;
        } else {
            return parseInt(value)
        }
    }

    dealerTurn = () => {
        if (this.gameSplit) {
            this.gameSplit = false
            return
        }

        let isDealerDone = false
        while (!isDealerDone && !this.isGameOver) {
            if (this.countCards(this.dealer.getHand()) < 17) {
                this.dealer.addToHand(this.getCard())
                Display.displayDealerHand(this.dealer.getHand(), this.isGameOver)
                this.isBust(this.dealer)
            } else if (this.countCards(this.dealer.getHand()) >= 17) {
                isDealerDone = true
            }
        }

        this.checkForWin()
    }

    gameOver = () => {
        this.isGameOver = true
        Display.resetDisplay()
    }
}

export default Game
