import Game from './Game.js'
let game
let bet

document.getElementById('actionButton').addEventListener("click", ()=>{
    ev.preventDefault()
    game = new Game(bet)
})

document.getElementById('hitbutton').addEventListener("click", (ev)=>{
    ev.preventDefault()
    game.hit()
})

document.getElementById('doubleDownButton').addEventListener("click", (ev)=>{
    ev.preventDefault()
    game.doubleDown()
})

document.getElementById('chip').addEventListener("click", (ev)=>{
    ev.target.preventDefault()
    const button = ev.target
    for(buttonClass in button.classList){
        try{
            let buttonValue = parseInt(buttonClass)
            bet += buttonValue
        }
        catch(err){
            continue
        }
    }
})