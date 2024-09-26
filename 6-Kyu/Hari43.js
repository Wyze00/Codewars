// Moving Zeros To The End (186) 

function moveZeros(arr) {
    let coun = 0;
    const myA = arr;

    while(myA.indexOf(0) !== -1){
        myA.splice(myA.indexOf(0),1);
        coun++;
    }

    for(let i = 0; i < coun; i++){
        myA.push(0);
    }

    return myA;

  }

// Simple Pig Latin (187)

function pigIt(str){
    let myStr =  str.split(' ').map((e,i,a) => {
        let myA = e.split('');
        let myS = myA.shift();

        myA[a[i].length - 1] = myS;

        return myA.join('');
    }).join('ay ');

    return (myStr[myStr.length - 1].match(/[!?;.,-:_]/) != null)? myStr : myStr + 'ay';

  }


// Count characters in your string (188)

function count(string) {
    const mySet = [...new Set(string)];
    const res = {};

    for(let i = 0; i<mySet.length; i++){

        const myReg = new RegExp(mySet[i],'g');

        Object.defineProperty(res,mySet[i],{
            value: string.match(myReg).length,
            configurable: true,
            enumerable: true,
            writable: true
        })

    }

    return res;
  }



