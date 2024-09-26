// Multiplication table (223)

const multiplicationTable = function(size) {
    const myA = [];
    const smn = []
    

    for(let i = 1; i < size + 1;i++){
       smn.push(i);
    }

    myA.push(smn)

    for(let i = 1; i < size;i++){
        myA.push(myA[i-1].map((e,i)=>e+smn[i]))
    }

    return myA;

  }

// Good vs Evil (224)

function goodVsEvil(good, evil){
    const myG = [1,2,3,3,4,10];
    const myE = [1,2,2,2,3,5,10];
    const res = good.split(' ').reduce((a,c,i) => a + (Number(c)*myG[i]),0) - evil.split(' ').reduce((a,c,i) => a + (Number(c)*myE[i]),0);

    return res == 0 ? "Battle Result: No victor on this battle field" : res > 0 ? "Battle Result: Good triumphs over Evil" : "Battle Result: Evil eradicates all trace of Good";
}

// Help the bookseller ! (225)

function stockList(books, categories) {

    if(+books == 0){return ''};

    const myS = books.sort();
    const res = [];

    for(let i = 0; i<categories.length; i++){

        let coun = 0;

        for(let u = 0; u<myS.length;u++){

            if(myS[u][0] == categories[i]){
                coun += Number(myS[u].split(' ')[1]);
            }
        
        }
            res.push(`(${categories[i]} : ${coun})`);

    }

    return res.join(' - ');
}

