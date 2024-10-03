// Coordinates Validator (291)

function isValidCoordinates(coordinates){

    const coor = coordinates.split(', ');

    if(coor.filter(e=>e.match(/[a-zA-Z]/)).length != 0){return false}

    const satu = coor[0].match(/^-?(\d{1,2})[.]?\d*$/);
    const dua = coor[1].match(/^-?(\d{1,3})[.]?\d*$/);

    if(satu == null || dua == null){return false}

    if((satu[1] >= -90 && satu[1] <= 90) && (dua[1] >= -180 && dua[1] <= 180)){return true}
    return false; // do your thing!
  }

// String Suffixes (292)

function stringSuffix(s) {

    const str = [];
    
    for(let i = 0; i<s.length; i++){
    
        str.push(s.slice(i));
    }

    return (str.map((e) => {

        let coun = 0;

        for(let u = 0; u<e.length; u++){

            if(s[u] == e[u]){
                coun++;
            } else{
                return coun;
            }
            
        }

        return coun;

    }).reduce((a,c) => a + c,0));
    


    }

