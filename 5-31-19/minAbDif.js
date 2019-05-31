function minimumAbsoluteDifference(arr){
    arr.sort((a,b) => a-b );
    let min = 100000000;
    let diff;

    for(let i=0; i<arr.length-1; i++){
        if(arr[i] !== arr[i+1]){
            if(arr[i] > arr[i+1]){
                diff = arr[i] - arr[i+1];
            } else {
                diff = arr[i+1] - arr[i];
            }
        }

        if(min > diff){
            min = diff;
        }
    }
    console.log(min);
}

const arr = [3,-7,0];
const arrTwo = [-59,-36,-13,1,-53,-92,-2,-96,-54,75];
const arrThree = [1,-3,71,68,17];

//minimumAbsoluteDifference(arr);
//minimumAbsoluteDifference(arrTwo);
minimumAbsoluteDifference(arrThree);