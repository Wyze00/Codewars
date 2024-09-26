// Find the next perfect square! (68)

function findNextSquare(sq) {
    return Number.isInteger(Math.sqrt(sq)) ? (Math.sqrt(sq) + 1) ** 2 : -1;
  }

// Printer Errors (69)

function printerError(s) {
    let smn = s.split('').filter((e) => e.toLowerCase().charCodeAt() <= 109).length

    return `${s.length - smn}/${s.length}`
}

// String ends with? (70)

function solution(str, ending){
    return str.slice(str.length - ending.length,str.length) == ending ? true : false;
  }

// Regex validate PIN code (71)

function validatePIN (pin) {

    if(pin.length != 4 && pin.length != 6){return false}
    else {

        for(let i = 0; i < pin.length; i++) {

            if(pin[i] == '-' || pin[i] == '.' || pin[i] == ' ' || pin[i] == '\n' || pin[i] == '+') {return false}

        }


        return (isNaN(Number(pin)) == true) ? false : true;


    }  
}
