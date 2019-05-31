function alternatingCharacters(s){
    let count = 0;
    let a = s.split('');
    //console.log(a);
    for(let i=0;i<a.length-1;i++){
        console.log(a[i],a[i+1]);
        if(a[i] === a[i+1]){
            count += 1;
            //console.log(a);
        }
    }
    console.log(count);
}

const strings = ['AAAA','BBBBB','ABABABAB',"BABABA","AAABBB"];
strings.map((str) => {
    alternatingCharacters(str);
})