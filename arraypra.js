// function digitsum(num){
//     let sum=0;
//     let digit=[];
//     while(num>0){
//         let vari=num%10;
//         digit.unshift(vari);
//         num=Math.floor(num/10);
//     }
//     for(i=0;i<digit.length;i++){
//        sum+=digit[i]
//     }
//     return sum;
// }
//  let result=digitsum(1234);
// console.log(result);



// function integer(number){
//     let sum=0;
//     let dig=[];
//     while(number>0){
//         let res=number%10;
//         dig.unshift(res);
//         number=Math.floor(number/10);
//     }
//     for(i=0;i<dig.length;i++){
//         sum+=dig[i];
//     }
//     return sum;
// }
// let result=integer(1234567);
// console.log(result);



// function nums(n){
//     let sum=0;
//     let digit=[];
//     while(n>0){
//         let d=n%10;
//         digit.unshift(d);
//         n=Math.floor(n/10);
//     }
//     for(i=0;i<digit.length;i++){
//         sum+=digit[i];
//     }
// return sum;
// }
// let res=nums(123);
// console.log(res);


function number(num){
    let sum=0;
    let digit=[]
    while(num>0){
        let res=num%10;
        digit.unshift(res);
        num=Math.floor(num/10);
    }
    for(i=0;i<digit.length;i++){
        sum+=digit[i];
    }
    return sum;
}
let result=number(123);
console.log(result);