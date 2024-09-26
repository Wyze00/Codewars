// Jaden Casing Strings (200)

String.prototype.toJadenCase = function () {
    return this.match(/\w+/g).map(e=>e[0].toUpperCase() + e.slice(1)).join(' ');
  };

// Filter the number (201)

const filterString = function(value) {
    return Number(value.split('').filter(e=> !isNaN(e)).join(''));
  }

// Sum even numbers (202)

function sumEvenNumbers(input) {
    return input.filter((e) => e % 2 == 0).reduce((a,c) => a+c,0);
  }

// All unique (203)
 
function hasUniqueChars(str){
    return [...new Set(str)].length == str.length;
  }

// Sum of numbers from 0 to N (204)

var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {

        if(count < 0){return `${count}<0`}
        if(count == 0){return `0=0`}

        let res = '';
        let coun = 0;

        for(let i = count; i>0; i--){
            res += `${count - i}+`;
            coun+= i;
        }

        return res + `${count} = ${coun}`;

        
    };
  
    return SequenceSum;
  
  })();

// Coding Meetup #2 - Higher-Order Functions Series - Greet developers (205)

function greetDevelopers(list) {
    return list.map((e) => {

        const obj = e;

        obj.greeting = `Hi ${e.firstName}, what do you like the most about ${e.language}?`;

        return obj;

    });
  }

// Sum of array singles (206)

function repeats(arr){
    return [...new Set(arr)].filter((e) => arr.indexOf(e) == arr.lastIndexOf(e)).reduce((a,c) => a + c,0);
    };

// Boiled Eggs (207)

function cookingTime(eggs) {
    return eggs <= 0 ? 0 : Math.ceil(eggs/8) * 5;
  }

// Simple remove duplicates (208)

function solve(arr) {
    return arr.filter((e,i)=> arr.indexOf(e,i) == arr.lastIndexOf(e));
  }

//  Odd-Even String Sort (209)

function sortMyString(S) {
    return S.split('').filter((_,i) => i % 2 == 0).join('') + ' ' + S.split('').filter((_,i) => i % 2 != 0).join('');
}
