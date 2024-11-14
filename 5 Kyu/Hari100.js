// Gap in Primes (342)

function gap(g, m, n) {
    
    const res = [];
    const myMap = new Map();

    for(let i = m; i<=n; i++){

        const tmp = isPrime(i);

        if(tmp){
            res.push(i);
        }
    }

    function isPrime(n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 === 0 || n % 3 === 0) return false;
        
        for (let i = 5; i * i <= n; i += 6) {
            if (n % i === 0 || n % (i + 2) === 0) return false;
        }
        
        return true;
    }

    for(let i = 0; i<res.length-2; i++){

        if(res[i+1] - res[i] == g){
            return [res[i],res[i+1]];
        }
    }

    return null;
}

// Not very secure (343)

function alphanumeric(string){

    const match = string.match(/([a-zA-Z]|\d)+/);

    return match ? match[0].length == string.length : false;
  }


