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

    static displayDealerHand = (hand, gameOver)=>{
        let dealerContainer = document.getElementById("dealerContainer")
        dealerContainer.innerHTML = ""
        for(let i = 0; i < hand.length; i++){

            if(i == 0 && !gameOver){
                let cardDiv = document.createElement('div')
                let cardImg = document.createElement('img')
                cardImg.src = hand[i].getBackImage()
                cardDiv.appendChild(cardImg)
                cardDiv.id = 'dealerCard' + (i + 1);
                dealerContainer.appendChild(cardDiv)
                continue
            }

            let cardDiv = document.createElement('div')
            let cardImg = document.createElement('img')
            cardImg.src = hand[i].getImage()
            cardDiv.appendChild(cardImg)
            cardDiv.id = 'dealerCard' + (i + 1);
            dealerContainer.appendChild(cardDiv)
        }
    }

    static displayPlayerSplitHand = (hand)=>{
        let handContainer = document.getElementById("splitContainer")
        handContainer.innerHTML = ""
        for(let i = 0; i < hand.length; i++){
            let cardDiv = document.createElement('div')
            let cardImg = document.createElement('img')
            cardImg.src = hand[i].getImage()
            cardDiv.appendChild(cardImg)
            cardDiv.id = 'splitCard' + (i + 1);
            handContainer.appendChild(cardDiv)
        }
    }

    static changeBet = (bet)=>{
        document.getElementById("betBank").textContent = "BET:" + bet
    }

    static resetDisplay = ()=>{
        document.getElementById("betBank").textContent = "BET:0";
        document.getElementById('actionButton').style.visibility = "visible"
        document.getElementById('splitBtn').style.visibility = "hidden"
        document.getElementById("doubleDownBtn").style.visibility = "hidden"
        document.getElementById("hitBtn").style.visibility = "hidden"
        document.getElementById("standBtn").style.visibility = "hidden"
        document.getElementById("splitContainer").innerHTML = ""
    }

}

export default Display