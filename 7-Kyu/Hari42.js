// Consecutive strings (181)

function longestConsec(strarr, k) {

    if(k <= 0 || strarr.length + 1 - k <= 0){return ''}

    const res = [];

    for(let i = 0; i < strarr.length + 1 - k; i++){

        let str = '';

        for(let u = 0; u < k; u++){
            str = str + strarr[i + u];
        }

        res.push(str);

    }

    return res.sort((a,b) => b.length-a.length)[0];

}

//  Write Number in Expanded Form (182)

function expandedForm(num) {
    return String(num).split('').reverse().map((e,i) => e * (10**i)).reverse().filter((e) => e).join(' + ');
  }

// Are they the "same"? (183)

function comp(array1, array2){

    if(array1 == null || array2 == null){return false}

    const ar1 = array1.sort((a,b) => a-b);
    return  array2.map(e=>Math.sqrt(e)).sort((a,b) => a-b).every((e,i) => e == ar1[i]);
  }

// Bouncing Balls (184)

function bouncingBall(h,  bounce,  window) {
    if(h <= 0 || bounce > 1 || bounce <= 0 || window >= h){return -1}

    let coun = 1;

    while(h > window){

        h = h * bounce;

        console.log(h);

        if(h > window) {coun += 2;}
        
    }

    return coun;

  }

// Which are in? (185)

function inArray(array1,array2){

    return array1.filter((e) => {

        const reg = new RegExp(e);

        if(array2.filter((e) => e.match(reg) != null).length !== 0){return e}

    }).sort();
  }

  