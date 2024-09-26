// Testing 1-2-3 (82)

const number=function(array){
    return array.map((e,i) => `${i+1}: ${e}`)
  }

// The highest profit wins! (83)

function minMax(arr){
    return [Math.min(...arr),Math.max(...arr)]; // fix me!
  }

// Find the stray number (84)

function stray(numbers) {
    
    let coun = 0;
    let max = Math.max(...numbers);

    for(let i = 0; i<numbers.length; i++) {

        if(numbers[i] == max) {coun++}
    }

    return (coun == 1) ? Math.max(...numbers) : Math.min(...numbers);
  }

// Don't give me five! (85)

function dontGiveMeFive(start, end){

    let coun = 0;

  for(let i = start; i <= end; i++) {

    if((i).toString().match(/5/)){console.log(i)}
    else{coun++}
  }

  return coun;
}

