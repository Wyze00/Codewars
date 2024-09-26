// Sort the odd (150)

function sortArray(array) {

    const smn = array.filter(e=>e%2!=0).sort((a,b)=>a-b);
    let coun = -1;

    return array.map((e) => {

        if(e%2 != 0){coun++; return smn[coun]}
        else{return e;}

    });
    
  }

// Find the missing letter (151)

function findMissingLetter(array){

    for(let i = 0; i<array.length;i++){

       if(array[i].charCodeAt() - array[i+1].charCodeAt() != -1){return String.fromCharCode(array[i].charCodeAt() + 1)}
    }
  
}

// Build Tower (152)

function towerBuilder(nFloors) {

    let flo = nFloors * 2 -1;
    let coun = 0;
    let smn = []

    for(let i = 0; i<nFloors;i++){

        smn.push('*'.repeat(flo).padStart(flo + coun).padEnd(flo + coun + coun))

        flo -= 2;
        coun++

    }

    return smn.reverse();
    
  }


// Highest Scoring Word (153)

function high(x){

    let smn = x.split(' ').map((e) => {

        return ([...e.toLowerCase()].reduce((a,c) => (c.charCodeAt() - 96) + a,0));

    });

    return x.split(' ')[smn.indexOf(Math.max(...smn))];

}

// Delete occurrences of an element if it occurs more than n times (154)

function deleteNth(arr,n){
    const myS = [...new Set(arr)];
    const myA = arr;

    for(let i=0;i<myS.length;i++){

        let coun = 0;

        for(let u = 0; u<myA.length;u++){

            if(myS[i] == myA[u]){coun++}
            if(myS[i] == myA[u] && coun > n ){delete myA[u]}

        }

    }    

    return myA.filter((e) => e);

  }


 