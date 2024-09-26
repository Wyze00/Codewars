// Binary Addition (72)

function addBinary(a,b) {
    
    function bin(aa) {
         if(aa == 1){return '1'}
         else if(aa % 2 == 0 ){ return bin(aa / 2) + '0'}
         else if(aa % 2 == 1) { return bin((aa-1) / 2) + '1'}
    }

    return bin(a+b)

}

// Sum of odd numbers (73)

function rowSumOddNumbers(n) {
    
    function rec(e){
        if(e == 1) {return 1}
        return e + rec(e-1)
    }

    if(n == 1){return 1}
    else if(n <= 0){return false}

    else {

        let num = (rec(n-1) * 2) + 1;
        
        let res = 0;
        
        for(let i = 0; i < n; i++, num = num + 2){
            res = res + num
        }

        return res;
    }

}


