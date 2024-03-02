import Game from './Game.js'
import Card from './Card.js'
import Player from './Player.js'
import Dealer from './Dealer.js'
let game
let bet = 0

document.getElementById('actionButton').addEventListener("click", (ev)=>{
    console.log("Button Clicked")
    if(bet == 0){
        alert("Must have a bet")
    }
    else{
        game = new Game(bet)
        document.getElementById('actionButton').style.visibility = "hidden"
        document.getElementById('splitBtn').style.visibility = "visible"
        document.getElementById("doubleDownBtn").style.visibility = "visible"
        document.getElementById("hitBtn").style.visibility = "visible"
        document.getElementById("standBtn").style.visibility = "visible"
    }
})

document.getElementById('hitBtn').addEventListener("click", ()=>{
    game.hit()
})

document.getElementById('doubleDownBtn').addEventListener("click", ()=>{
    bet = game.doubleDown()
    document.getElementById("betBank").textContent = "BET:" + bet
})

document.getElementById('splitBtn').addEventListener("click", ()=>{
})

document.getElementById('back').addEventListener("click", ()=>{
    window.history.back()
})

const setOnClick = ()=>{
    let chips = [1, 5, 10, 20, 50, 100, 500, 1000, 5000]
    for (let i = 0; i < chips.length; i++) {
        document.getElementById("chip" + chips[i]).addEventListener("click", ()=>{
            let chipValue = chips[i]
            bet += chipValue
            console.log(bet)
            document.getElementById("betBank").textContent = "BET:" + bet
        })
    }
}

setOnClick()