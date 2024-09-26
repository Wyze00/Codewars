// Array.diff (126)

function arrayDiff(a, b) {


    return a.filter((e) => b.some((a) => a == e) == false);
}

// Sum of Digits / Digital Root (127)

function digitalRoot(n) {

    let smn = n.toString().split(('')).reduce((a,c) => parseInt(c) + a,0);

    while(smn >= 10){
        smn = smn.toString().split(('')).reduce((a,c) => parseInt(c) + a,0);
    }

    return smn;
    
  }

// Create Phone Number (128)

function createPhoneNumber(numbers){
    return `(${numbers.slice(0,3).join('')}) ${numbers.slice(3,6).join('')}-${numbers.slice(-4).join('')}`
  
}

// Bit Counting (129)

const countBits = function(n) {



    if(n == 0){return 0}

    return n.toString(2).match(/1/g).length
  };

// Find The Parity Outlier (130)

function findOutlier(integers){
    return integers.filter((e => e % 2 == 0)).length == 1 ? integers.filter((e) => e % 2 == 0)[0] : integers.filter((e) => e % 2 != 0)[0]
  }


