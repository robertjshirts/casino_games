let bets = []

var cursorX = 0
var cursorY = 0




var hitBox = document.getElementById('boardHitBox');
var rect = hitBox.getBoundingClientRect();
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
            document.removeEventListener('mousemove', move);

            let x = cursorX - rect.left
            let y = cursorY - rect.top
            snapX = (Math.floor(x / 40) * 41) + 13;
            snapY = (Math.floor(y / 55) * 57) + 15
            clone.style.left = snapX + rect.left
            clone.style.top = snapY + rect.top

            addBet(x, y, clone)

        });


    }
});

//24 columns
//6 rows        

function addBet(x, y, element) {
    let cList = element.classList
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
    chipClass = null

    for (var i = 0; i < classesToCheck.length; i++) {
        if (element.classList.contains(classesToCheck[i])) {
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


    let col = Math.floor((x / 40))
    if (col > 23 || col < 0) {
        element.style.visibility = 'hidden'
        return;
    }

    let row = Math.floor(y / 55)
    if (row > 5 || col < 0) {
        element.style.visibility = 'hidden'
        return;
    }

    let bet = {
        'row': row,
        'col': col,
        'amount': amount
    }
    bets.push(bet)
    console.log(bets)

}


//{
//     'col':3,
//     'row':2,
//     'amount':5
// }

// special Enum
    //firstDozen,
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
    // zero