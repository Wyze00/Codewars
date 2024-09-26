// Double char (25)

function doubleChar(str) {

    let result = '';

    for(let i = 0; i < str.length; i++) {

        for (let u = 0; u <= 1; u++){

            result += str[i]

        }

    }

    return result;

  }

// Thinkful - Logic Drills: Traffic light (26) 

function updateLight(current) {
  

    return (current == 'green') ? 'yellow' : (current == 'yellow') ? 'red' : 'green';
  
  }


// L1: Set Alarm (27)

function setAlarm(employed, vacation){

    return (employed == true && vacation == false) ? true : false;
}

// Do I get a bonus? (28)

function bonusTime(salary, bonus) {

        return (bonus) ? `\u00A3${salary * 10}` : `\u00A3${salary}`;

    }

// Stop gninnipS My sdroW! (29)

function spinWords(string){
    
    let result = '';
    let str = string.split(' ');

    for(let i = 0; i < str.length; i++) {

        let smntr = str[i]

        if(smntr.length >= 5) {

            for(let u = smntr.length -1; u >= 0; u--) {

                result+= smntr[u];

            }

            result += ' ';

        } else {

          for(let e = 0; e < smntr.length; e++) {

            result+= smntr[e];

          }  

          result += ' ';

        }

    } 

    return result.trimEnd();

  }


  