function alternatingCharacters(s){
    for(let i=0;i<s.length-1;i++){
        if(s.charAt(i) === s.charAt(i+1)){
            console.log(s.charAt(i));
            let oldChar = s.charAt(i);
            s.replace(oldChar,"");
        }
    }
    console.log(s);
}

const strings = ['AAAA','BBBBB','ABABABAB',"BABABA","AAABBB"];
strings.map((str) => {
    alternatingCharacters(str);
})