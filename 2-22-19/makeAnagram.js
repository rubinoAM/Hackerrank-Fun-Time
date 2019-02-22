//Must return an integer representing the minimum total characters that must be deleted to make the strings anagrams

function makeAnagram(a,b){
    let mainCount = 0;
    let charCount = 0;
    let reversedB = b.split("").reverse().join("");

    for(let i=0;i<a.length;i++){
        for(let j=0;j<reversedB.length;j++){

            if(a.charAt(i) != reversedB.substr(j,1)){
                charCount++;
            }

            if(charCount == a.length){
                a.charAt(i).replace(a.charAt(i),"");
                charCount = 0;
                mainCount++;
            } else if (j == reversedB.length) {
                charCount = 0;
            }
        }
    }

    //console.log(a,reversedB);
    console.log(mainCount);
}

makeAnagram('cde','dcf'); //Should return 4
makeAnagram('fcrxzwscanmligyxyvym','jxwtrhvujlmrpdoqbisbwhmgpmeoke') //Should return 30
makeAnagram('showman','woman'); //Should return 2