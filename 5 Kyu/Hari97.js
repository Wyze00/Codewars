// Pick peaks (337)

function pickPeaks(arr){
    
    let tmp;
    let pos;
    let check = false;

    const res = {
        pos: [],
        peaks: []
    }

    for(let i = 0; i<arr.length-2; i++){

        if(arr[i] < arr[i+1] && arr[i+2] < arr[i+1]){
            res.pos.push(i+1);
            res.peaks.push(arr[i+1]);
            check = false;

        } else if(arr[i] < arr[i+1] && arr[i+2] == arr[i+1]){
            tmp = arr[i+1];
            pos = i+1;
            check = true;

        } else if(arr[i] == arr[i+1] && arr[i+2] < arr[i+1] && check){
            res.pos.push(pos);
            res.peaks.push(tmp);
            check = false;
        }
    }
    
    return res;
  }

// Sum of Pairs (338)

// function sumPairs(ints, s) {

//     if(ints.length == 0){return undefined}

//     const smn = [];
//     let small = 999999;

//     for(let i = 0; i<ints.length; i++){
        
//         let j = ints.indexOf(s-ints[i],i+1);

//         if(j == -1 || j-i == small){continue;}

//         small = j-i;
        
//         smn[0] = ints[i];
//         smn[1] = ints[j];
//     }

//     return smn;
//   }


function sumPairs(ints, s) {
    if (ints.length < 2) return undefined;
    
    const seen = new Map();
    let min = Infinity;
    let res = undefined;
    
    for (let i = 0; i<ints.length; i++) {

      const pair = s - ints[i];
      
      if (seen.has(pair)) {
        
        const j = seen.get(pair);

        if (i - j < min) {

          min = i - j;
          res = [pair,ints[i]];
        }
      }
      
      seen.set(ints[i], i);
    }
    
    return res;
  }


