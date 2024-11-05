// Scramblies (399)

function scramble(str1, str2) {
    
    const s1 = {};
    const s2 = {};

    for(let i = 0; i<str1.length; i++){

        if(!s1[str1[i]]){
            s1[str1[i]] = 1;
        } else {
            s1[str1[i]]++;
        }
        
    }

    for(let i = 0; i<str2.length; i++){

        if(!s2[str2[i]]){
            s2[str2[i]] = 1;
        } else {
            s2[str2[i]]++;
        }
        
    }

    for(let e in s2){
        if(s1[e] < s2[e] || !s1[e]){return false}
    }

    return true
  }


// Number of trailing zeros of N! (400) 

function zeros (n) {

    let counter = 0;

    for(let i = 5; i<=n; i*=5){

        counter += Math.floor(n/i);
    }

    return counter;
}

// Is a number prime? (401)

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    
    return true;
}


