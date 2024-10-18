// Steps in Primes (312)

function step(g, m, n) {
    
    const res = [];

    function prime(ns){

        for(let i = (ns+1)/2; i>=0; i--){

            if(ns % i == 0 && i != 1){return false;}

            if(i == 1){

                let temp = ns+g;

                for(let j = temp-1; j>=1; j--){


                    if(temp%j == 0 && j != 1){return false;}

                    if(j == 1){
                        res.push(ns);
                        res.push(temp);
                        return true;
                    }
                }
            }

            if(i == 1){
                break;
            }
        }
    }

    for(let i = m; i<n; i++){

        if(i % 2 == 0){continue;}
        else{ 

            const val = prime(i);

            if(val){
                // break;
            }

         }
    }

    return res;
}

// Transform To Prime (313)

function minimumNumber(numbers){
    
    let num = numbers.reduce((a,c) => a+c,0);
    let counter = 0;
    let term = true;

    while(term){

        if(num % 2 == 0){counter++; num++; continue;}

        let temp = (num+1)/2;

        while(temp > 0){

            if(num % temp == 0 && temp != 1){break;}

            if(temp == 1){term = false; break;}

            temp--;
        }

        num++;
        counter++;
    }
    
    return --counter;
  }

//