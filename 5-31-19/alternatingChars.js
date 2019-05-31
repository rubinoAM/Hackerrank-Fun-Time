function alternatingCharacters(s){
    let a = s.split('');
    console.log(a);
    for(let i=0;i<a.length-1;i++){
        if(a[i] === a[i+1]){
            a.splice(i,1);
            console.log(a);
        }
    }
    console.log(a);
}

const strings = ['AAAA','BBBBB','ABABABAB',"BABABA","AAABBB"];
strings.map((str) => {
    alternatingCharacters(str);
})