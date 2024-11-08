// Perimeter of squares in a rectangle  (336)

function perimeter(n) {

    if(n == 0){return 4}
    
    const fib = [1,1];

    while(fib.length != n+1){
        fib.push(fib[fib.length-1]+fib[fib.length-2])
    }

    return fib.reduce((a,c) => a + c,0)*4
}

// Integers: Recreation One (337)

function listSquared(m, n) {

    const res = [];

    for(let i = m; i<=n; i++){

        const temp = [];

        for(let j = i; j>=1; j--){
            if(i%j == 0){temp.push(j*j)}
        }

        const red = Math.sqrt(temp.reduce((a,b) => a+b,0));

        if(red % 1 == 0){res.push([i,temp.reduce((a,b)=>a+b,0)])}
    }

    return res;
}

// 






