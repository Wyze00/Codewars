// Sums of Parts (226)

function partsSums(ls) {

    let myR = ls.reduce((a,c) => a+c,0);
    const res = [myR];

    for(let i = 0; i<ls.length; i++){
        myR -= ls[i]
        res.push(myR);

    }

    return res;
    
}

// Equal Sides Of An Array (227)

function findEvenIndex(arr){

    if(arr.length == 0){return -1}
    if(arr.slice(1,arr.length).reduce((a,c) => a + c,0) == 0){return 0};

    for(let i = 0; i<arr.length; i++){
        if(arr.slice(0,i+1).reduce((a,c) => a+c,0) == arr.slice(i+2,arr.length).reduce((a,c) => a+c,0)){return i+1};
    }

    return -1;

}

// Build a pile of Cubes (228)

function findNb(m) {

    if(m < 0){return -1}

    let coun = 1;
    let res = 0;

    while(res !== m){

        if(res > m){return -1}

        res += Math.pow(coun,3);
        coun++;

    }

    return coun-1;
}

// Reverse or rotate? (229)

function revrot(str, sz) {

    if(str == '' || sz <= 0){return ''}
    if(sz > str.length){return ''}

    const myR = new RegExp(`\\d{${sz}}`,'g');

    const myMatch = str.match(myR);

    return myMatch.map((e) => {

        if(Number.isInteger(e.split('').reduce((a,c) => a + Number(c),0)/2)){
            return e.split('').reverse().join('');
        }

        return e.slice(1) + e[0];

    }).join('');
}

// Find the missing term in an Arithmetic Progression (230)

const findMissing = function (list) {  

    let diff = list[1] - list[0];

    if(diff < 0){
        list.reverse();
        diff = list[1] - list[0];
    }

    for(let i = 0; i<list.length-1; i++){

        if(list[i+1] - list[i] < diff){

            const myD = list[list.length-1] - list[list.length-2];
            for(let a = list.length-1; a>0;a--){
                if(list[a] - list[a-1] !== myD){return list[a]-myD}
            }
        }
        if(list[i+1] - list[i] != diff){return list[i] + diff}
    }

  }

