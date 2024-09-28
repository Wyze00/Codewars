// Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented? (282)

function allContinents(list) {
    const cont = [];

    list.forEach(({continent}) => {
        cont.push(continent)
    });

    return (new Set(cont)).size == 5;

  }

// Coding Meetup #9 - Higher-Order Functions Series - Is the meetup age-diverse? (283)

function isAgeDiverse(list) {
    const sort = list.map(({age}) => age).filter(e=> e >= 100);
    const sort2 = list.map(({age}) => age).filter(e=> e < 100 && e > 9);
    const res = [];

    for(let i = 1; i<10; i++){

        for(let u = 0; u<sort2.length; u++){

            if(String(sort2[u])[0] == i){
                res.push(sort2[u]);
                break;
           }
        }
    }

    if(res.length == 9 && sort.length > 0){return true}

    return false

  }

 