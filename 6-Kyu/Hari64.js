// Sum consecutives (274)

function sumConsecutives(s) {

    const res = [];

    while(s.length != 0){

        const smn = [s.shift()];

        while(s[0] == smn[0]){
            smn.push(s.shift())
        }

        res.push(smn.reduce((a,c) => a + c,0))
    
    }

    return res;

}

// extract portion of file name (275)

class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        
       return  dirtyFileName.match(/\d+_(.+)[.]\w+/)[1];
        
    }
}

// Difference of 2 (276)

function twosDifference(input){

    input.sort((a,b) => a-b);

    const sorted = input.filter(e=>e%2!=0).concat(input.filter(e=>e%2==0))
    const result = [];

    while(sorted.length != 0){
        const myS = sorted.shift();

        if(sorted[0] - myS == 2){
            result.push([myS,sorted[0]])
        }
        

    }

    return result.sort((a,b) => a[0]-b[0]);

   }


// Grouped by commas (277)

function groupByCommas(n) {

    if(n <= 999){return String(n)}

    const smn  =  String(n)
                    .split('')
                    .reverse()
                    .join('')
                    .replace(/\d{3}/g,'$&,')
                    .split('')
                    .reverse().
                    join('');

    return smn.indexOf(',') == 0 ? smn.slice(1) : smn;

  
}

// What century is it? (278)

function whatCentury(year){
  const match = year.match(/(\d{2})(\d{2})/);
  let result = [Number(match[1]),Number(match[2])]

  if(result[1] != 0){result[0]++}

  result = result.map((c) => String(c).padStart(2,0));

  if(result[0] >= 20){return (result[0][1] == 1 ? `${result[0]}st` : result[0][1] == 2 ? `${result[0]}nd` : result[0][1] == 3 ? `${result[0]}rd` : `${result[0]}th` );}

  return `${result[0]}th`;

}

