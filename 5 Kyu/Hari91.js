// String incrementer (397)

function incrementString (strng) {
    
    const match = strng.match(/(\d+$)/);

    if(!match){
        return strng + 1;
    }   

    return (strng.slice(0,strng.length-match[0].length) + (Number(match[0])+1).toString().padStart(match[0].length,0));
}

// Weight for weight (398)

function orderWeight(strng) {

    const ar = strng.split(' ');

    return ar.sort((a,b) => {

        const wA = (a.split('').reduce((a,c) => a + Number(c),0));
        const wB = (b.split('').reduce((b,c) => b + Number(c),0));

        if(wA == wB){
            return a.localeCompare(b); 
        }

        return wA-wB;
    }).join(' ');
}