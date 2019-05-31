function minimumAbsoluteDifference(arr){
    for(let i=0; i<arr.length -1 ; i++){
        for(let j=0; j<arr.length; j++){
            console.log(arr[i],arr[j]);
        }
    }
}

const arr = [-59,-36,-13,1,-53,-92,-2,-96,-54,75];
minimumAbsoluteDifference(arr);