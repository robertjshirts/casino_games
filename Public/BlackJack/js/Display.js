import Game from './Game.js'
import Card from './Card.js'
import Player from './Player.js'
import Dealer from './Dealer.js'

class Display{
    static displayPlayerHand = (hand)=>{
        console.log(hand)
        let handContainer = document.getElementById("handContainer")
        for(let i = 0; i < hand.length; i++){
            let cardDiv = document.createElement('div')
            let cardImg = document.createElement('img')
            cardImg.src = hand[i].getImage()
            cardDiv.appendChild(cardImg)
            handContainer.appendChild(cardDiv)
        }
    }

    static displayDealerHand

    static displayWin = (message)=>{
        //dusplay you + type + 
    }
}

export default Display