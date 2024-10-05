// zipWith (296)

function zipWith(fn,a0,a1) {
  
    if(a0.length == 0 || a1.length == 0){return []}
    if(a0[0] == null){throw new ReferenceError()}
    

    if(a0.length < a1.length){
        return a0
            .map((e,i) => fn(e,a1[i]));

    } else {
        return a1
            .map((e,i) => fn(a0[i],e))
    
    }
}
  
// Twisted Sum (297)

function twistedSum(n) {

    const res = Array.from({length: Math.abs(n)});

    return res.map((e,i) => {

        const ang = String(i+1);
        
        if(ang.length == 1){return Number(ang)}
        else {
            return ang.split('').reduce((a,c) => a + Number(c),0);
        }

    }).reduce((a,c) => a + c,0);

  }




