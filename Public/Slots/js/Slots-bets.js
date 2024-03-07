//event listener for chip buttons

document.getElementById('chip1').addEventListener('click', function() {
    
    let betElement = document.getElementById('bet')
    let bet = parseInt(betElement.innerHTML);
    console.log(bet);

    bet +=1;

    betElement.innerHTML = bet.toString();

    console.log(Number(localStorage.cash));


});

document.getElementById('chip5').addEventListener('click', function() {
    
    let betElement = document.getElementById('bet')
    let bet = parseInt(betElement.innerHTML);
    console.log(bet);

    bet +=5;

    betElement.innerHTML = bet.toString();

    console.log(Number(localStorage.cash));
});

document.getElementById('chip10').addEventListener('click', function() {
    
    let betElement = document.getElementById('bet')
    let bet = parseInt(betElement.innerHTML);
    console.log(bet);

    bet +=10;

    betElement.innerHTML = bet.toString();

    console.log(Number(localStorage.cash));
});

document.getElementById('chip20').addEventListener('click', function() {
    
    let betElement = document.getElementById('bet')
    let bet = parseInt(betElement.innerHTML);
    console.log(bet);

    bet +=20;

    betElement.innerHTML = bet.toString();

    console.log(Number(localStorage.cash));
});

document.getElementById('chip50').addEventListener('click', function() {
    
    let betElement = document.getElementById('bet')
    let bet = parseInt(betElement.innerHTML);
    console.log(bet);

    bet +=50;

    betElement.innerHTML = bet.toString();

    console.log(Number(localStorage.cash));
});

document.getElementById('chip100').addEventListener('click', function() {
    
    let betElement = document.getElementById('bet')
    let bet = parseInt(betElement.innerHTML);
    console.log(bet);

    bet +=100;

    betElement.innerHTML = bet.toString();

    console.log(Number(localStorage.cash));
});

document.getElementById('chip500').addEventListener('click', function() {
    
    let betElement = document.getElementById('bet')
    let bet = parseInt(betElement.innerHTML);
    console.log(bet);

    bet +=500;

    betElement.innerHTML = bet.toString();

    console.log(Number(localStorage.cash));
});

document.getElementById('chip1000').addEventListener('click', function() {
        
        let betElement = document.getElementById('bet')
        let bet = parseInt(betElement.innerHTML);
        console.log(bet);
    
        bet +=1000;
    
        betElement.innerHTML = bet.toString();
    
        console.log(Number(localStorage.cash));
    });

document.getElementById('chip5000').addEventListener('click', function() {  
    let betElement = document.getElementById('bet')
    let bet = parseInt(betElement.innerHTML);
    console.log(bet);

    bet +=5000;

    betElement.innerHTML = bet.toString();

    console.log(Number(localStorage.cash));
});