// Maze Runner (265)

function mazeRunner(maze, directions) {
    const current = [];

    maze.map((e,i) => e.map((f,j) => {
        if(f == 2){current[0] = i; current[1] = j}
    }));

    while(directions.length != 0){

        const smn = directions.shift();

        if(smn == 'N'){current[0]--}
        if(smn == 'S'){current[0]++}
        if(smn == 'W'){current[1]--}
        if(smn == 'E'){current[1]++}

        if(current[0] < 0 || current[1] < 0 || current[0] >= maze.length || current[1] >= maze.length){return 'Dead'}
        if(maze[current[0]][current[1]] == 1 ){return 'Dead'}
        if(maze[current[0]][current[1]] == 3 ){return 'Finish'}

    }

    return 'Lost';
  }

// Esolang Interpreters #1 - Introduction to Esolangs and My First Interpreter (MiniStringFuck) (266)

function myFirstInterpreter(code) {

    let coun = 0;
    const res = [];

    code
      .match(/[+.]/g)
      .join('')
      .replace(/([+]+)/g,e=>e.length)
      .split('.')
      .forEach((e) => {

        coun += Number(e);
        if(coun >= 256){coun -= 256}
        res.push(String.fromCharCode(coun))
    });

    return res
            .join('')
            .slice(0,res.length-1);
  }

// Pair of gloves (267)

function numberOfPairs(gloves){
    const uni = [...new Set(gloves.concat().sort())][Symbol.iterator]();
    const sorted = gloves.concat().sort();
    let coun = 0;

    while(sorted.length != 0){
    
        const item = uni.next()['value'];
        let smn = 0;

        while(sorted[0] == item){
            sorted.shift();
            smn++
        }

        coun += Math.floor(smn/2)
    }
    
    return coun;
  }
