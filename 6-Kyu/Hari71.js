// Loose Change (293)

function looseChange(cents){
    
    const change = {
        'Nickels': 0, 
        'Pennies': 0, 
        'Dimes': 0, 
        'Quarters': 0
    }

    let cent = Math.floor(cents);

    if(cent <= 0){return change}

    if(Math.floor(cent / 25)  != 0){
        change.Quarters = Math.floor(cent / 25);
        cent %= 25;
    }

    if(Math.floor(cent / 10)  != 0){
        change.Dimes = Math.floor(cent / 10);
        cent %= 10;
    }

    if(Math.floor(cent / 5)  != 0){
        change.Nickels = Math.floor(cent / 5);
        cent %= 5;
    }

    if(Math.floor(cent / 1)  != 0){
        change.Pennies = Math.floor(cent / 1);
        cent %= 1;
    }

    return change;

  }

// Binary to Text (ASCII) Conversion (294)

function binaryToString(binary) {
    return binary.replace(/[01]{8}/g,(e)=>String.fromCharCode(Number.parseInt(e,2)));
}

// All Star Code Challenge #15 (295)

function rotate(str){



    const res = [];

    for(let i = 0; i<str.length; i++){

        res.push(str.slice(i,str.length) + str.slice(0,i));

    }

    const res2 = res.concat().slice(1,res.length);
    res2.push(res[0]);

    return res2;
    
    }

