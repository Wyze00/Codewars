// Total amount of points (13)

function points(games) {

    let point1 = 0;

    for(let i = 0; i < games.length; i++) {

        let test = games[i].split(':');
        
        if(test[0] == test[1])  {
            point1 += 1;

        } else if(test[0] > test[1]) {
            point1 += 3

        } else {
            point1 += 0;
        }

    }

    return point1;
  }

// Grasshopper - Grade book (14)

function getGrade (s1, s2, s3) {
    
    let result = Math.floor(((s1 + s2 + s3)/3)) ;
    let grade = '';

    console.log(result);

    if(result >= 90 && result <= 100 ) {grade = 'A'}
    else if(result >= 80 && result < 90 ) {grade = 'B'}
    else if(result >= 70 && result < 80 ) {grade = 'C'}
    else if(result >= 60 && result < 70 ) {grade = 'D'}
    else {grade = 'F'}
    
    return grade;
  }

// Sum without highest and lowest number (15) 

function sumArray(array) {

    if(array == null) {return 0}

    let sort = array.sort((a,b) => a - b);
    let res = 0;
    
    for(let i = 0; i < sort.length; i++) {

        if(i == 0 || i == sort.length - 1) {
            res += 0;

        }  else {
            res += sort[i];
        }
    }

    return res;
}

// Get the mean of an array (16) 

function getAverage(marks){

    return Math.floor(marks.reduce((a,c) => a + c, 0) / marks.length);
  }

// Area or Perimeter (17) 

  const areaOrPerimeter = function(l , w) {return (l == w)? l * w : (l+w)*2 };

// Grasshopper - Personalized Message (18)

function greet (name, owner) {
    return (name === owner)? 'Hello boss' : 'Hello guest';
  }

  

  
