// Srot the inner ctonnet in dsnnieedcg oredr (288)

function sortTheInnerContent(words){
    

    return (words.split(' ').map((e) => {

        if(e.length > 3){
            return(e[0] + e.slice(1,e.length-1).split('').sort((a,b) => b.charCodeAt()-a.charCodeAt() ).join('') + e[e.length-1]);
        }
        return e;

    }).join(' '));

  }

// Format words into a sentence (289)

function formatWords(words){

    if(words == null || words.length == 0 ){return ''}

    const fil = words.filter(e=>e!='');

    if(fil.length == 0){return ''}
    if(fil.length == 1){return fil[0]};
    if(fil.length == 2){return fil[0] + " and " + fil[1]};

    return fil.slice(0,fil.length-2).join(', ') + ', ' + fil.slice(-2).join(' and ');
}

// Arrh, grabscrab! (290)

function grabscrab(anagram, dictionary) {

    const sA = anagram.split('').sort().join('');

    return dictionary.filter(e=>e.split('').sort().join('') == sA);

  }

