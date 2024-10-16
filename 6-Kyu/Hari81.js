// Backwards Read Primes (311)

function backwardsPrime(start, stop){
    
    const res = [];

    for(let i = start; i<=stop; i++){

        const swap = Number(String(i).split('').reverse().join(''));

        if(swap%2==0 || swap == i){continue;}

        for(let j = (i-1)/2; j>0; j--){

            if(j == 1){

                for(let k = (swap-1)/2; k>0; k--){

                    if(k == 1){res.push(i)}

                    if(swap%k==0){break;}
                }
            }

            if(i%j==0){break;}
        }
    }

    return res
  }
