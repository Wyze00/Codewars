// Red8ce b8t grow (1)

function grow(x){
    
    let param = x;
    let result = 1;


    for(let i = 0; i < param.length; i++ ){

        result = result * param[i];

    }


    return result;

}

// Reversed Sequence (2)

function reverseSeq(n){

    let result = [];
    // let coun = 0;

    for(let i = n; i > 0; i--) {
        result.push(i)
        // coun += 1;
    }

    return result;
  };
