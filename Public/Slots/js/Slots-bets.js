//event listener for chip buttons

document.getElementById('chip1').addEventListener('click', function() {
    let betElement = document.getElementById('bet')
    let bet = parseInt(betElement.innerHTML);
    let currentCash = parseInt(localStorage.cash);

    if (currentCash >= (bet + 1)) {
        bet += 1;
        betElement.innerHTML = bet.toString();
    } else {
        alert("You don't have enough cash to make this bet.");
    }
});

document.getElementById('chip5').addEventListener('click', function() {
    let betElement = document.getElementById('bet')
    let bet = parseInt(betElement.innerHTML);
    let currentCash = parseInt(localStorage.cash);

    if (currentCash >= (bet + 5)) {
        bet += 5;
        betElement.innerHTML = bet.toString();
    } else {
        alert("You don't have enough cash to make this bet.");
    }
});

document.getElementById('chip10').addEventListener('click', function() {
    let betElement = document.getElementById('bet')
    let bet = parseInt(betElement.innerHTML);
    let currentCash = parseInt(localStorage.cash);

    if (currentCash >= (bet + 10)) {
        bet += 10;
        betElement.innerHTML = bet.toString();
    } else {
        alert("You don't have enough cash to make this bet.");
    }
});

document.getElementById('chip20').addEventListener('click', function() {
    let betElement = document.getElementById('bet')
    let bet = parseInt(betElement.innerHTML);
    let currentCash = parseInt(localStorage.cash);

    if (currentCash >= (bet + 20)) {
        bet += 20;
        betElement.innerHTML = bet.toString();
    } else {
        alert("You don't have enough cash to make this bet.");
    }
});

document.getElementById('chip50').addEventListener('click', function() {
    let betElement = document.getElementById('bet')
    let bet = parseInt(betElement.innerHTML);
    let currentCash = parseInt(localStorage.cash);

    if (currentCash >= (bet + 50)) {
        bet += 50;
        betElement.innerHTML = bet.toString();
    } else {
        alert("You don't have enough cash to make this bet.");
    }
});

document.getElementById('chip100').addEventListener('click', function() {
    let betElement = document.getElementById('bet')
    let bet = parseInt(betElement.innerHTML);
    let currentCash = parseInt(localStorage.cash);

    if (currentCash >= (bet + 100)) {
        bet += 100;
        betElement.innerHTML = bet.toString();
    } else {
        alert("You don't have enough cash to make this bet.");
    }
});

document.getElementById('chip500').addEventListener('click', function() {
    let betElement = document.getElementById('bet')
    let bet = parseInt(betElement.innerHTML);
    let currentCash = parseInt(localStorage.cash);

    if (currentCash >= (bet + 500)) {
        bet += 500;
        betElement.innerHTML = bet.toString();
    } else {
        alert("You don't have enough cash to make this bet.");
    }
});

document.getElementById('chip1000').addEventListener('click', function() {
    let betElement = document.getElementById('bet')
    let bet = parseInt(betElement.innerHTML);
    let currentCash = parseInt(localStorage.cash);

    if (currentCash >= (bet + 1000)) {
        bet += 1000;
        betElement.innerHTML = bet.toString();
    } else {
        alert("You don't have enough cash to make this bet.");
    }
});

document.getElementById('chip5000').addEventListener('click', function() {
    let betElement = document.getElementById('bet')
    let bet = parseInt(betElement.innerHTML);
    let currentCash = parseInt(localStorage.cash);

    if (currentCash >= (bet + 5000)) {
        bet += 5000;
        betElement.innerHTML = bet.toString();
    } else {
        alert("You don't have enough cash to make this bet.");
    }
});