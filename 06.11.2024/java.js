//Given an array of strings, return the string which has maximum 'a' character present in it. 
// eg = ["apple", "appeal", "after", "banish"] output is appeal as it has 2 a's in it//

// function stringWithMaxA(array) {
//     let maxcount = 0;
//     let result = "";
//     for (let i = 0; i < array.length; i++) {
//         let count = 0;
//         for (let j = 0; j < array[i].length; j++){
//             if (array[i][j] === 'a') {
//                 count++;
//             }
//         }


//         if(count>maxcount){
//             maxcount=count;
//             result=array[i];
//         }

//     }
//     return maxcount;
// }
// let ress=stringWithMaxA(["apple","after","appeal","banish"]);
// console.log(ress);





function string(names){
    let maxi=0;
    let result="";
    for(i=0;i<names.length;i++){
        let counta=0;
        for(j=0;j<names[i].length;j++){
            if(names[i][j]=='a'){
                counta++;

            }
         if(counta>maxi){
            maxi=counta;
            result=names[i];
         }

        }
    }
    return result;
}
let resuu=string(["jumana","joshitha","keerthii"]);
console.log(resuu);