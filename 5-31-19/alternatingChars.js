function alternatingCharacters(s){
    let newStr = "";
    for(let i=0;i<s.length-1;i++){
        if(s.charAt(i) === s.charAt(i+1)){
            //console.log(s.charAt(i));
            newStr += s.substr(i,1);
            // let oldChar = s.charAt(i);
            // s.replace(oldChar,"");
        }
    }
    if(newStr.length === 0){
        console.log(s);
    } else {
        console.log(newStr);
    }
}

const strings = ['AAAA','BBBBB','ABABABAB',"BABABA","AAABBB"];
strings.map((str) => {
    alternatingCharacters(str);
})