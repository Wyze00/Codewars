// Street Fighter 2 - Character Selection (246)

function streetFighterSelection(fighters, position, moves){
    const myM = moves;
    const myF = fighters;
    const myP = position;
    const smn = [];


    for(let i = 0; i<myM.length; i++){

        if(myM[i] == 'up'){
            myP[0]--;
            if(myP[0] < 0){
                myP[0] = 0;
            }
            smn.push(myF[myP[0]][myP[1]]);
        }

        if(myM[i] == 'down'){
            myP[0]++;
            if(myP[0] > 1){
                myP[0] = 1;
            }
            smn.push(myF[myP[0]][myP[1]]);
        }


        if(myM[i] == 'left'){
            myP[1]--;
            if(myP[1] < 0){
                myP[1] = myF[0].length-1;
            }
            smn.push(myF[myP[0]][myP[1]]);
        }

        if(myM[i] == 'right'){
            myP[1]++;
            if(myP[1] > myF[0].length-1){
                myP[1] = 0;
            }
            smn.push(myF[myP[0]][myP[1]]);
        }


    }


    return smn;
  }

// +1 Array (247)

function upArray(arr){

    if(arr.length == 0){return null}

    const smn = arr.every((e) => {

        if(e < 0){return false}
        if(e > 9){return false}
        return true;

    });

    if(smn == false){return null}

    const myR = String(BigInt(arr.join('')) + 1n).split('').map((e)=>Number(e));

    console.log(myR);

    if(arr.join('').match(/^0+/)) {
        return [...arr.slice(0,arr.join('').match(/0+/)[0].split('').length),...myR]
    };

    return myR;

  }

// Fibonacci, Tribonacci and friends (248)

function Xbonacci(signature,n){

    if(signature.length > n){return signature.slice(0,n)}

    const myA = signature;
    let coun = 0;

    while(myA.length != n){

        const smn = myA.slice(coun,signature.length).reduce((a,c) => a+c,0);

        coun++

        myA.push(smn);
    }

    return myA;

  }

// Playing with passphrases (249) 

function playPass(s, n) {

    let smn = (s.replace(/[A-Z]/g,(e) => {
        
        if(e.charCodeAt() + n > 90){return String.fromCharCode(e.charCodeAt() + n - 26) }
        return String.fromCharCode(e.charCodeAt() + n) 
    }).replace(/\d/g,(e) => {
        return 9 - e;
    }).split('').map((e,i) => {

        if(typeof e == 'string' && i % 2 != 0){return e.toLowerCase()}
        return e;

    }).reverse().join(''));

    return smn;

}