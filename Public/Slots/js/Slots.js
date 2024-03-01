
let options = [];
initOptions();

var spinbutton = document.getElementById('actionButton');

//event listen for the spin button
spinbutton.addEventListener('click', function() {
    
    //get 3 randoms
    for (let i = 0; i < 3; i++) {

        //get a random number based on the size of the array length
        random = Math.floor(Math.random() * options.length);

        //grab the random from the array
        for(let j = 0; j < options.length; j++) {
            if(j === random) {

                let slotPicture = options[j];
                //switch on the slot types
                
                switch(slotPicture) {
                    case 'cherry':
                        //set the innerHTML of the slot to the random option 
                        //get the random option picture it coresponds to
                        document.getElementById('slot' + i).innerHTML = '<img src="../CasinoAssets/Slots/Wheel - Cherry.png" alt="cherry" />';
                        break;
                    case 'lemon':
                        //set the innerHTML of the slot to the random option 
                        //get the random option picture it coresponds to
                        document.getElementById('slot' + i).innerHTML = '<img src="../CasinoAssets/Slots/Wheel - Lemon.png" alt="lemon" />';
                        break;
                    case 'orange':
                        //set the innerHTML of the slot to the random option 
                        //get the random option picture it coresponds to
                        document.getElementById('slot' + i).innerHTML = '<img src="../CasinoAssets/Slots/Wheel - Orange.png" alt="orange" />';
                        break;
                    case 'plum':
                        //set the innerHTML of the slot to the random option 
                        //get the random option picture it coresponds to
                        document.getElementById('slot' + i).innerHTML = '<img src="../CasinoAssets/Slots/Wheel - Plum.png" alt="plum" />';
                        break;
                    case 'bell':
                        //set the innerHTML of the slot to the random option 
                        //get the random option picture it coresponds to
                        document.getElementById('slot' + i).innerHTML = '<img src="../CasinoAssets/Slots/Wheel - Bell.png" alt="bell" />';
                        break;
                    case 'bar':
                        //set the innerHTML of the slot to the random option 
                        //get the random option picture it coresponds to
                        document.getElementById('slot' + i).innerHTML = '<img src="../CasinoAssets/Slots/Wheel - Bar.png" alt="bar" />';
                        break;
                    case 'seven':
                        //set the innerHTML of the slot to the random option 
                        //get the random option picture it coresponds to
                        document.getElementById('slot' + i).innerHTML = '<img src="../CasinoAssets/Slots/Wheel - Seven.png" alt="seven" />';
                        break;
                    case 'banana':
                        //set the innerHTML of the slot to the random option 
                        //get the random option picture it coresponds to
                        document.getElementById('slot' + i).innerHTML = '<img src="../CasinoAssets/Slots/Wheel - Banana.png" alt="banana" />';
                        break;
                    case 'melon':
                        //set the innerHTML of the slot to the random option 
                        //get the random option picture it coresponds to
                        document.getElementById('slot' + i).innerHTML = '<img src="../CasinoAssets/Slots/Wheel - Melon.png" alt="melon" />';
                        break;
                }
                
            }
        }

    }


    //read in the slot elements
    let slot1 = document.getElementById('slot0').innerHTML;
    let slot2 = document.getElementById('slot1').innerHTML;
    let slot3 = document.getElementById('slot2').innerHTML;

    //call the muliplier function
    let winning = Winnings(slot1, slot2, slot3);

    //update the players balance
    localStorage.cash = parseInt(localStorage.cash) + winning;
    console.log(localStorage.cash);

});

function Winnings(slot1, slot2, slot3) {
    //check for 3 of a kind
    if(slot1 === slot2 && slot2 === slot3) {
        //if 3 of a kind then multiply the bet by 3

        let bet = parseInt(document.getElementById('bet').innerHTML);
        let multiplier = muliplier(slot1);

        return bet * multiplier;

    } else {
        //if no matches then the bet is lost
        let bet = parseInt(document.getElementById('bet').innerHTML);
        return bet;
    }
}

function muliplier(option) {
    switch(option) {
        case 'lemon':
            return 1;
        case 'orange':
            return 2;
        case 'banana':
            return 3;
        case 'melon':
            return 5;
        case 'plum':
            return 10;
        case 'cherry':
            return 20;
        case 'bell':
            return 50;
        case 'bar':
            return 100;
        case 'seven':
            return 500;
    }

}

function initOptions(){

    //push the words into the array

    //12 lemmons
    for(let i = 0; i < 12; i++) {
        options.push('lemon');
    }

    //11 oranges
    for(let i = 0; i < 11; i++) {
        options.push('orange');
    }

    //10 bananas
    for(let i = 0; i < 10; i++) {
        options.push('banana');
    }

    //7 melons
    for(let i = 0; i < 7; i++) {
        options.push('melon');
    }

    //6 plums
    for(let i = 0; i < 6; i++) {
        options.push('plum');
    }

    //5 cherry
    for(let i = 0; i < 5; i++) {
        options.push('cherry');
    }
    
    //3 bells
    for(let i = 0; i < 3; i++) {
        options.push('bell');
    }

    //2 bars
    for(let i = 0; i < 2; i++) {
        options.push('bar');
    }

    //1 seven
    options.push('seven');


}