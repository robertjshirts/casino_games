
let options = [];

//event listen for the spin button
document.getElementById('spin').addEventListener('click', function() {
    
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
                    
                }
                //set the innerHTML of the slot to the random option 
                //get the random option picture it coresponds to
                




                document.getElementById('slot' + i).innerHTML = options[j];
                console.log(options[j]);
            }
        }

    }

});