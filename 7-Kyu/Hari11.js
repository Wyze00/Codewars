// Square Every Digit (40)

function squareDigits(num){

    return Number(num.toString().split('').map((e) => e*e ).map((e) => e.toString()).join(''));
  }

// Highest and Lowest (41)

function highAndLow(numbers){
    const num = numbers.split(' ').map(e => Number(e)).sort((a,b) => b-a);

    return `${num[0]} ${num[num.length -1]}`
  }

// Descending Order (42)

function descendingOrder(n){

    return Number(n.toString().split('').map(e => Number(e)).sort((a,b) => b-a).join(''));

  }

// Get the Middle Character (43)

function getMiddle(s){

    return (s.length % 2 == 1) ? s[(s.length - 1) / 2] : `${s[s.length / 2 - 1]}${s[s.length / 2]}` ;
    
}

// Complementary DNA (44)


function dnaStrand(dna){
    return dna.split('').map((e) => (e == 'A') ? 'T' : (e == 'T') ? 'A' : (e == 'G') ? 'C' : 'G').join('');
  }

// Sum of two lowest positive integers (45)

function sumTwoSmallestNumbers(numbers) {  
    let res = numbers.sort((a,b) => a-b);

    return res[0] + res[1];
  }




