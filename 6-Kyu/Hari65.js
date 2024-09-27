// IPv4 to int32 (279)

function ipToInt32(ip) {
    return Number(ip.replace(/(\d+).(\d+).(\d+).(\d+)/,(m,p1,p2,p3,p4) => {

        return Number.parseInt(Number(p1).toString(2).padStart(8,0) + Number(p2).toString(2).padStart(8,0) + Number(p3).toString(2).padStart(8,0) + Number(p4).toString(2).padStart(8,0),2)

    }));
}

// Where is my parent!?(cry) (280)

function findChildren(dancingBrigade) {

    const mother = [...new Set(dancingBrigade.toUpperCase().split('').sort())];
    const all = dancingBrigade.split('');
    const result = [];

    for(let i = 0; i<mother.length; i++){

        result.push(mother[i]);

        for(let a = 0; a<all.length; a++){

            if(mother[i].charCodeAt() + 32 == all[a].charCodeAt()){
                result.push(all[a])
            }
        }
    }

    return result.join('')
}

// Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer (281)

function findSenior(list) {

    return list.filter(e=>e.age==Math.max(...list.map(({age}) => age)));
    
  }


  
