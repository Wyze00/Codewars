// Multiples of 3 or 5 (123)

function solution(number){

    if(number <= 3){return 0}

    const smn = [];

    for(let i = number-1; i > 0; i--){
        if(i % 3 == 0){smn.push(i)}
        else if(i % 5 == 0){smn.push(i)}
    }

  return smn.reduce((a,c) => a+c)
}

// Who likes it? (124)

function likes(names) {
    const lth = names.length;

    return (lth == 0) ? `no one likes this` : (lth == 1) ? `${names[0]} likes this` : (lth == 2) ? `${names[0]} and ${names[1]} like this` : (lth == 3) ? `${names[0]}, ${names[1]} and ${names[2]} like this` : `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    
  }

// Find the odd int (125)

function findOdd(A) {

    const num = [...new Set(A)]

    for(let i = 0; i < num.length; i++){

        let smn = 0;

        for(let u = 0; u < A.length; u++){
            if(A[u] == num[i]){smn++}
        }

        if(smn % 2!= 0){return num[i]}

    }

    return 0;
  }

  


