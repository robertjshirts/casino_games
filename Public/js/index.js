var play = document.getElementById("playButton")
var blackJack = document.getElementById("blackJack")
var slots = document.getElementById("slots")
var roulette = document.getElementById("roulette")
var logo = document.getElementById("logo")
var back = document.getElementById("back")
var bank = document.getElementById("actionButton")
var bankMenu = document.getElementById("bankMenu")
var amount = document.getElementById('amount')
var cashBal = document.getElementById("cashBalance")
var bankBal = document.getElementById("bankBalance")
var withdraw = document.getElementById('withdraw')
var deposit = document.getElementById('deposit')


deposit.addEventListener('click', () => {
    let cash = Number(cashBal.innerHTML.substring(7))
    console.log(cashBal.innerHTML.substring(7))
    if (cash >= Number(amount.value)) {
        localStorage.bank = Number(localStorage.bank) + Number(amount.value)
        localStorage.cash = Number(localStorage.cash) - Number(amount.value)
    }
})

withdraw.addEventListener('click', () => {
    localStorage.bank = Number(localStorage.bank) - Number(amount.value)
    localStorage.cash = Number(localStorage.cash) + Number(amount.value)
    console.log(localStorage.cash)
    console.log(localStorage.bank)
    console.log(amount.value)
})


var t = setInterval(function () {
    document.getElementById("bankBalance").innerHTML = "Bank: $" + localStorage.bank;
}, 200);
var tt = setInterval(function () {
    document.getElementById("cashBalance").innerHTML = "Cash: $" + localStorage.cash;
}, 200);


document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.notFirstTime) {
        localStorage.bank = 9500
        localStorage.cash = 500
        if (localStorage.cash == undefined) {
            localStorage.cash = 0;
        }
        localStorage.notFirstTime = true
    }
    console.log(localStorage.notFirstTime)
})


play.addEventListener("click", async () => {
    await new Promise(r => setTimeout(r, 200));
    play.style.visibility = 'hidden'
    blackJack.style.visibility = 'visible'
    slots.style.visibility = 'visible'
    roulette.style.visibility = 'visible'
    back.style.visibility = "visible"
    logo.style.visibility = "hidden"

})

bank.addEventListener("click", async () => {
    await new Promise(r => setTimeout(r, 200));
    bankMenu.style.visibility = 'visible'
    play.style.visibility = 'hidden'
    blackJack.style.visibility = 'hidden'
    slots.style.visibility = 'hidden'
    roulette.style.visibility = 'hidden'
    back.style.visibility = "visible"
    logo.style.visibility = "hidden"
})


back.addEventListener("click", async () => {
    await new Promise(r => setTimeout(r, 200));
    play.style.visibility = 'visible'
    blackJack.style.visibility = 'hidden'
    slots.style.visibility = 'hidden'
    roulette.style.visibility = 'hidden'
    back.style.visibility = "hidden"
    logo.style.visibility = "visible"
    bankMenu.style.visibility = "hidden"
})



