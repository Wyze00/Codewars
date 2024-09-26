//  Is he gonna survive? (3)

// function hero(bullets, dragons){
    
//         if((dragons * 2) - bullets > 0 ) {
//             return false;
//         }

//         return true;

//     }

// const hero = (bullets,dragons) => (dragons*2 - bullets) > 0? false : true;

// Sentence Smash (4)

// function smash (words) {

//     let res = '';

//     for(let i = 0; i < words.length; i++) {
//         res += words[i];
//         res += ' ';
//     }

//     res = res.trimEnd();


//     return res;
//  };

const smash = (words) => {

    let res = '';

    words.forEach((e) => {
        res += e;
        res += ' ';
    }) 
    
    res = res.trimEnd();

    return res;

}
