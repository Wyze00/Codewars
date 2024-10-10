// Coding Meetup #10 - Higher-Order Functions Series - Create usernames (304)

function addUsername(list) {
    
    return (list.map((e) => {

        const obj = e;

        obj.username = obj.firstName.toLowerCase() + obj.lastName.slice(0,1).toLowerCase() + `${2037-obj.age}`

        return obj;

    }));


  }

// Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details (305)

function askForMissingDetails(list) {
    
    return list.map((e) => {

        const obj = e;
        let q;

        for(const emp in obj){
            if(obj[emp] == null){
                q = `Hi, could you please provide your ${emp}.`;
            }
        }

        if(q == undefined){return ''}

        obj.question = q;

        return obj;
    }).filter(e=>e);
  }
