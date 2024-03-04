import Game from './Game.js'
import Card from './Card.js'
import Player from './Player.js'
import Dealer from './Dealer.js'

class Display{
    static displayPlayerHand = (hand)=>{
        let handContainer = document.getElementById("handContainer")
        handContainer.innerHTML = ""
        for(let i = 0; i < hand.length; i++){
            let cardDiv = document.createElement('div')
            let cardImg = document.createElement('img')
            cardImg.src = hand[i].getImage()
            cardDiv.appendChild(cardImg)
            cardDiv.id = 'playerCard' + (i + 1);
            handContainer.appendChild(cardDiv)
        }
    }

    static displayDealerHand = (hand)=>{
        let dealerContainer = document.getElementById("dealerContainer")
        dealerContainer.innerHTML = ""
        for(let i = 0; i < hand.length; i++){
            let cardDiv = document.createElement('div')
            let cardImg = document.createElement('img')
            cardImg.src = hand[i].getImage()
            cardDiv.appendChild(cardImg)
            cardDiv.id = 'dealerCard' + (i + 1);
            dealerContainer.appendChild(cardDiv)
        }
    }

    static displayDeck = (hand)=>{
        let deckContainer = document.getElementById("deckContainer")
        deckContainer.innerHTML = ""
        for(let i = 0; i < hand.length; i++){
            let cardDiv = document.createElement('div')
            let cardImg = document.createElement('img')
            cardImg.src = hand[i].getImage()
            cardDiv.appendChild(cardImg)
            cardDiv.id = 'deckCard' + (i + 1);
            deckContainer.appendChild(cardDiv)
        }
    }

        // static displayDeck = (hand)=>{
    //     let deckContainer = document.getElementById("deckContainer")
    //     deckContainer.innerHTML = ""
    //     for(let i = 0; i < hand.length; i++){
    //         if(i == 0){
    //             let cardDiv = document.createElement('div')
    //             let cardImg = document.createElement('img')
    //             cardImg.src = hand[i].getBackImage()
    //             cardDiv.appendChild(cardImg)
    //             cardDiv.id = 'deckCard' + (i + 1);
    //             deckContainer.appendChild(cardDiv)
    //             continue
    //         }
    //         let cardDiv = document.createElement('div')
    //         let cardImg = document.createElement('img')
    //         cardImg.src = hand[i].getImage()
    //         cardDiv.appendChild(cardImg)
    //         cardDiv.id = 'deckCard' + (i + 1);
    //         deckContainer.appendChild(cardDiv)
    //     }
    // }

    static displayWin = (message)=>{
        alert(message)
    }
}

export default Display