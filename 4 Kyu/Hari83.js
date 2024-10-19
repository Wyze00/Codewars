// Next bigger number with the same digits (314)

function nextBigger(n){

    let num = String(n).split('');
    let ctr = 0;

    if(n < 10){
        return -1;
    }

    for(let i  = 0; i<num.length-1; i++){

        if(num[i] >= num[i+1]){
            ctr++;
        }

        if(ctr == num.length-1){
            return -1;
        }
    }

    let rvs = num.reverse();
    let smn;
    let big;

    for(let i = 0; i<rvs.length-1; i++){

        if(rvs[i] > rvs[i+1]){
            smn = rvs.slice(0,i+2);
            rvs = rvs.slice(i+2);
            big = num[i+1];
            break;
        } 
    }   

    return Number(`${rvs.reverse().join('')}${smn.splice(smn.findIndex(e=>e==smn.concat().sort().find(e=>big<e)),1).join('')}${smn.sort().join('')}`);
  }

// Balanced Number (Special Numbers Series #1 ) (315)

function balancedNum(number){

    if(number < 10){
        return "Balanced";
    }
    
    const num = String(number).split('');

    if(num.length == 1 || num.length == 2){return "Balanced"}

    if(num.length % 2 == 0){

        return num.slice(0,num.length/2-1).reduce((a,c) => a + Number(c),0) == num.slice(-(num.length/2-1)).reduce((a,c) => a + Number(c),0)
                ? "Balanced"
                : "Not Balanced";

    } else {

        return num.slice(0,(num.length-1)/2).reduce((a,c) => a + Number(c),0) == num.slice(-(num.length-1)/2).reduce((a,c) => a + Number(c),0)
                ? "Balanced"
                : "Not Balanced";
    }
}
