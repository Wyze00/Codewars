// Reverse a Number (171)

function reverseNumber(n) {

    if(n < 0){return  Number('-' + String(Math.abs(n)).split('').reverse().join(''))}

    return Number(String(n).split('').reverse().join(''))
  }

// Parts of a list (172)

function partlist(arr) {

    let res = [];

    for(let i = 1; i<arr.length; i++){

        res.push([arr.slice(0,i).join(' '),arr.slice(i).join(' ')])
    }

    return res
}

// Convert an array of strings to array of numbers (173)

function toNumberArray(stringarray){
    return stringarray.map((e) => parseFloat(e));
  }

// Sort the Gift Codev (174)

function sortGiftCode(code){
    return code.split('').sort().join('');
  }

// Build a square (175)

function generateShape(integer){
    return `\n${'+'.repeat(integer)}`.repeat(integer).slice(1);
  }

// Sum of Triangular Numbers (176)

function sumTriangularNumbers(n) {
    let res = 0;

    for(let i = 1,u = n; i < n+1; i++, u--){
        res = res + (i * u);
    }

    return res;

  }

// Simple beads count (177)

function countRedBeads(n) {
    return n < 2 ? 0 : n * 2 - 2
  }

// Moves in squared strings (I) (178)

function vertMirror(strng) {
   return strng.split('\n').map((e) => e.split('').reverse().join('')).join('\n');
}

function horMirror(strng) {
    return strng.split('\n').reverse().join('\n');
}

function oper(fct, s) {
    return fct(s);
}

// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming? (179)

function isRubyComing(list) {
    return list.map((e) => e['language']).some((e) => e == 'Ruby')
  }

// Alphabet symmetry (180)

function solve(arr){  
    return arr.map((e) => e.toLowerCase().split('').filter((e,i) => e.charCodeAt() - 96 - i == 1).length)
};

