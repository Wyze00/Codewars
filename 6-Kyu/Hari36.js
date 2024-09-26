// Equal Sides Of An Array 

function findEvenIndex(arr){


    let smn = arr.reduce((a,c)=> a + c,0) / 2;
    let count = 0;
  
    while(smn > 0){
  
      smn = smn - arr[count]
      count++
  
    }

    console.log(count);

    return arr.slice(0, count - 1).reduce((a,c) => a + c,0) == arr.slice(count).reduce((a,c) => a + c,0) ? count - 1 : -1;
  }

// Split Strings (147)

function solution(str){

    const res = [];

    for(let i = 0; i<str.length; i += 2){

        res.push(str[i] + str[i+1])

    }

    return res.map((e) => e.replace('undefined','_'))
   
}

// Find the unique number (148)

function findUniNum(arr) {
    return arr.filter(e=> arr.indexOf(e) == arr.lastIndexOf(e))[0];
  }

// Find the unique string (149)

function findUniqStr(arr) {

    return arr[arr.map((e) => {

        if(e == ''){return ''}
        return [...new Set(String(e.toLowerCase().match(/[\u0000-\uffffff]/g).sort().join('').trim()))].join('');

    
    }).flat().map((e,i,a) => {

        return a.indexOf(e) == a.lastIndexOf(e) ? a.indexOf(e) : 0

    }).reduce((a,c) => c + a)]
   
}




