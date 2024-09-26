// Breaking chocolate problem (87)

function breakChocolate(n,m) {
    return (n*m == 0) ? 0 : n*m-1;
  }

// Count the Digit (88)

function nbDig(n, d) {
    
    let smn = [];
    let rgx = new RegExp(d,'g')

    for(let i = n; i>=0; i--){
        smn.push(i*i)
    }

    return smn.filter((e) => e.toString().match(rgx)).map((e) => e.toString().match(rgx).length).reduce((a,c) => a+c)

}

// Make a function that does arithmetic! (89)

function arithmetic(a, b, operator){
    if(operator == 'add'){return a+b}
    else if(operator == 'subtract'){return a-b}
    else if(operator == 'multiply'){return a*b}
    else if(operator == 'divide'){return a/b}
    else{return false}
  }

// Find the middle element (90)

function gimme (triplet) {

    let smn = [];

    for(let i = 0; i<triplet.length; i++){smn.push(triplet[i])}
    
    smn.sort((a,b) => a-b);

    for(let i = 0; i<triplet.length; i++){if(triplet[i] == smn[1]){return i}}

}

// Sum of a sequence (91)

const sequenceSum = (begin, end, step) => {

    if(begin > end){return 0}
    
    else {

        let res = 0;

        while(begin <= end){
            res += begin;
            begin += step
        }

        return res;
    }

  };

// Round up to the next multiple of 5 (92)

function roundToNext5(n){
    let test = n
    while(test.toString().match(/[50]$/g) == null){
        test++
    }
    return test ;
  }

// Sort Numbers (93)

function solution(nums){
    return nums.sort((a,b) => a-b)
}

// Remove anchor from URL (94)

function removeUrlAnchor(url){
    return url.split('#')[0];
  }

