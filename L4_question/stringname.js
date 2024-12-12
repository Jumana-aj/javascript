
function nam(s){
let arr=["a","c","d"];
let found =arr.indexOf(s)
for(i=0;i<arr.length;i++){
    if(found<0){
        return (false);
    }
    else{
      return(true);
    }
}
}
let s="f";
let res=nam(s);
console.log(res);



function checkif(h){
    let arrayy=["q","w","e","r"];
    let founded=arrayy.indexOf(h);
    for(i=0;i<arrayy.length;i++){
        if(founded<0){
            return "not found";
        }
        else{
            return "found";
        }
    }
}
let h="q";
let resu=checkif(h);
console.log(resu);