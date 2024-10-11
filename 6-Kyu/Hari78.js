// Create Four Letter Birding Codes from Bird Names (306)

function birdCode(arr){

    return arr.map((e) => {

        const name = e.split(/[ -]/);

        if(name.length == 1){
            return name[0].slice(0,4).toUpperCase()
        }
        if(name.length == 2){
            return `${name[0].slice(0,2).toUpperCase()}${name[1].slice(0,2).toUpperCase()}`
        }
        if(name.length == 3){
            return `${name[0].slice(0,1).toUpperCase()}${name[1].slice(0,1).toUpperCase()}${name[2].slice(0,2).toUpperCase()}`
        }
        if(name.length == 4){
            return `${name[0].slice(0,1).toUpperCase()}${name[1].slice(0,1).toUpperCase()}${name[2].slice(0,1).toUpperCase()}${name[3].slice(0,1).toUpperCase()}`
        }
    });



}

// IP address finder [Code-golf] (307)

f=s=>[1,2,3,4].map(e=>e*s.split('').reduce((a,c)=>a+c.charCodeAt(),0)%256)
