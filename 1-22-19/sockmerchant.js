function sockMerchant(n, ar){ //n is actually not important to how this function works
    ar.sort();
    let pairCount=0;
    for(let i=0;i<ar.length-1;i++){
        if(ar[i] == ar[i+1]){
            pairCount++;
            i++;
        }
    }
    console.log(pairCount);
}

let array = [1,2,1,2,1,3,2];
sockMerchant(7, array);