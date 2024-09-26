// Sum Mixed Array (19)

function sumMix(x){

    return x.reduce((a,c) => a + Number(c),0);

}

// The Feast of Many Beasts (20)

function feast(beast, dish) {

        if((beast.indexOf(' ') != -1 || beast.indexOf('-') != -1) || (dish.indexOf(' ') != -1 || dish.indexOf('-') != -1 )) {

         return (beast.charAt(beast.length - 1) == dish.charAt(dish.length - 1)) && (beast.charAt(0) == dish.charAt(0)) ;
        
        }

        return false;
    }


// Transportation on vacation (21)

function rentalCarCost(d) {
    
    if(d < 3) {return 40 * d }
    else if( d >= 3 && d < 7) {return 40 * d - 20}
    else {return 40 * d - 50}

  }



