//Unordered array with no duplicates
//You can swap any two elements
//Find the minimum # of swaps to make it go in asc. order

const testArr = [7,1,3,2,4,5,6];
const testArr2 = [4,3,1,2];

function swap(arr){
    let ordered = false;
    let moveCount = 0;

    // If [i] > [i+x], move to next 

    for(let i=0; i<arr.length-1; i++){
        if(arr[i] == arr[i+1] - 1){

            console.log(arr[i]);
        }
    }
    
    /*while(!ordered){
        for(let i=0; i<arr.length-1; i++){
            if(arr[i] != arr[i+1] - 1){
                if(arr[i] == arr.length){
                    let newEnd = arr.splice(i,1);
                    arr.push(newEnd[0]);
                    //console.log(arr);
                    moveCount++;
                }

                if(arr[i]){

                }
                console.log(arr[i]);
            }
        }
    }*/

    console.log(moveCount);
}


//swap(testArr);
swap(testArr2);