function checkMagazine(magazine,note){
    let commonalities = {};

    note.forEach(elem => {
        commonalities[elem] =  0;
    });

    magazine.forEach(elem => {
        //console.log(elem);
        //console.log(commonalities);

        for(var k in commonalities){
            if(elem == k){
                commonalities[k] += 1;
            }
        }
    });

    let comCount = 0;
    for(var k in commonalities){
        if(commonalities[k] == 1){
            comCount += 1;
        }
    }

    if(comCount == note.length){
        console.log("Yes");
    } else {
        console.log("No");
    }
}

let mag = ['give','me','one','grand','today','night'];
let note = ['give','one','grand','today'];

let mag2 = ['two','times','three','is','not','four'];
let note2 = ['two','times','two','is','four'];

let mag3 = ["ive","got","a","lovely","bunch","of","coconuts"];
let note3 = ["ive","got","some","coconuts"];

checkMagazine(mag,note);
checkMagazine(mag2,note2);
checkMagazine(mag3,note3);