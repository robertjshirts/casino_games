let bets = []
let owed = 0

var cursorX = 0
var cursorY = 0

const actionButton = document.getElementById('actionButton');
const outcomeElement = document.getElementById('outcome');

document.getElementById('back').addEventListener('click', () => {
    window.location.href = 'http://localhost:8080'
})

function resetBoard(){
    const elements = document.querySelectorAll('.clone');
    bets = []
    owed = 0
    elements.forEach(element => {
        element.remove()
    });
}

document.getElementById('reset').addEventListener('click', () => {
    resetBoard()
})

var t = setInterval(function () {
    document.getElementById("cash").innerHTML = "Cash: $" + localStorage.cash;
}, 200);

actionButton.addEventListener('click', () => {
    var element = document.getElementById('wheel');
    element.classList.add('spinning');
    console.log('working')
    setTimeout(function () {
        element.classList.remove('spinning');
    }, 4000); // 3000 milliseconds = 3 seconds
})

var board = document.getElementById('boardHitBox');
const firstDozenHitBox = document.getElementById("firstDozen");
const secondDozenHitBox = document.getElementById("secondDozen");
const thirdDozenHitBox = document.getElementById("thirdDozen");
const bottomRowHitBox = document.getElementById("bottomRow");
const middleRowHitBox = document.getElementById("middleRow");
const topRowHitBox = document.getElementById("topRow");
const bottomHalfHitBox = document.getElementById("bottomHalf");
const upperHalfHitBox = document.getElementById("upperHalf");
const evenHitBox = document.getElementById("even");
const oddHitBox = document.getElementById("odd");
const redHitBox = document.getElementById("red");
const blackHitBox = document.getElementById("black");
const zeroHitBox = document.getElementById("zero");



const hitBoxes = [firstDozenHitBox, secondDozenHitBox, thirdDozenHitBox, bottomRowHitBox, middleRowHitBox, topRowHitBox, bottomHalfHitBox, upperHalfHitBox, evenHitBox, oddHitBox, redHitBox, blackHitBox, zeroHitBox]


var boardHitBox = board.getBoundingClientRect();
document.addEventListener('mousemove', function (e) {
    cursorX = e.clientX;
    cursorY = e.clientY;
});

document.addEventListener('mousedown', function (e) {
    if (e.target.classList.contains('originalElement')) {
        var clone = e.target.cloneNode(true);
        clone.style.position = 'absolute';
        clone.classList.remove('originalElement')
        clone.classList.add('clone')
        clone.style.left = e.pageX + 'px';
        clone.style.top = e.pageY + 'px';
        document.body.appendChild(clone);

        var move = function (e) {
            clone.style.left = e.pageX + 'px';
            clone.style.top = e.pageY + 'px';
        };

        document.addEventListener('mousemove', move);

        clone.addEventListener('mouseup', function () {
            let amount = 0;
            var classesToCheck = [
                'chip1',
                'chip5',
                'chip10',
                'chip20',
                'chip50',
                'chip100',
                'chip500',
                'chip1000',
                'chip5000'
            ];
            let chipClass = null

            for (var i = 0; i < classesToCheck.length; i++) {
                if (clone.classList.contains(classesToCheck[i])) {
                    chipClass = classesToCheck[i];
                    break;
                }
            }

            switch (chipClass) {
                case 'chip1':
                    amount = 1
                    break;
                case 'chip5':
                    amount = 5
                    break;
                case 'chip10':
                    amount = 10
                    break;
                case 'chip20':
                    amount = 20
                    break;
                case 'chip50':
                    amount = 50
                    break;
                case 'chip100':
                    amount = 100
                    break;
                case 'chip500':
                    amount = 500
                    break;
                case 'chip1000':
                    amount = 1000
                    break;
                case 'chip5000':
                    amount = 5000
                    break;
            }

            if (amount > Number(localStorage.cash) || (amount > (Number(localStorage.cash))+owed)) {
                clone.remove()
            }else{
                owed -= amount
            }

            document.removeEventListener('mousemove', move);
            let x = cursorX + 0
            let y = cursorY + 0
            if (x >= boardHitBox.left && x <= boardHitBox.right && y >= boardHitBox.top && y <= boardHitBox.bottom) {

                x = cursorX - boardHitBox.left
                y = cursorY - boardHitBox.top
                let snapX = (Math.floor(x / 40) * 41) + 13;
                let snapY = (Math.floor(y / 55) * 57) + 15
                clone.style.left = snapX + boardHitBox.left
                clone.style.top = snapY + boardHitBox.top

                addBasicBet(x, y, clone, amount)

            } else {
                addComplexBet(x, y, clone, amount)
            }

        });


    }
});

//24 columns
//6 rows        

function addComplexBet(x, y, element, amount) {
    let location = null
    hitBoxes.every((e) => {
        let box = e.getBoundingClientRect()
        if (x >= box.left && x <= box.right && y >= box.top && y <= box.bottom) {
            location = e.id;
            return false;
        }
        return true;
    })
    if (location == null) {
        element.remove()
        return;
    } else {
        bets.push({
            'type': 'complex',
            'bet': location,
            'amount': amount

        })
    }

    console.log(bets)
}

function addBasicBet(x, y, element, amount) {

    let col = Math.floor((x / 40))
    if (col > 23 || col < 0) {
        element.remove()
        return;
    }

    let row = Math.floor(y / 55)
    if (row > 5 || row < 0) {
        element.remove()
        return;
    }

    let bet = {
        'type': "basic",
        'row': row,
        'col': col,
        'amount': amount
    }
    bets.push(bet)
    console.log(bets)

}


//{
//     'type':basic
//     'col':3,
//     'row':2,
//     'amount':5
// }

