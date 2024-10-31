// Product of consecutive Fib numbers (325)

function productFib(prod){

    const fib = [1,1,2];
    let res = fib[fib.length-1] * fib[fib.length-2];

    while(res != prod){

        if(res > prod){return [...fib.slice(-2,-1),...fib.slice(-1),false]}

        fib.push(fib.concat().slice(-2).reduce((a,c) => a + c,0));
        res = fib[fib.length-1] * fib[fib.length-2]
    }

    return [...fib.slice(-2,-1),...fib.slice(-1),true];
}


// Extract the domain name from a URL (326)

function domainName(url){

    return url.match(/(https?:\/\/)?(www[.])?([^.]+)/);
}
