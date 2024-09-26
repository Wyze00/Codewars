// WeIrD StRiNg CaSe (196)

function toWeirdCase(string){

    return string.split(' ').map((e,i) => e.split('').map((e,i) => i % 2 == 0 ? e.toUpperCase() : e.toLowerCase()).join('') ).join(' ');
  }

// Give me a Diamond (197)

function diamond(n){

    if(n <= 0 || n % 2 == 0){return null}
    if(n == 1){return '*\n'}
    

    const res1 = [];
    const res2 = [];


    for(let i = 1; i < n; i+=2){
        res1.push(' '.repeat((n-i)/2),'*'.repeat(i),'\n');
    }

    for(let i = n-2; i > 0 ; i-=2){
        res2.push(' '.repeat((n-i)/2),'*'.repeat(i),'\n');
    }

    return res1.join('') + '*'.repeat(n) + '\n' + res2.join('');

  }


// Rectangle into Squares (198)

function sqInRect(lng, wdth){

    let axb = lng * wdth;
    const res = [];

    if(lng == wdth || axb <= 0){return null}

    for(let i = Math.min.apply(null,[lng,wdth]); i > 0; i--){
    
        while(axb - (i**2) >= 0){
            res.push(i);
            axb -= i**2;
        }

    }

    return res;

  }

// IP Validation (199)

function isValidIP(str) {

    return str.split('.').filter((e) => {
        
        if(e[0] == '0' && e.length == 1){return true}
        if(e[0] == '0' && e.length > 1){return false}
        if(e.match(/[e \n]/)){return false}
        if(Number(e) < 256 && Number(e) > 0){return true}

    }).length == 4;

  }



