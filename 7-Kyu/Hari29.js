// Even numbers in an array (118)

function evenNumbers(array, number) {
    return array.concat().filter((e) => e % 2 == 0).slice(-number);
  }

// Alphabet war (119)

function alphabetWar(fight){

    let smn = fight.split('').map(e=(e) => {

        switch(e){
            case 'w':
                return 4;
            case 'p':
                return 3;
            case 'b':
                return 2;
            case 's':
                return 1;
            case 'm':
                return -4;
            case 'q':
                return -3;
            case 'd':
                return -2;
            case 'z':
                return -1;
            default:
                return 0;

        }

    }).reduce((a,c) => a + c)

   return (smn == 0) ? "Let's fight again!" : (smn < 0) ? "Right side wins!" : "Left side wins!";
}

// No oddities here (120)

function noOdds( values ){
    return values.filter((e) => e % 2 == 0)
  }

// Predict your age! (121)

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    return Math.floor((Math.sqrt([...arguments].reduce((a,c) => a + c*c,0))/2));
  }

// Bumps in the Road (122)

function bump(x){
    return x.split('').filter((e) => e == 'n').length <= 15 ? 'Woohoo!' : 'Car Dead'
}

