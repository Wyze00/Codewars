// Over The Road (210)

function overTheRoad(address, n){

    if(address > n*2){return false}
    
    let max = n * 2;
    return max - (address-1);
    
  }

// max diff - easy (211)

function maxDiff(list) {
    return list.length <= 1 ? 0 : Math.max(...list) - Math.min(...list);
  };

// Palindrome chain length (212)

const palindromeChainLength = function(n) {

    let coun = 0;

    let smn;

    smn = n;

    while(smn != Number([...String(smn)].reverse().join(''))){
        smn+= Number([...String(smn)].reverse().join(''));
        coun++
    }

    return coun;

  };

// Speed Control (213)

function gps(s, x) {
    return x.length <= 1 ? 0 : Math.max(...x.concat().slice(0,x.length-1).map((e,i) => Math.floor((3600 * (x[i+1] - e))/s)));
}

// Ordered Count of Characters (214)

const orderedCount = function (text) {
    const mySet = new Set(text)[Symbol.iterator]();
    const smn = []; 

    for(let i = 0; i<new Set(text).size; i++){

        const char = mySet.next()['value'];
        let coun = 0

        for(let u = 0; u < text.length; u++){
            if(text[u] == char){coun++}
        }

        smn.push([char,coun]);
    }

    return smn;

    
  }

// Halving Sum (215)

function halvingSum(n) {
    if(n == 1){return 1}
    return n + halvingSum(Math.floor(n/2))
}

// Sum of Odd Cubed Numbers (216)

function cubeOdd(arr) {

    if(arr.filter((e) => Number.isInteger(e)).length !== arr.length){return undefined}
    
    const smn = arr.filter((e) => e%2 != 0).reduce((a,c) => a + (c**3),0);
    
    return smn;

    }

// esreveR (217)

const reverse = function(array) {
    return array.map((_,i,a) => a[a.length-1-i]);
  }

// Lost number in number sequence (218)

function findDeletedNumber(arr, mixArr) {
    const a1 = arr.sort((a,b) => b-a);
    const a2 = mixArr.sort((a,b) => b-a);

    if(a1.length > a2.length){
        return a1.filter((e) => a2.indexOf(e) == -1)[0];
    }

    else if(a2.length > a1.length){
        return a2.filter((e) => a1.indexOf(e) == -1)[0]
    }
    else{return 0}

  }


// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer (219)

function getFirstPython(list) {
    const sort = list.find((e) => e.language == 'Python');

    return sort == undefined ? 'There will be no Python developers' : `${sort.firstName}, ${sort.country}`;

  }

// My Language Skills (220)

function myLanguages(results) {

    const myA = [];

    for(let i in results){
        if(results[i] >= 60){myA.push([i,results[i]])}
    }

    return myA.sort((a,b) => b[1]-a[1]).map((e)=>e[0]);
}


