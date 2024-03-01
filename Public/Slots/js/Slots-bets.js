//event listener for chip buttons

document.getElementById('chip1').addEventListener('click', function() {

    localStorage.cash = 100;
    
    let betElement = document.getElementById('bet')
    let bet = parseInt(betElement.innerHTML);
    console.log(bet);

    bet +=1;

    betElement.innerHTML = bet.toString();

    console.log(localStorage.cash);


});