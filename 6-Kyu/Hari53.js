// Backspaces in string (236)

function cleanString(s) {

    if(s == ''){return ''}

    let myAA;

    let myA = s.split('');

    if(s.indexOf('#') != -1){
        myA = s.slice(0,s.lastIndexOf('#')+1).split('');
        myAA =s.slice(s.lastIndexOf('#')+1);
    }


    while(myA.indexOf('#') != -1){
        myA.splice(myA.indexOf('#')-1,2)
    }

    return (myA.join('') + myAA);

  }

// A Rule of Divisibility by 13 (237)

function thirt(n) {

    let smn = 0;
    let myR = String(n).split('').reverse().reduce((a,c,i) => a + ((10**i)%13 * Number(c)) ,0);

    while(smn != myR){
        smn = myR;
        myR = String(myR).split('').reverse().reduce((a,c,i) => a + ((10**i)%13 * Number(c)) ,0);

    }

    return smn;
}

// The Vowel Code (238)

function encode(string) {
    return string.replace(/[aiueo]/g,(e) => {
        return {a: 1,e: 2,i: 3,o: 4,u: 5}[e];
    })
  }
  
  function decode(string) {
    return string.replace(/[12345]/g,(e) => {
        return {1: 'a',2: 'e',3: 'i',4: 'o',5: 'u'}[e];
    })
  }

// Tortoise racing (239)

function race(v1, v2, g) {

    if(v1 <= 0 || v2 <= 0 || v1 == v2 || v1 > v2){return [-1,-1,-1]}

    v1/=3600;
    v2/=3600;

    let my1 = g;
    let my2 = v2-v1;
    let coun =0;

    while(my1 >= 0){
        my1 -= my2;
        coun++
    }

    let res = [];

    if(coun >= 3600){
        res.push(Math.floor(coun/3600));
        coun = coun%3600;
    }
    else {
        res.push(0);
    }

    if(coun >= 60){
        res.push(Math.floor(coun/60));
        coun = coun%60;
    }
    else {
        res.push(0);
    }

    res.push(coun);

    return res;


}

// Validate Credit Card Number (240)

function validate(n){

    let myS = String(n);

    const myA = myS.split('').reverse();


    if(myA.length >= 16 || myA.length == 0){return false}

    return (myA.map((e,i) => {

        if(i%2 != 0){

            let smn = e*2;

            while(smn > 9){
                smn = String(smn).split('').reduce((a,c) => a + Number(c),0);
            }

            return smn;

        }
        return e*1;

    } ).reduce((a,c) => a + c,0) % 10 == 0);

  
}