// special Enum
// firstDozen,
// secondDozen,
// thirdDozen,
// bottomRow,
// middleRow,
// topRow,
// bottomHalf,
// upperHalf,
// even,
// odd,
// red,
// black,
// zero,

/////

import { Roulette } from './Game.js';

const roulette = new Roulette();

actionButton.addEventListener('click', (ev) => {
    localStorage.cash = Number(localStorage.cash) + Number(owed)
    let outcome = roulette.Spin();
    let tabulatedBets = tabulateBets();
    let isWin = false;
    for (let i = 0; i < tabulatedBets.length; i++) {
        let payout = roulette.CalculatePayout(tabulatedBets[i].bets, tabulatedBets[i].amount);
        if (payout > 0) {
            isWin = true;
        }
        localStorage.cash = Number(localStorage.cash) + payout;
        
    }
    updateElements(outcome, isWin);
    resetBoard()
});

function updateElements(outcome, isWin) {
    outcomeElement.innerHTML = outcome;
    outcomeElement.style.visibility = 'visible';
    outcomeElement.classList.remove('red', 'green', 'black');
    outcomeElement.classList.add(roulette.wheelColor);
    if (isWin) {
        document.getElementById('cash').style.color = 'green';
    } else {
        document.getElementById('cash').style.color = 'red';
    }
}


function tabulateBets() {
    let tabulatedBets = [];
    for (let bet of bets) {
        // Return if not valid bet
        if (!isValidBet(bet)) {
            return;
        }

        // Format bet object
        let formattedBet = {
            amount: bet.amount,
            bets: []
        }
        // Handle complex bet types
        if (bet.type === 'complex') {
            formattedBet.bets = convertComplexToBet(bet.bet);
        } else {
            formattedBet.bets = convertRowColToBet(bet);
        }
        tabulatedBets.push(formattedBet);
    }
    return tabulatedBets;
}

function convertComplexToBet(bet) {
    switch (bet) {
        case 'firstDozen':
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        case 'secondDozen':
            return [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        case 'thirdDozen':
            return [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        case 'bottomRow':
            return [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
        case 'middleRow':
            return [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
        case 'topRow':
            return [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
        case 'bottomHalf':
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
        case 'upperHalf':
            return [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
        case 'even':
            return [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];
        case 'odd':
            return [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];
        case 'red':
            return [32, 19, 21, 25, 34, 27, 36, 30, 23, 5, 16, 1, 14, 9, 18, 7, 12, 3];
        case 'black':
            return [15, 4, 2, 17, 6, 13, 11, 8, 10, 24, 33, 20, 31, 22, 29, 28, 35, 26];
        default:
            if (bet !== 'zero') {
                alert(`There was an issue with parsing a complex bet ${bet}`);
            }
            return [0];
    }
}

function convertRowColToBet(bet) {
    // Handle the 0th col (bets include 0)
    const row = bet.row;
    const col = bet.col;
    if (col === 0 && row === 0) {
        return [0, 1, 2, 3];
    }

    if (col === 0 && (row % 2 === 1)) {
        let upperVal = 3;
        let offset = Math.floor(row / 2);
        let val = upperVal - offset;
        return [0, val]
    }

    if (col === 0 && (row % 2 === 0)) {
        let upperVal = 3;
        let offset = row / 2 - 1;
        let val = upperVal - offset;
        return [0, val, val - 1]
    }

    // When there is an odd row/col, it means that it is on the junction
    // between two numbers, not squarely on a single numbers row/col

    // Handle street bets (row is 0, col is odd) (bets on a single col of #'s)
    if (row === 0 && (col % 2 === 1)) {
        let upperVal = Math.ceil(col / 2) * 3;
        return [upperVal, upperVal - 1, upperVal - 2];
    }

    // Handle six line bets (row is 0, col is even) (bets on two cols of #'s)
    if (row === 0 && (col % 2 === 0)) {
        let upperVal = (Math.ceil(col / 2) * 3) + 3;
        return [upperVal, upperVal - 1, upperVal - 2,
            upperVal - 3, upperVal - 4, upperVal - 5];
    }

    // Handle straight up bet (odd row, odd col) (bets on a single number)
    if ((row % 2 === 1) && (col % 2 === 1)) {
        let upperVal = Math.ceil(col / 2) * 3;
        let offset = Math.floor(row / 2);
        let val = upperVal - offset;
        return [val];
    }

    // Handle horizontal split bets (odd row, even col) (bets on two numbers)
    if ((row % 2 === 1) && (col % 2 === 0)) {
        let upperVal = (col / 2) * 3;
        let offset = Math.floor(row / 2);
        let val = upperVal - offset;
        return [val, val - 3];
    }

    // Handle vertical split bets (even row, odd col) (bet on two numbers)
    if ((row % 2 === 0) && (col % 2 === 1)) {
        let upperVal = Math.ceil(col / 2) * 3;
        let offset = row / 2;
        let val = upperVal - offset;
        return [val, val - 1];
    }

    // Handle corner bets (even row, even col) (bet on four numbers)
    if ((row % 2 === 0) && (col % 2 === 0)) {
        let upperVal = (col / 2) * 3;
        let offset = (row / 2) - 1;
        let val = upperVal - offset;
        return [val, val - 1, val + 3, val + 2];
    }

    alert(`There was a fucking issue with parsing a bet row ${row} col ${col}`);
}

function isValidBet(bet) {
    if (!bet.hasOwnProperty('type') || !bet.hasOwnProperty('amount'
        || !bet.hasOwnProperty('row') || !bet.hasOwnProperty('col'))) {
        alert(`The bet at row ${row} and col ${col} is not valid.\n${bet}`);
        return false;
    }
    return true;
}
