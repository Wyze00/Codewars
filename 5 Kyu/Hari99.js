// Count IP Addresses (340)

function ipsBetween(start, end){

    const st = start.split('.').map(e=>Number(e)).reverse();
    const ed = end.split('.').map(e=>Number(e)).reverse();

    return (ed.reduce((a,c,i) => a + (c - st[i]) * 256 ** (i) ,0));
}

// Simple frequency sort (341)

function solve(arr){

    const newArr = arr.sort((a,b) => a-b);

    const ind = new Map();

    return (newArr.sort((a,b) => {

        if(!ind.has(a)){
            ind.set(a,newArr.lastIndexOf(a)-newArr.indexOf(a));
        }

        if(!ind.has(b)){
            ind.set(b,newArr.lastIndexOf(b)-newArr.indexOf(b));
        }
        
        const myA = ind.get(a);
        const myB = ind.get(b);

        if(myB-myA == 0){
            return a-b;
        } 

        return myB-myA;
    }));

  }
