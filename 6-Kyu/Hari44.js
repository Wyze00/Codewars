// Mexican Wave (189)

function wave(str){
    const res = [];

    for(let i = 0; i<str.length+1; i++ ){

        const myR = new RegExp(str[i]);

        if(i !== str.length && str[i] !== ' ')res.push(str.slice(0,i) + str.slice(i).replace(myR,(e)=>e.toUpperCase()));
    }
    return res; 
  }

// Two Sum (190)

function twoSum(numbers, target) {

    const num = numbers.map((e,i,a) => {

        for(let u = 0; u<numbers.length; u++){
            if(u != i){
                if(e + a[u] == target){return [e,a[u]]}
            }
        }

    }).filter(e=>e).flat();

    const res = [numbers.indexOf(num[0]),numbers.indexOf(num[1],numbers.indexOf(num[0]) + 1)];

    return res;
    
}

// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!! (191)

function sumDigPow(a, b) {
    const result = [];

    for(let i = a; i<=b; i++){

        if(i < 10  && i>0){result.push(i)}

        else {
        
            const myE  = String(i).split('').map((e,i,a) => Math.pow(e,i+1)).reduce((a,c) => a + Number(c));

            if(myE == i){result.push(i)}

        }

    }

    return result;

  }

// Roman Numerals Encoder (192)

function solution(number){
    
    const roman = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
        20: 'XX',
        30: 'XXX',
        40: 'XL',
        50: 'L',
        60: 'LX',
        70: 'LXX',
        80: 'LXXX',
        90: 'XC',
        100: 'C',
        200: 'CC',
        300: 'CCC',
        400: 'CD',
        500: 'D',
        600: 'DC',
        700: 'DCC',
        800: 'DCCC',
        900: 'CM',

    }

    return String(number).split('').reverse().map((e,i) => e * (10**i)).reverse().map((e) => {

        if(e > 999){return 'M'.repeat(Number(String(e)[0]))}
        return roman[e];

    }).filter(e=>e).join('');

  }


