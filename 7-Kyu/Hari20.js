// Reverse words (78)

function reverseWords(str) {
    return str.split(' ').map((e) => e.split('').reverse().join('') ).join(' '); 
  }

// Find the divisors! (79)

function divisors(integer) {  
    const res = [];

    for(let i = 2; i < integer; i++ ) {

        if(integer % i == 0){res.push(i)}

    }

    return (res.length == 0) ? `${integer} is prime` : res;

}

// Sum of the first nth term of Series (80)

function SeriesSum(n) {
    
    let coun = 1;
    let res = 0;

    for(let i = 0; i < n; i++, coun += 3){

        res += 1/coun

    }

    return res.toFixed(2)

  }

// Remove the minimum (81) 

function removeSmallest(numbers) {   

    let min = Math.min(...numbers);
    let res = [];

    for(let i = 0; i < numbers.length; i++){

        if(numbers[i] == min){min = Number.POSITIVE_INFINITY} 
        else{res.push(numbers[i])}

    }
    
    return res;
  }





