// Divide and Conquer (51)

function divCon(x){

    let str = 0;
    let num = 0;

    for(let i = 0; i < x.length; i++) {

        if(typeof x[i] == 'string') {str += Number(x[i])}
        else { num += x[i]}

    }

    return num - str
}

// Nth Root of a Number (52)

function root(x, n) {
    
    let res = x;

    for(let i = 0; i < n - 1; i++) {

        res = Math.sqrt(x);
    }

    return res

  }

// List Filtering (53)

function filter_list(l) {

    return l.filter((e) => typeof e == 'number');
    
  }

// You're a square! (54)

const isSquare = function(n){

    return (Math.sqrt(n).toString().length > 10 || n < 0) ? false : true; 
  }

// Remove First and Last Character (55)

  function removeChar(str){

        let res = '';

        for(let i = 1; i < str.length - 1; i ++) {

            res += str[i]

        }

        return res;
   
   };
   



