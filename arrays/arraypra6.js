// let a=5;
// let b=10;
// let sum=0;
// for(i=a;a<=b;a++){
//     if(a%2===1){
//         sum+=a;
//     }

// }
// console.log(sum);



function oddeven(a,b){
    sum=0;
    for(i=a;a<=b;a++){
        if(a%2==0){
            sum+=a;
        }
    }
    return sum;
}
let result=oddeven(5,10);
console.log(result);