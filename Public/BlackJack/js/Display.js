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
            handContainer.appendChild(cardDiv)
        }
    }

    static displayDealerHand = (hand)=>{
        let handContainer = document.getElementById("dealerContainer")
        handContainer.innerHTML = ""
        for(let i = 0; i < hand.length; i++){
            if(i = 0){
                let cardDiv = document.createElement('div')
                let cardImg = document.createElement('img')
                cardImg.src = hand[i].getBackImage()
                cardDiv.appendChild(cardImg)
                handContainer.appendChild(cardDiv)
            }
            let cardDiv = document.createElement('div')
            let cardImg = document.createElement('img')
            cardImg.src = hand[i].getImage()
            cardDiv.appendChild(cardImg)
            handContainer.appendChild(cardDiv)
        }
    }

    static displayWin = (message)=>{
        alert()
    }
}

export default Display