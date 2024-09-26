// Sort array by string length (85)

function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length)
  }

// Money, Money, Money (86)

function calculateYears(principal, interest, tax, desired) {
   let princ = principal;
   let coun = 0;

   while(princ < desired){

    princ += (princ * interest - (princ * interest * tax))

    coun++

   }

   return coun
}
