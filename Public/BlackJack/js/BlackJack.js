import Game from './Game.js'
import Card from './Card.js'
import Player from './Player.js'
import Dealer from './Dealer.js'
let game
let bet = 0
let balance = 0

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("balanceContainer").textContent = "BALANCE:" + localStorage.cash
    balance = localStorage.cash
})

document.getElementById('actionButton').addEventListener("click", ()=>{
    isBetCorrect()
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
    game.doubleDown()
})

document.getElementById('splitBtn').addEventListener("click", ()=>{
    game.split()
})

document.getElementById('back').addEventListener("click", () => {
    window.location.href = "http://localhost:8080"
})  

document.getElementById('standBtn').addEventListener("click", ()=>{
    game.dealerTurn()
})

document.getElementById('rulesBtn').addEventListener("click", () => {
    document.getElementById('rulesContainer').style.visibility = 'visible'
    document.getElementById('closeOut').style.visibility = 'visible'
})

document.getElementById('closeOut').addEventListener("click", () => {
    document.getElementById('rulesContainer').style.visibility = 'hidden'
    document.getElementById('closeOut').style.visibility = 'hidden'
})

const setOnClick = ()=>{
    let chips = [1, 5, 10, 20, 50, 100, 500, 1000, 5000]
    for (let i = 0; i < chips.length; i++) {
        document.getElementById("chip" + chips[i]).addEventListener("click", ()=>{
            isBetCorrect()
            let chipValue = chips[i]
            bet += chipValue
            document.getElementById("betBank").textContent = "BET:" + bet
        })
    }
}

const isBetCorrect = ()=>{
    if(document.getElementById("betBank").textContent.split(':')[1] != bet){
        bet = parseInt(document.getElementById("betBank").textContent.split(':')[1])
    }
}

setOnClick()