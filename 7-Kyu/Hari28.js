// Maximum Length Difference (111)

function mxdiflg(a1, a2) {

    if(a1.length == 0 || a2.length == 0){return -1}
   
    let ang1 = a1.map((e) => e.length);
    let ang2 = a2.map((e) => e.length);

    let max1 = Math.max(...ang1);
    let max2 = Math.max(...ang2);
    let min1 = Math.min(...ang1);
    let min2 = Math.min(...ang2);

   return (max1 - min2 >= max2 - min1) ? max1 - min2 : max2 - min1;

}

// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe (112)

function countDevelopers(list) {
    return list.filter((e) => e.continent == 'Europe' && e.language == 'JavaScript').length;
  }

// JavaScript Array Filter (113)

function getEvenNumbers(numbersArray){
    return numbersArray.filter((e) => e % 2 == 0)
  }

// Love vs friendship (114)

function wordsToMarks(string){
    return string.split('').map((e) => e.codePointAt(0) - 96).reduce((a,c) => a + c);
  }

// Sum of angles (115)

function angle(n) {
    if(n < 2){return 0}
    return (n-2) * 180;
  }

// Largest pair sum in array (116)

function largestPairSum (numbers) {
    let smn = numbers.sort((a,b) => b-a)
    return smn[0] + smn[1];
}

// Sorted? yes? no? how? (117)

function isSortedAndHow(array) {;
    return (array.concat().sort((a,b) => a-b).every((e,i) => e == array[i]) == true) ? 'yes, ascending' : (array.concat().sort((a,b) => b-a).every((e,i) => e == array[i]) == true) ? 'yes, descending' : 'no';
}




