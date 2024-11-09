// Find the most adjacent integers of the same value in a grid (336)

function findMostAdjacent(grid) {

    const res = [99,0];

    for(let i = 0; i<grid.length; i++){

        for(let j = 0; j<grid.length; j++){

            if(grid[i][j] != undefined){

                const num = grid[i][j];
                const ctr = checkers(num,i,j);

                if(ctr > res[1]){
                    res[0] = num;
                    res[1] = ctr;
                } else if(ctr == res[1] && num < res[0]){
                    res[0] = num;
                    res[1] = ctr;
                }
            }
        }
    }

    return res;

    function checkers(num,i,j){

        if(grid[i] == undefined || grid[j] == undefined || grid[i][j] != num){return 0;}

        grid[i][j] = undefined;

        return 1 + checkers(num,i+1,j) + checkers(num,i-1,j) + checkers(num,i,j+1) + checkers(num,i,j-1);

    }

}