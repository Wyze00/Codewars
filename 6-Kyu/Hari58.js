// Reverse polish notation calculator (256)

function calc(expr) {

  if(expr == ''){return 0}

  function calcA(a,b,c){

    if(c == '+'){return String(Number(a) + Number(b))};
    if(c == '-'){return String(Number(a) - Number(b))};
    if(c == '*'){return String(Number(a) * Number(b))};
    if(c == '/'){return String(Number(a) / Number(b))};
  

  }

  let res = expr;
  


  while(res.match(/(-?\d*\.?\d+) (-?\d*\.?\d+) ([-+/*])/) != null) {

    res = res.replace(/(-?\d*\.?\d+) (-?\d*\.?\d+) ([-+/*])/,(e,p1,p2,p3) => calcA(p1,p2,p3));

  }

  return Number(res);

}

// Kebabize (256)

function kebabize(str) {
  const res = str.replace(/\d/g,'').replace(/[A-Z][a-z]*/g,(e) => `-${e[0].toLowerCase()}${e.slice(1)}`);
  return res[0] == '-' ? res.slice(1) : res;
}

// Word a10n (abbreviation) (257)

function abbreviate(string) {

  function turn(m){
    return m.length < 4 ? m : `${m[0]}${m.slice(1,m.length-1).length}${m[m.length-1]}`;
  }

  return string.replace(/\w+/g,e=>turn(e));
}