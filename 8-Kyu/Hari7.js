// Remove exclamation marks (22)

// function removeExclamationMarks(s) {
//     return s.replaceAll('!','');
//   }

  function removeExclamationMarks(s) {
    
    let result = '';

    for(let i = 0; i < s.length; i++) {

        if(s[i] != '!') {
            result += s[i];
        }

    }

    return result;
  }

// Count the Monkeys! (23)

function monkeyCount(n) {

        let res = [];

        for(let i = 1; i <= n; i++ ) {

            res.push(i);
        }

        return res;

    }

// Quarter of the year (24)

const quarterOf = (month) => {

    if(month <= 0 || month > 12) {return false}

    return (month <= 3) ? 1 : (month <= 6) ? 2 : (month <= 9) ? 3 : (month <= 12) ? 4 : false;
    
  }


