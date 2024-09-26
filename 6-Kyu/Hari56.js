//Snail (250)

// const snail = function(array) {

//     if(array.length == 1 || array.length == 0){return array[0]}

//     const pos = [0,0];
//     const myS = array;
//     const res = [];
//     const ter = array.length % 2 == 0 ? array.length / 2 : (array.length + 1)/2;

//     for(let i = 0; i<ter;i++){

//         while(pos[1] < array.length && myS[pos[0]][pos[1]] != undefined){
//             res.push(myS[pos[0]][pos[1]])
//             myS[pos[0]][pos[1]] = undefined;
//             pos[1]++;

//         }

//         pos[1]--;
//         pos[0]++

//         while(pos[0] < array.length && myS[pos[0]][pos[1]] != undefined){
            
//             res.push(myS[pos[0]][pos[1]])
//             myS[pos[0]][pos[1]] = undefined;
//             pos[0]++;

//         }

//         pos[0]--;
//         pos[1]--;


//         while(pos[1] > 0 && myS[pos[0]][pos[1]] != undefined ){

//             res.push(myS[pos[0]][pos[1]])
//             myS[pos[0]][pos[1]] = undefined;
//             pos[1]--;

//         }

//         if(i % 2 != 0){
//             pos[0]--;
//             pos[1]++;
//         }

//         while(pos[0] > 0 && myS[pos[0]][pos[1]] != undefined ){

//             res.push(myS[pos[0]][pos[1]])
//             myS[pos[0]][pos[1]] = undefined;
//             pos[0]--;

//         }


//             pos[0]++;
//             pos[1]++;
        

//     }

//     return res;
//   }

const snail = function(array) {
    if(array.length === 0) return [];
    if(array.length === 1) return array[0];

    const result = [];
    let top = 0, bottom = array.length - 1, left = 0, right = array[0].length - 1;

    while (top <= bottom && left <= right) {
        // Atas
        for (let i = left; i <= right; i++) {
            result.push(array[top][i]);
        }
        top++;

        // Kanan
        for (let i = top; i <= bottom; i++) {
            result.push(array[i][right]);
        }
        right--;

        if (top <= bottom) {
            // Bawah
            for (let i = right; i >= left; i--) {
                result.push(array[bottom][i]);
            }
            bottom--;
        }

        if (left <= right) {
            // Kiri
            for (let i = bottom; i >= top; i--) {
                result.push(array[i][left]);
            }
            left++;
        }
    }

    return result;
}
