//Unordered array with no duplicates
//You can swap any two elements
//Find the minimum # of swaps to make it go in asc. order

const testArr = [7,1,3,2,4,5,6];
const testArr2 = [4,3,1,2];

function swap(arr){
    let unordered = true;
    let unsortedArr = arr;
    let sortedArr = arr.sort();
    console.log(unsortedArr);console.log(sortedArr);
    let moveCount = 0;

    while(unordered){
        for(let i=0; i<unsortedArr.length; i++){
            for(let j=0; j<sortedArr.length; j++){
                if(unsortedArr[i] == sortedArr[j]){
                    let stashedFirst = unsortedArr[i];
                    let stashedSecond= unsortedArr[j]
                    unsortedArr[i] = stashedSecond;
                    unsortedArr[j] = stashedFirst;
                    moveCount++;
                    //console.log(moveCount);
                }
            }
        }

        if(unsortedArr == sortedArr){
            unordered = false;
            console.log(moveCount);
        }
    }
}

swap(testArr);
swap(testArr2);