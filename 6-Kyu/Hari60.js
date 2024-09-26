// Multi-tap Keypad Text Entry on an Old Mobile Phone (260)

function presses(phrase) {
    const alph = {
        1: 1,
        A: 1,
        B: 2,
        C: 3,
        2: 4,
        D: 1,
        E: 2,
        F: 3,
        3: 4,
        G: 1,
        H: 2,
        I: 3,
        4: 4,
        J: 1,
        K: 2,
        L: 3,
        5: 4,
        M: 1,
        N: 2,
        O: 3,
        6: 4,
        P: 1,
        Q: 2,
        R: 3,
        S: 4,
        7: 5,
        T: 1,
        U: 2,
        V: 3,
        8: 4,
        W: 1,
        X: 2,
        Y: 3,
        Z: 4,
        9: 5,
        '*': 1,
        ' ': 1,
        0: 2,
        '#': 1

    }

    return phrase.toUpperCase().match(/[A-Z *#\d]/g).join('').replace(/[A-Z *#\d]/g,e=>alph[e]).split('').reduce((a,c) => a + Number(c),0);

  }

// Matrix Addition (261)

function matrixAddition(a, b){
    return a.map((e,i) => e.map((f,j) => f + b[i][j]));
  }

// Character with longest consecutive repetition (262)

function longestRepetition(s) {
    if(s.length == 0){return ['',0]}

    const smn = s.match(/([\w ])\1*/g).sort((a,b) => b.length-a.length);

    return [smn[0][0],smn[0].length];
  }

// Pascal's Triangle (263)

function pascalsTriangle(n) {

    if(n == 1){return [1]}
    
    let basic = [1,1];
    let counter = 2;
    const res = [1,1,1];

    while(counter != n){

        const smn = [];

        for(let i = 0; i<counter+1; i++){

            if(i == 0 || i == counter){smn.push(1)}
            else{
                smn.push(basic[i-1]+basic[i])
            }
        }

        basic = smn;
        counter++
        res.push(smn);

    }

    return res.flat();


  }

// Length of missing array (264)

function getLengthOfMissingArray(arrayOfArrays) {

    if(arrayOfArrays == null){return 0}
    if(arrayOfArrays.length == 0 || arrayOfArrays[0] == null){return 0}

    if(!arrayOfArrays.every(e=>e != null)){return 0}
    if(!arrayOfArrays.every(e=>e.length > 0)){return 0}

    const arr = arrayOfArrays.map(e=>e.length).sort((a,b) => a-b);
    let counter = arr[0];

    for(let i = 0; i<arr.length;i++){
        if(arr[i] != counter){return counter}
        counter++;
    }

  }
  




