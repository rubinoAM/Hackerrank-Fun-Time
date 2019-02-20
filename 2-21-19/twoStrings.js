//Return YES or NO based on whether two strings share a substring

function twoStrings(s1,s2){
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let count = 0;

    for(let i=0; i < alphabet.length; i++){
        let regEx = new RegExp(`[${alphabet[i]}]+`);
        let match1 = regEx.test(s1);
        if(regEx.test(s1) && regEx.test(s2)){
            console.log("YES");
            count++;
            break;
        }
    }
    
    if(count == 0){
        console.log("NO");
    }
}

twoStrings('hello','world'); //Should return YES
twoStrings('hi','world'); //Should return NO