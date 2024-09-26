// Maximum Product (157)

function adjacentElementsProduct(array) {

    const smn = Math.max(...array.map((e,i) => e * array[i+1]).filter((e) => !!e));

    return smn == -Infinity ? 0 : smn; 
  }

// Greet Me (158)

const greet = function(name) {

    return (`Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`);

};

// Find the vowels (159)

function vowelIndices(word){
    return (word.split('').map((e,i) => e.match(/[aiueoAIUEOyY]/) ? i+1 : false).filter((e) => e));
  }

// Triangular Treasure (160)

function triangular( n ) {
    if(n <= 0){return 0}
    if(n % 2 != 0 ){return n + (n-1)/2*n}
    if(n % 2 == 0){return (n+1) * (n/2)}
}

// Power of two (161)
 
function isPowerOfTwo(n){
    if(n <= 0){return false}
    return (n.toString(2).match(/1/g).length == 1);
 
}

// Most digits (162)

function findLongest(array){
    let smn = String(Math.max(...array)).length

    return array.filter((e) => String(e).length == smn)[0]
  }

// Human readable duration format (163)

function formatDuration (seconds) {

    if(seconds == 0){return 'now'}

    const res = [];

    if(seconds >= 31536000){
        let aja = (parseInt(seconds / 31536000));

        if(aja == 1){ res.push(`${aja} year`); seconds = seconds - (31536000 * parseInt(seconds / 31536000))}
        else{res.push(`${aja} years`); seconds = (seconds - (31536000 * parseInt(seconds / 31536000)))}
       
    }

    if(seconds >= 86400 && seconds <= 31535999){
        let aja = (parseInt(seconds / 86400));

        if(aja == 1){ res.push(`${aja} day`); seconds = seconds - (86400 * parseInt(seconds / 86400))}
        else{res.push(`${aja} days`); seconds = (seconds - (86400 * parseInt(seconds / 86400)))}
       
    }


    if(seconds >= 3600 && seconds <= 86399){
        let aja = (parseInt(seconds / 3600));

        if(aja == 1){ res.push(`${aja} hour`); seconds = seconds - (3600 * parseInt(seconds / 3600))}
        else{res.push(`${aja} hours`); seconds = (seconds - (3600 * parseInt(seconds / 3600)))}
       
    }

    if(seconds >= 60 && seconds <= 3599){
        let aja = (parseInt(seconds / 60));

        if(aja == 1){ res.push(`${aja} minute`); seconds = seconds - (60 * parseInt(seconds / 60))}
        else{res.push(`${aja} minutes`); seconds = (seconds - (60 * parseInt(seconds / 60)))}
    }

    if(seconds > 0 && seconds <= 59){

        if(seconds == 1){ res.push(`${seconds} second`)}
        else{res.push(`${seconds} seconds`)}
    }

    if(res.length == 1){return res[0]}
    else if(res.length == 2){return `${res[0]} and ${res[1]}`}
    else{
        let first = res.slice(0,-2);
        let last = res.slice(-2);

        let ini = '';

        for(let i = 0; i< first.length;i++){
            ini = ini + `${first[i]}, `
        }

        ini = ini + `${last[0]} and ${last[1]}`

        return ini;

    }
    
  }

