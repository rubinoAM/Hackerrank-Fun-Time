function checkMagazine(magazine,note){
    //Print Yes if note can be used from magazine, Else Print No
    //magazine = array of strings, each a word in magazine
    //note = array of strings, each a word in ransom note

    let wordsCommon = [];
    for(let i=0; i<magazine.length; i++){
        for(let j=0; j<note.length; j++){
            //console.log(magazine[i],note[j]);
            if(magazine[i] === note[j]){
                wordsCommon.push(magazine[i]);
                //console.log(wordsCommon);
                magazine.splice(i,1);
            }
        }
    }
    if(wordsCommon.length == note.length){
        console.log("Yes.");
    } else {
        console.log("No.");
    }
}

let mag = ['give','me','one','grand','today','night'];
let note = ['give','one','grand','today'];

let mag2 = ['two','times','three','is','not','four'];
let note2 = ['two','times','two','is','four'];

let mag3 = ["ive","got","a","lovely","bunch","of","coconuts"];
let note3 = ["ive","got","some","coconuts"];

checkMagazine(mag,note); //Should return Yes
checkMagazine(mag2,note2);  //Should return No
checkMagazine(mag3,note3);