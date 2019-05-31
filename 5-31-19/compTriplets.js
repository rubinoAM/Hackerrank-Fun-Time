function compareTriplets(a,b){
    let score = [];
    let scoreA = 0;
    let scoreB = 0;

    for(let i=0;i<a.length;i++){
        if(a[i] > b[i]){
            scoreA += 1;
        } else if (a[i] < b[i]){
            scoreB += 1;
        }
    }

    score.push(scoreA,scoreB);
    console.log(score);
}

const a1 = [5,6,7];
const b1 = [3,6,10];

compareTriplets(a1,b1);