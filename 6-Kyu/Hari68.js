// Average String (287)

function averageString(str) {

    const ang = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
    }
  
    const angka = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine"
    }
  
    const sort = str.split(" ").map(e=>ang[e]);
  
  
    if(sort.some(e=>e==undefined)){return "n/a"};
  
    return angka[Math.floor((sort.reduce((a,c) => a + c,0)) / sort.length)];
  
  }
