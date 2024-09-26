// Encrypt this! (231)

const encryptThis = function(text) {
    return text.split(' ').map((e) => {

        if(e.length == 1){return e.charCodeAt()}
        if(e.length == 2){return e.charCodeAt() + e[1]}

        return String(e[0].charCodeAt()) + e[e.length-1] + e.slice(2,e.length-1) + e[1];
    }).join(' ');
  }

// Decipher this! (232)

function decipherThis(str) {

        return str.split(' ').map((e) => {

            return e.replace(/(\d+)(\w?)(\w*)(\w$)/,(e,p1,p2,p3,p4) => {
                
                if(!isNaN(e)){return String.fromCodePoint(e)}

                return String.fromCharCode(p1) + p4 + p3 + p2;
            }); 

        }).join(' ');

    }

// Data Reverse (233)

function dataReverse(data) {
    return data.join('').match(/\d{8}/g).reverse().join('').split('').map((e) => Number(e));
  }

// Meeting (234)

function meeting(s) {
    return s.split(';').map((e) => '(' + e.toUpperCase().split(':').reverse().join(', ') + ')').sort().join('');
}

// Consonant value (235)

function solve(s) {
    return Math.max(...s.toLowerCase().match(/[^aiueo]+/g).map((e) => e.split('').reduce((a,c) => a + (c.charCodeAt(0)-96),0)));
  };



