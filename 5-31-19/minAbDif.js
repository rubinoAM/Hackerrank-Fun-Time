function minimumAbsoluteDifference(arr){
    let distances = [];
    let x, y, z;

    for(let i=0; i<arr.length ; i++){
        for(let j=1; j<arr.length; j++){
            if(Math.sign(arr[i]) === -1){
                x = arr[i] * -1;
            } else {
                x = arr[i];
            }

            if(Math.sign(arr[j]) === -1){
                y = arr[j] * -1;
            } else {
                y = arr[j];
            }
            //console.log(x,y);
            if(x !== y){
                z = x + y;
                distances.push(z);
            }
        }
    }
    distances.sort((a,b) => { return a-b });
    console.log(distances[0]);
}

const arr = [-59,-36,-13,1,-53,-92,-2,-96,-54,75];
const arrTwo = [3,-7,0];
const arrThree = [1,-3,71,68,17];

//minimumAbsoluteDifference(arr);
//minimumAbsoluteDifference(arrTwo);
minimumAbsoluteDifference(arrThree);