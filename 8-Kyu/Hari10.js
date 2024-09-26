// Convert a Number to a String! (35)

// function numberToString(num) {
//     return String(num);
//   }

function numberToString(num) {
   let result = '';

    return result += num;
  }

// Convert boolean values to strings 'Yes' or 'No'. (36)

// function boolToWord( bool ){
//     return (bool == true) ? 'Yes' : 'No';
//   }

function boolToWord( bool ){

  if(bool == true) {return 'Yes'} 
  else {return 'No'}

}

// Opposite Number (37)

function opposite(number) {
  return (number == 0) ? 0 : -number ;
}

// Vowel Count (38)

function getCount(str) {

  let num = 0;

  for(let i = 0; i < str.length; i++) {

    switch(str[i]) {
      case 'a': num++ ; break ;
      case 'i': num++ ; break ;
      case 'u': num++ ; break ;
      case 'e': num++ ; break ;
      case 'o': num++ ; break ;
      default: break      
    
    }

  }

  return num
}

// Disemvowel Trolls (39)

function disemvowel(str) {
  return str.split('').map(e => e.replaceAll(/[aiueo]/gi,'')).join('');
}
