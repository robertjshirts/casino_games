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

    if (currentCash >= (bet + 1)) {
        bet += 1;
        betElement.innerHTML = bet.toString();
    } else {
        alert("You don't have enough cash to make this bet.");
    }
});

document.getElementById('chip10').addEventListener('click', function() {
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

document.getElementById('chip20').addEventListener('click', function() {
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

document.getElementById('chip50').addEventListener('click', function() {
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

document.getElementById('chip100').addEventListener('click', function() {
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

document.getElementById('chip500').addEventListener('click', function() {
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

document.getElementById('chip1000').addEventListener('click', function() {
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

document.getElementById('chip10000').addEventListener('click', function() {
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