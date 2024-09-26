// Does my number look big in this? (137)

function narcissistic(value) {
    return String(value).split('').reduce((a,c,i,ar) =>  Number(c) ** ar.length + a ,0) == value;
}

// Your order, please (138)

function order(words){

    if(words == ''){return ''}

    const match = words.match(/\d/g).sort();

    return words.split(' ').map((e,i,a) => {

        for(let u = 0; u<a.length; u++){
            if(a[u].match(match[i]) != null){return a[u]}
        }

    }).join(' ');

  }

// Tribonacci Sequence (139)

function tribonacci(signature,n){

    if(n == 0){return []}
    if(signature.length < 3 || n < 3){return signature.slice(0,n)}

    while(signature.length != n){
        signature.push(signature.slice(-3).reduce((a,c) => a + c))
    }

    return signature;
    
  }

// Unique In Order (140)

const uniqueInOrder=function(iterable){

    if(typeof iterable == 'object'){return iterable.filter((e,i,a) => String(e) != a[i+1])}

    return iterable.split(('')).filter((e,i,a) => String(e) != a[i+1])
  }

// Detect Pangram (141)

function isPangram(string){
    return new Set(string.toLowerCase().match(/[a-z]/g)).size == 26;
  }


