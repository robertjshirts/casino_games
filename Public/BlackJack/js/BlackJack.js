import Game from './Game.js'
let game

document.getElementById('actionButton').addEventListener("click", ()=>{
    event.preventDefault()
    game = new Game(0)
})

document.getElementById('hitbutton').addEventListener("click", ()=>{
    event.preventDefault()
    game.hit()
})

document.getElementById('doubleDownButton').addEventListener("click", ()=>{
    event.preventDefault()
    game.doubleDown()
})