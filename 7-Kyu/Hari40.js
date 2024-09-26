// Minimize Sum Of Array (Array Series #1) (164)

function minSum(arr) {
    return (arr.sort((a,b) => a-b).map((e,i,a) => e * (a[a.length-1-i])).reduce((a,c) => a + c,0) / 2);
  }

// Product Of Maximums Of Array (Array Series #2) (165)

function maxProduct(numbers, size){
    return (numbers.sort((a,b) => a-b).slice(-size).reduce((a,c) => a * c,1));
  }


// Array Leaders (Array Series #3) (166)

function arrayLeaders(numbers){
    return (numbers.filter((e,i,a) => i == a.length -1 ? e < 0 ? false : e : e > a.slice(i+1).reduce((a,c) => a+c),0));

  }

// Maximum Gap (Array Series #4) (167)

function maxGap (numbers){
    return (Math.max(...numbers.sort((a,b) => b-a).map((e,i,a) => i == a.length-1? 0 : e - a[i+1])));
  }

// Product Array (Array Series #5) (168)

function productArray(numbers){
    return numbers.map((e,i,a) => a.slice(0,i).reduce((a,c) => a * c,1) * a.slice(i+1,a.length).reduce((a,c) => a * c,1) );
  }

// Maximum Triplet Sum (Array Series #7) (169)

function maxTriSum(numbers){
    let smn = new Set(numbers.sort((a,b) => b-a))[Symbol.iterator]();

    return smn.next()['value'] + smn.next()['value'] + smn.next()['value'];
  }

// Minimum Steps (Array Series #6) (170)

function minimumSteps(numbers, value){

        const smn = numbers.sort((a,b) => a-b);
        let coun = 0;

        console.log(smn);

        while(value > 0) {
            value -= smn[coun];
            coun++
        }

        return coun - 1;

     }