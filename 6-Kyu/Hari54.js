// Valid Phone Number (241)

function validPhoneNumber(phoneNumber){
    return phoneNumber.match(/^[(]\d{3}[)] \d{3}-\d{4}$/) != null;
  }

// Fold an array (242)

function foldArray(array, runs){

    let myA = array;
    let myB = myA.concat().reverse();
    
    while(runs > 0) {
         runs--;

        if(myA.length % 2 != 0){

            const smn = [];

            for(let i = 0; i< myA.length; i++){

                if(i == (myA.length - 1) /2){smn.push(myA[i])}
                else{
                    smn.push(myA[i] + myB[i])
                }
            }

            myA = smn.slice(0,(myA.length + 1)/2);
            myB  = myA.concat().reverse();
        }

        else{

            const smn = [];

            for(let i = 0; i< myA.length; i++){
                smn.push(myA[i] + myB[i])
            }

            myA = smn.slice(0,(myA.length + 1)/2);
            myB  = myA.concat().reverse();
        }
    }

    return myA;

}

// Highest Rank Number in an Array (243)

function highestRank(arr){

    // Work

    // const myA = arr.sort((a,b) => a-b);
    // const myS = [...new Set(myA)];
    // let len = 0;
    // let val = 0;
    // const myM = Map.groupBy(myA,(e) => e);


    // for(let i = 0; i<myS.length; i++){

    //    const smn = myM.get(myS[i]);

    //     if(smn.length >= len){
       
    //         if(smn[0] > val){
    //             len = smn.length;
    //             val = smn[0];
    //         }
    //    }
    // }

    // return myM.get(val)[0];

    const myA = arr.sort((a,b) => a-b);
    const myS = [...new Set(myA)];
    const smn = [];

    for(let i = 0; i<myS.length;i++){

        const a = [];

        for(let u = 0; u<myA.length; u++){
            if(myS[i] == myA[u]){a.push(myA[u])}

        }

        smn.push(a);

    }

    return smn.sort((a,b) => a.length-b.length )[smn.length-1][0];

    }

// Pyramid Array (244)

function pyramid(n) {

    if(n < 0){return []}

    const res = [];

    while(n > 0){
        
        res.push(Array.from({length: n}).fill(1));

        n--;
    }

    return res.reverse();

  }

// Triple trouble (245)

function tripledouble(num1, num2) {

    const my1 = String(num1).match(/(\d)\1\1/g);
    const my2 = String(num2).match(/(\d)\1/g);

    if(my1 == null || my2 == null){return 0}


    return my1.map((e) => {

        return my2.filter(((a) => {

            if(e.slice(0,2) == a){return 1}
            return 0;

        }))

    }).filter((e)=> e.length != 0 )[0] == undefined ? 0 : 1;

  }
  




