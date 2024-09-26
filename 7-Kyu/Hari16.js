// Credit Card Mask (64)

function maskify(cc) {

    if(cc.length < 5) {return cc}
    else {

        return cc.split('').map((e,i) => {

            if(i < cc.length - 4) { return e ='#'}
            else{return e}

        }).join('')

    }

}

// Beginner Series #3 Sum of Numbers (65)

function getSum(a, b){
   let res = 0;

   for(let i = Math.min(a,b); i <= Math.max(a,b); i++ ){

    res += i;

   }

   return res;
}

// Friend or Foe? (66)

function friend(friends){

    return friends.filter((e) => e.length == 4)

  }

// Two to One (67)

function longest(s1, s2) {
    
    let char = s1+s2;

    return char.split('').map((e,i) => {

        for(let u = i; u >= 0; u-- ) {
            
            if(u == 0){return e}
            else if(e == char[u-1]){return ''}

        }

    }).filter((e) => e.length == 1).sort().join('');

  }
