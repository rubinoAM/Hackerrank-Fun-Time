function rotLeft(a,d){
    for(let i=0;i<d;i++){
        let hidden = a.shift();
        a.push(hidden);
    }
    console.log(a);
}

let arr = [1,2,3,4,5];
rotLeft(arr,3);