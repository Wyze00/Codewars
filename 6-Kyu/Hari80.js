// Largest 5 digit number in a series (308)

function solution(digits){

    const dgt = digits.length - 4;
    const res = [];

    for(let i = 0; i<dgt; i++){
        res.push(Number(digits.slice(i,i+5)));
    }

    return Math.max(...res);
}

// Nth Smallest Element (Array Series #4) (309)

function nthSmallest(arr, pos){
    return arr.sort((a,b) => a-b)[pos-1]
  }


//  Simple Fun #65: Matrix Elements Sum (310)

function matrixElementsSum(matrix) {
    
    const smn = [];

     matrix.map((e,i) => {
        if(i == 0){smn.push(e); return 1};
        const ss = [];
        e.map((j,k) => {
            if(smn[i-1][k] == 0){ss.push(0); return 0}
            ss.push(j);
            return 0
        });
        smn.push(ss);
        return 1;
    });
    return (smn.reduce((a,c) => a + c.reduce((a,c) => a + c),0));
  }