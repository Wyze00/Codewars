// Count the divisors of a number

function getDivisorsCnt(n){

    if(n == 1){return 1}
    if(n % 2 != 0 && n % 3 != 0 && n % 5 != 0 && n % 7 != 0){return 2}


    let dua = 2;
    let tiga = 3;
    let lima = 5;
    let tujuh = 7;
    let smn = [];

    while(dua <= n){if(n % dua == 0){smn.push(dua); dua+=2} else{dua+=2}}
    while(tiga <= n){if(n % tiga == 0){smn.push(tiga); tiga+=3} else{tiga+=3}}
    while(lima <= n){if(n % lima == 0){smn.push(lima); lima+=5} else{lima+=5}}
    while(tujuh <= n){if(n % tujuh == 0){smn.push(tujuh); tujuh+=7} else{tujuh+=7}}

    return new Set(smn).size + 1;
    
}

// Anagram Detection (95)

const isAnagram = function(test, original) {

    const satu = test.split('').map((e) => e.toLowerCase()).sort().join('');
    const dua = original.split('').map((e) => e.toLowerCase()).sort().join('');
    const ttg = (test.length > original.length) ? test.length : original.length;

    for(let i = 0; i<ttg; i++){
        if(satu[i] != dua[i]){return false}
    }

    return true
};

// Find the capitals (96)

const capitals = function (word) {

	return word.split('').filter((e => e.charCodeAt() <= 90)).map((e) => word.indexOf(e));
};

// Small enough? - Beginner (97)

function smallEnough(a, limit){

    for(let i = 0; i<a.length; i++){
        if(a[i] > limit){return false}
    }

    return true;

}

// Two Oldest Ages (98)

function twoOldestAges(ages){

    const smn = ages.sort((a,b) => b-a);

    return [smn[1],smn[0]];

}





