// Mumbling (60)

function accum(s) {
	
    const char = s.split('');
    const res = [];


    for(let i = 0; i < char.length; i++) {

        let smn = '';

        for(let u = 0; u < i + 1; u++ ) {

            if(u == 0) {smn += (char[i]).toUpperCase()}
            else{smn += (char[i].toLowerCase())}
        }

        res.push(smn);

    }

    return res.join('-')

}

// Isograms (61)

function isIsogram(str){

    const strs = str.toLowerCase()

    for(let i = 0; i < strs.length; i++) {

        for(let u = i + 1; u < strs.length; u++ ) {

            if(strs[i] == strs[u]) {return false}

        }


    }

    return true

  }

// Exes and Ohs (62)

function XO(str) {

    const strs = str.toLowerCase();

    let satu = 0, dua = 0;

    for(let i = 0; i < strs.length; i++){

        if(strs[i] == 'x'){satu++}
        else if(strs[i] == 'o'){dua++}


    }

    if(satu == dua){return true}

    return false;

}

// Shortest Word (63) 

function findShort(s){
    return s.split(' ').map((e) => e.length).sort((a,b) => a-b)[0]
}


