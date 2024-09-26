// Largest 5 digit number in a series (105)

function solution(digits){

let num = Math.max(...digits.split(''));

let reg = new RegExp('' + num + '\\d{4}','g');

let smn = digits.match(reg);

while (smn == null){
    num--;
    reg = new RegExp('' + num + '\\d{4}','g');
    smn = digits.match(reg);
}

return Number(smn.concat().sort()[smn.length-1]);
  
}

// Row Weights (106)

function rowWeights(array){
    return [array.concat().filter((e,i) => i % 2 == 0).reduce((a,c) => a + c,0),array.concat().filter((e,i) => i % 2 != 0).reduce((a,c) => a + c,0)]
  }

// Leap Years (107)

function isLeapYear(year) {
    
    if(year < 1600 || year > 4000){return false}
    else if(year % 100 == 0 && year % 400 != 0){return false}
    else if(year % 4 == 0){return true}
    else {return false}

  }

// The Coupon Code (108)

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    if(enteredCode !== correctCode){return false}
    else if(new Date(currentDate).getTime() > new Date(expirationDate).getTime()){return false}
    else {return true}
}

// Factorial (109)

function factorial(n){
    if(n < 0){return 0}
    if(n == 1 || n == 0){return 1}
    return n * factorial(n-1)
}

// Remove duplicate words (110)

function removeDuplicateWords (s) {

    const smn = s.split(' ').reverse();

    return s.split(' ').reverse().map((e,i) => {

        for(let u = i+1; u < smn.length; u++){
            if(e == smn[u]){return false}
        }

        return e;

    }).reverse().filter((e) => typeof e == 'string').join(' ');
}

