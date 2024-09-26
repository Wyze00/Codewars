// Playing with digits (142)

function digPow(n, p){

    if(p < 0){return -1}

    let res = String(n).split('').reduce((a,c) => {
        p++
        return a + (Number(c) ** (p-1)) 
    },0) / n;

    return Number.isInteger(res) ? res : -1;
    
  }

// Decode the Morse code (143)

const decodeMorse = function(morseCode){
    const kode = {
        '.-': 'A',
        '-...': 'B',
        '-.-.': 'C',
        '-..': 'D',
        '.': 'E',
        '..-.': 'F',
        '--.': 'G',
        '....': 'H',
        '..': 'I',
        '.---': 'J',
        '.-.': 'K',
        '.-..': 'L',
        '--': 'M',
        '-.': 'N',
        '---': 'O',
        '.--.': 'P',
        '--.-': 'Q',
        '.-.': 'R',
        '...': 'S',
        '-': 'T',
        '..-': 'U',
        '...-': 'V',
        '.--': 'W',
        '-..-': 'X',
        '-.--': 'Y',
        '--..': 'Z',
        '': ' ',
    }

    return morseCode.trim().replace(/   /,'  ').split(' ').map((e) => kode[e]).join('')

  }

// Number of Decimal Digits (144)

function digits(n) {
  return String(n).split('').length;
}

// Fizz Buzz (145)

function fizzbuzz(n){
  const res = []

  for(let i = 1; i < n+1; i++){
    if(i % 15 == 0){res.push('FizzBuzz')}
    else if(i % 5 == 0){res.push('Buzz')}
    else if(i % 3 == 0){res.push('Fizz')}
    else{res.push(i)}
    
  }

  return res;
}

// Sum of Cubes (146)

function sumCubes(n){
  let res = 0;

  while(n != 0){
    res += Math.pow(n,3)
    n--
  }
  return res;
}

