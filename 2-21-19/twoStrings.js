//Return YES or NO based on whether two strings share a substring

function twoStrings(s1,s2){
    let comChar = 0;

    for(let i=0; i < s1.length; i++){
        for(let j=0; j < s2.length; j++){
            if(s1.charAt(i) ==  s2.charAt(j)){
                comChar++;
            }
        }
    }

    if(comChar > 0){
        console.log("YES");
    } else {
        console.log("NO");
    }
}

twoStrings('hello','world'); //Should return YES
twoStrings('hi','world'); //Should return NO