// Integer depth (302)

function computeDepth (x){

    const res = [];
    let coun = 1;

    while((new Set(res).size) != 10){

        res.push(...String(x*coun).split(''));
        coun++;
    }

    return coun-1;
  }

// Triangle type (303)

/* Should return ᐃ type:
  0 : if ᐃ cannot be made with given sides
  1 : acute ᐃ
  2 : right ᐃ
  3 : obtuse ᐃ
*/
function triangleType(a, b, c){

    const [a1,b1,c1] = [a,b,c].sort((a,b) => a-b);

    if( a1+b1 <= c1 ){return 0}

    const res = Math.pow(a1,2) + Math.pow(b1,2) - Math.pow(c1,2);

    return res == 0 ? 2 : res > 0 ? 1 : 3;
  }
