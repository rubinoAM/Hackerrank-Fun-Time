function minimumAbsoluteDifference(arr){
    let distances = [];
    let x, y, z;

    for(let i=0; i<arr.length ; i++){
        for(let j=1; j<arr.length; j++){
            if(Math.sign(arr[i]) === -1 | Math.sign(arr[i]) === -0){
                x = arr[i] * -1;
            } else {
                x = arr[i];
            }

            if(Math.sign(arr[j]) === -1 | Math.sign(arr[j]) === -0){
                y = arr[j] * -1;
            } else {
                y = arr[j];
            }

            z = x + y;
            distances.push(z);
        }
    }
    distances.sort((a,b) => { return a-b });
    console.log(distances);
}

const arr = [-59,-36,-13,1,-53,-92,-2,-96,-54,75];
//minimumAbsoluteDifference(arr);

const arrTwo = [3,-7,0];
minimumAbsoluteDifference(arrTwo);