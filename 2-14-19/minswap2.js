//Unordered array with no duplicates
//You can swap any two elements
//Find the minimum # of swaps to make it go in asc. order

const testArr = [7,1,3,2,4,5,6];
const testArr2 = [4,3,1,2];

function swap(arr){
    let unordered = true;
    let sortedArr = arr.sort();
    let moveCount = 0;

    // If [i] > [i+x], move to next 

    while(unordered){
        for(let i=0; i<arr.length; i++){
            for(let j=0; j<sortedArr.length; j++){
                if(arr[i] == sortedArr[j]){
                    let stashedFirst = arr[i];
                    let stashedSecond= arr[j]
                    arr[i] = stashedSecond;
                    arr[j] = stashedFirst;
                    moveCount++;
                    console.log(moveCount);
                }
            }
        }

        if(arr == sortedArr){
            unordered = false;
            console.log(moveCount);
        }
    }
}

//swap(testArr);
swap(testArr2);