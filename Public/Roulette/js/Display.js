let bets = []

var cursorX = 0
var cursorY = 0

const actionButton = document.getElementById('actionButton');
const outcomeElement = document.getElementById('outcome');

document.getElementById('reset').addEventListener('click', () => {
    const elements = document.querySelectorAll('.clone');
    bets = []
    elements.forEach(element => {
        element.remove()
    });
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

            if (amount > Number(localStorage.cash)) {
                clone.remove()
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
    let outcome = roulette.Spin();
    updateOutcomeElement(outcome);
    let tabulatedBets = tabulateBets();
    for (let bet in tabulatedBets) {
        localStorage.cash += roulette.CalculatePayout(bet);
    }
});

function updateOutcomeElement(outcome) {
    outcomeElement.innerHTML = outcome;
    outcomeElement.classList.remove('red', 'green', 'black');
    outcomeElement.classList.add(roulette.wheelColor);
}

function tabulateBets() {
    for (let bet of bets) {
        //TODO: This
    }
}
