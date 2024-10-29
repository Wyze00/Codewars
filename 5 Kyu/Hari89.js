// Maximum subarray sum (323)

const maxSequence = function(arr){

    let max = 0;

    for(let i = 0; i<arr.length; i++){

        let temp = 0;

        for(let j = i; j<=arr.length; j++){

            temp += arr[j];

            if(temp > max){max = temp;}
        }
    }

    return max;
}

// First non-repeating character

function firstNonRepeatingLetter(s) {

    const lower = s.toLowerCase();

    for(let i = 0; i< s.length; i++){
        if(lower.indexOf(lower[i]) == lower.lastIndexOf(lower[i])){return s[i]}
    }

    return "";
}
