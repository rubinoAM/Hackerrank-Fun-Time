function countSwaps(a){
    let count = 0;
    for(let i=0;i<a.length;i++){

        console.log(a);
        for(let j=0;j<a.length-1;j++){
            if(a[j] > a[j+1]){
                [a[j], a[j+1]] = [a[j+1], a[j]];
                count += 1;
            }
        }
    }
    console.log(count,a[0],a[a.length-1]);
}

const arr = [3,1,7];
countSwaps(arr);