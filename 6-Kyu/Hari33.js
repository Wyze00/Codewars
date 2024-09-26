// Take a Ten Minutes Walk (133)

function isValidWalk(walk) {

    if(walk.length != 10){return false}

    return walk.sort().map((e) => {
        return {
            n: 1,
            s: -1,
            w: 2,
            e: -2, 
        }[e]
    }).reduce((a,c) => a + c) == 0;
  }

// Replace With Alphabet Position (134)

function alphabetPosition(text) {

    if(text.match(/[a-zA-Z]/g) == null){return ''}

    return text.toLowerCase().match(/[a-z]/g).map((e) => e.charCodeAt() -96).join(' ');
  }

// Persistent Bugger (135)

function persistence(num) {

    let res = 0;

    while(num > 9){
        num = String(num).split('').reduce((a,c) => a * c,1);
        res++;
    }
    return res;
 }

// Convert string to camel case (136)

function toCamelCase(str){
    return str.split(/[-_ ]/).map((e,i,a) => {
        if(i == 0){return e;}
        else{
            return e[0].toUpperCase() + a[i].slice(1);
        }
    }).join('');
}
