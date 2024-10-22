// Strip Comments (317)

function solution(text, markers) {

    const splt = text.split('\n');

    return splt.map((e) => {

        let res = e;

        for(let i = 0; i< markers.length; i++){

            for(let j = 0; j<e.length; j++){

                if(e[j] == markers[i]){

                    res = res.slice(0,j)
                }
            }
        }

        return res.trimEnd();

    }).join('\n');

  }
