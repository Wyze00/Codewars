// Roman Numerals Decoder (193)

function solution (roman) {

    const myRoman = {
        I: '1',
        II: '2',
        III: '3',
        IV: '4',
        V: '5',
        VI: '6',
        VII: '7',
        VIII: '8',
        IX: '9',
        X: '10',
        XX: '20',
        XXX: '30',
        XL: '40',
        L: '50',
        LX: '60',
        LXX: '70',
        LXXX: '80',
        XC: '90',
        C: '100',
        CC: '200',
        CCC: '300',
        CD: '400',
        D: '500',
        DC: '600',
        DCC: '700',
        DCCC: '800',
        CM: '900',
        M: 1000,
      }

    return roman.match(/(C?M|MC+)|(C?DC*|C+)|(X?C|CX+)|(X?LX*|X+)|(I?X|XI+)|(I?VI*|I+)/g).map((e) => myRoman[e]).reduce((a,c) => a + Number(c),0);

  }

// CamelCase Method  (194)

String.prototype.camelCase=function(){
    return this.replace(/(\w)\w*/g,(e,p1)=> p1.toUpperCase()+e.slice(1)).split(' ').join('');
  }

// Simple Encryption #1 - Alternating Split (195) 

function encrypt(text, n) {

    n = n%4;

    while(n !== 0 || n>0){

    text = text.split('').filter((e,i) => i%2 != 0).concat(text.split('').filter((e,i) => i%2 != 1)).join('');

        n--
    }

    return text;

}

function decrypt(encryptedText, n) {

    return encrypt(encryptedText, 3 - (n%4));
    
}


