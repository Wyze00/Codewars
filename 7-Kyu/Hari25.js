// Two fighters, one winner. (99)

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {

    let f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    let f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);

    (fighter1.name == firstAttacker) ? f2 -= 1 : f1 -= 1;

    return (f1 == f2) ? (fighter1.name == firstAttacker) ? fighter2.toString() : fighter1.toString() : (f1 > f2) ? fighter1.toString() : fighter2.toString();
  }

// Simple Fun #176: Reverse Letter (100)

function reverseLetter(str) {
    
    return str.split('').filter((e) => e.match(/[A-Za-z]/)).reverse().join('');
}

// Check the exam (101)

function checkExam(array1, array2) {
    
    if(array1.length != array2.length){return false}

    const anw = array2.map((e,i) => {

        if(e == ''){return 0}
        else if(e == array1[i]){return 4}
        else{return  -1}

    }).reduce((a,c) => a+c,0);

    return (anw <= 0) ? 0 : anw;

   }

// Summing a number's digits (101)

function sumDigits(number) {

    return Math.abs(number).toString().split('').map((e) => Math.abs(e)).reduce((a,c) => a + c,0)
}

// Fix string case (102)

function solve(s){

    let m1 = s.match(/[a-z]/g) == null ? 0 : s.match(/[a-z]/g).length;
    let m2 = s.match(/[A-Z]/g) == null ? 0 : s.match(/[A-Z]/g).length ;

    return m1 >= m2 ? s.toLowerCase() : s.toUpperCase();
}


