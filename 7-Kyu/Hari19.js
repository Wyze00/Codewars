// Is this a triangle? (74)

function isTriangle(a,b,c){
    if([...arguments].filter((e) => e > 0).length < 3){return  false } 
    
    else {

        let smn = [...arguments].sort((a,b) => b-a);

        if(smn[0] - smn[1] - smn[2] < 0){return  true}
        else{return false}

    }
}

// Ones and Zeros (75)

const binaryArrayToNumber = arr => {
    // let res = 0;
    let ary = arr.reverse()

    // for(let i = 0; i < arr.length; i++){
    //     res +=  2 ** i * ary[i]
    // }

    return (ary.map((e,i) => 2 ** i * e).reduce((a,c) => a + c,0));

  };

// Number of People in the Bus (76)

const number = function(busStops){

    return [...busStops].map((e) => e[0] - e[1]).reduce((a,c) => a + c,0);
  }

//  Odd or Even? (77)

function oddOrEven(array) {
    return (Math.abs(array.reduce((a,c) => a + c,0)) % 2 == 1 ) ? 'odd' : 'even';
 }



