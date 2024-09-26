// Convert a string to an array (10)

// const stringToArray = (string) => string.split(' ');

function stringToArray(string) {

    let counter = 0;
    let cont = string;
    let res = [];
    let resC = 0;
    let smntr = '';

    for(let i1 = 0; i1 < string.length; i1++){

        if(cont[i1] ==  'i') {

            let asdf = '';
           
            for(let i2 = counter; i2 < i1; i2++) {

                asdf = asdf + cont[i2];              
            }
            
            counter = i1 + 1;

            res[resC] = asdf;
            resC = resC + 1;

        }

    }

    for(let i2 = counter; i2 < cont.length; i2++) {

        smntr = smntr + cont[i2];              

    }

    res[resC] = smntr;

    return res;

}

// Rock Paper Scissors (11)

const rps = (p1, p2) => {

    let res = '';

    if(p1 == 'rock') {

        if(p2 == 'paper') {

            res = 'Player 2 won!';
            
            return res;
        }

        else if(p2 == 'rock') {

            res = 'Draw!';

            return res;
        } 

        else {

            res = 'Player 1 won!'

            return res;
        }

    }

    else if(p1 == 'paper') {

        if(p2 == 'scissors') {

            res = 'Player 2 won!';

            return res;
        }

        else if(p2 == 'paper') {

            res = 'Draw!';

            return res;
        } 

        else {

            res = 'Player 1 won!'

            return res;
        }

    }

    else if(p1 == 'scissors') {

        if(p2 == 'rock') {

            res = 'Player 2 won!';

            return res;
        }

        else if(p2 == 'scissors') {

            res = 'Draw!';

            return res;
        } 

        else {

            res = 'Player 1 won!'

            return res;
        }

    }  else {

        res = 'Input Invalid !'

    }

    return res;

};

// Array plus array (12)

function arrayPlusArray(arr1, arr2) {
    
    let res1 = 0;
    let res2 = 0;
    let res;

    for(let i = 0; i < arr1.length; i++) {
        
        res1 += arr1[i];

    }

    for(let i = 0; i < arr2.length; i++) {
        
        res2 += arr2[i];

    }

    res = res1 + res2;

    return res;

  }
