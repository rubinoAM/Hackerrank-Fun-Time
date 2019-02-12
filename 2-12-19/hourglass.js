//6x6 Hourglass
/*  abc
     d
    efg

    array of hourglasses

    for(let i=0;i<4;i++){
        for(let j=0;i<4;i++){
            [i][j] [i][j+1] [i][j+2]
                  [i+1][j+1]
            [i+2][j] [i+2][j+1] [i+2][j+2]
        }
    }

    */

function hourglassSum(ar){
    let high = -64;
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            let hgSum = ar[i][j] + ar[i][j+1] + ar[i][j+2] + ar[i+1][j+1] + ar[i+2][j] + ar[i+2][j+1] + ar[i+2][j+2];
            if(hgSum > high){
                high = hgSum;
            }
        }
    }
    return high;
}

let array = [
    [-9,-9,-9,1,1,1],
    [0,-9,0,4,3,2],
    [-9,-9,-9,1,2,3],
    [0,0,8,6,6,0],
    [0,0,0,-2,0,0],
    [0,0,1,2,4,0]
]

console.log(hourglassSum(array));