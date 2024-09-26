// Make the Deadfish Swim (221)

function parse( data ){

    let res = 0;
    const myA = [];

    data.match(/[isdo]/g).forEach((e) => {
        if(e == 'i'){res++}
        if(e == 'd'){res--}
        if(e == 's'){res = res**2}
        if(e == 'o'){myA.push(res)}
    });

    return myA;

}

// Title Case (222)

function titleCase(title, minorWords) {

    if(arguments.length == 1){return title.split(' ').map((e) => e.slice(0,1).toUpperCase() + e.slice(1).toLowerCase()).join(' ')};
    if(title == '' && minorWords == ''){return ''}
    if(minorWords == undefined){return title}
    

    const myReg = new RegExp(`\\b${minorWords.toLowerCase().split(' ').join('|')}\\b`);
    const myA = title.toLowerCase().split(' ');

    return `${myA[0][0].toUpperCase() + myA[0].slice(1)} ` + myA.slice(1).map((e) => {

        if(e == ''){return e}
        if(e.match(myReg)){return e}
        else{return e[0].toUpperCase() + e.slice(1).toLowerCase()}
    }).join(' ');

}

