// Even or Odd (30)

function evenOrOdd(number) {

    return (number%2 == 0) ? 'Even' : 'Odd';
  
}

// Multiply (31)

function multiply(a, b){
    return a * b
  }

// Return Negative (32)

function makeNegative(num) {
    return (num <= 0) ? num : -num;
  }

// Sum of positive (33)

function positiveSum(arr) {

    return arr.reduce((a,c) => (c <= 0) ? a + 0 : a + c  ,0);
}

// Reversed Strings (34)

function solution(str){

    return Array.from(str).reverse().join('');  
}


