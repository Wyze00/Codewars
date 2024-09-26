// Will you make it? (5)

const zeroFuel = (distanceToPump, mpg, fuelLeft) => ((distanceToPump - mpg * fuelLeft) <= 0 );

// DNA to RNA Conversion (6)

const DNAtoRNA = (dna) => dna.replaceAll('T','U');

// Count by X (7)

function countBy(x, n) {
    let z = [];
    let num = x;

    for(let i = 0; i < n; i++) {

        z.push(num);

        num += x;

    }
  
    return z;
  }

// If you can't sleep, just count sheep!! (8)

const countSheep = function (num){

    if(num >= 0) {

        let res  = ''

        for(let i = 1; i <= num; i++) {
            
            res = res + i + ' sheep...';

        }

        return res;
    }

    return false
    
  }

// Find Maximum and Minimum Values of a List (9)
 

const min = function(list){
    
    return Math.min(...list);
}

const max = function(list){
    
    return Math.max(...list);
}
