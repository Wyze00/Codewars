// Categorize New Member (46)

function openOrSenior(data){
     
    let res = [];

    for(let i = 0; i < data.length; i++) {

        if(data[i][0] >= 55 && data[i][1] > 7) {res.push('Senior')}
        else{res.push('Open')}

    }

    return res;

  }

 // Growth of a Population (47)

 function nbYear(p0, percent, aug, p) {

    let pd = p0;
    let count = 0;

    while(pd <= p) {

        pd = Math.round(pd * (percent / 100 + 1) + aug) ;
        count++

    }

    return count;
}

// noobCode 03: CHECK THESE LETTERS... see if letters in "String 2" are present in "String 1" (48)
 
function letterCheck(arr) {

    for(let i = 0; i < arr[1].length; i++) {

        let count = 0;

        for(let u = 0; u < arr[0].length; u++) {

            if(arr[1][i] == (arr[0][u]).toLowerCase() || arr[1][i] == (arr[0][u]).toUpperCase() ) {

                count++
            }

        }

        if(count == 0) {return false}

    }


    return true;

}

// Simple Fun #190: Folding Paper (49)

function folding(a,b){

    let a1;
    let b1;

    if(a > b) {a1 = a; b1 = b}
    else if(b > a) {a1 = b; b1 = a}
    else {return 1}

    return 1 + folding(a1-b1,b1)  
    
  }

// Switcheroo (50)

function switcheroo(x){

    return x.split('').map((e) => (e == 'a') ? 'b' : (e == 'b') ? 'a' : e).join('');

}



