import Game from './Game.js'
let game

document.getElementById('actionButton').addEventListener("click", ()=>{
    game = new Game(0)
})

document.getElementById('hitbutton').addEventListener("click", ()=>{
    game.hit()
})

document.getElementById('doubleDownButton').addEventListener("click", ()=>{
    game.doubleDown()
})