var play = document.getElementById("playButton")
var blackJack = document.getElementById("blackJack")
var slots = document.getElementById("slots")
var roulette = document.getElementById("roulette")
var logo = document.getElementById("logo")
var back = document.getElementById("back")

var menu = false 


play.addEventListener("click", async()=>{
    await new Promise(r => setTimeout(r, 200));
    play.style.visibility = 'hidden'
    blackJack.style.visibility = 'visible'    
    slots.style.visibility = 'visible'    
    roulette.style.visibility = 'visible'
    back.style.visibility = "visible"
    logo.style.visibility = "hidden"
    
})



back.addEventListener("click", async()=>{
    await new Promise(r => setTimeout(r, 200));
    play.style.visibility = 'visible'
    blackJack.style.visibility = 'hidden'    
    slots.style.visibility = 'hidden'    
    roulette.style.visibility = 'hidden'
    back.style.visibility = "hidden"
    logo.style.visibility = "visible"
})

