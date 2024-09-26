// Maximum Multiple (103)

function maxMultiple(divisor, bound){

    if(divisor == 0){return 0}
    
    while(bound % divisor != 0){bound--}
    return bound;

  }

// Factorial (104)

function factorial(n){
    if(n == 1 || n == 0){return 1}
    else if(n < 0 || n > 12){throw RangeError}
  return n * factorial(n-1)
}

// Form The Minimum (105)

function minValue(values){

    return parseInt(values.sort((a,b) => a-b).filter((e,i) => e != values[i-1]).join(''));
  }

// Alternate capitalization (106)

function capitalize(s){
    return [s.split('').map((e,i) =>(i % 2 == 0) ? e.toUpperCase() : e.toLowerCase()).join(''),s.split('').map((e,i) =>(i % 2 == 0) ? e.toLowerCase() : e.toUpperCase()).join('')];
  };

// Flatten and sort an array (107)

function flattenAndSort(array) {

    return [].concat(...array).sort((a,b) => a-b)

    return array.flat().sort((a,b) => a-b);
  }

// Sum of Minimums!(108) 

function sumOfMinimums(arr) {
    return arr.map((e) => Math.min(...e)).reduce((a,c) => a + c,0);
  }

// Are the numbers in order?(109)

function inAscOrder(arr) {
    return arr.concat().sort((a,b) => a-b).map((e,i) => e == arr[i]).every((e) => e == true);
  }






