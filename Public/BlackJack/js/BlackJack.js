import Game from './Game.js'
import Card from './Card.js'
import Player from './Player.js'
import Dealer from './Dealer.js'
let game
let bet = 0

document.getElementById('actionButton').addEventListener("click", (ev)=>{
    console.log("Button Clicked")
    game = new Game(bet)
})

// document.getElementById('hitbutton').addEventListener("click", (ev)=>{
//     ev.preventDefault()
//     game.hit()
// })

// document.getElementById('doubleDownButton').addEventListener("click", (ev)=>{
//     ev.preventDefault()
//     game.doubleDown()
// })
const setOnClick = ()=>{
    let chips = [1, 5, 10, 20, 50, 100, 500, 1000, 5000]
    for (let i = 0; i < chips.length; i++) {
        document.getElementById("chip" + chips[i]).addEventListener("click", ()=>{
            let chipValue = chips[i]
            bet += chipValue
            console.log(bet)
        })
    }
}

setOnClick()