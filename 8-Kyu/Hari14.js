// Square(n) Sum (56)

function squareSum(numbers){
    return numbers.reduce((a,c) => a + c**2 ,0)
}

// String repeat (57)

function repeatStr (n, s) {
    return s.repeat(n);
  }

// Reversed Words (58)

function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }

// Is there a vowel in there? (59)

function isVow(a){

    return a.map((e) => (e == 97) ? 'a' : (e == 105) ? 'i' : (e == 117) ? 'u' : (e == 101) ? 'e' : (e == 111) ? 'o' : e)
}
