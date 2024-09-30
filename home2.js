// function classifynumbers(n){
//     if(n%3===0){
//         console.log("divisible by three");
//     }
//     else if(n%5===0){
//         console.log("divisible by 5");
//     }
//     else if(n%3===0&n%5===0){
//         console.log("divisible by both 3 and 5")
//     }
//     else{
//         console.log("not divisible by 3 and 5")
//     }
//     return;
// }
// let n=4;
// let result=classifynumbers(n);



// let r=6;
// function multiplication(n,r){
//     while(n<=r){
//          let d=n*r;
//          console.log(d);
//     }
//    return
// }
// let n=5;

// let result=multiplication(n,r);



// let l=30;
// function multiplication(l){
//     for(i=5;i<=l;i+=5){
//         console.log(i)
//     }
//     return;
// }
// let result=multiplication(l);

// function getDayName(Daynumber){
//     switch(Daynumber){
//         case 1:
//             return "sunday";
//             break;
//             case 2:
//                 return "Monday";
//                 break;
//                 case 3:
//                     return "Tuesday";
//                     break;
//                     case 4:
//                         return "Wednesday";
//                         break;
//                         case 5:
//                             return "Thursday";
//                             break;
//                             case 6:
//                                 return "Friday";
//                                 break;
//                                 case 7:
//                                     return "Saturday";
//                                     break;
//                default:
//                 return "Invalid Day";
//     }
// }
//     console.log(getDayName(6));




    // oddNumbers(7);
function classifyNumber(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            return "Divisible by both 3 and 5";
        } else if (i % 3 === 0) {
            return "Divisible by 3";
        } else if (i % 5 === 0) {
            return "Divisible by 5";
        }
    }
    return "Not divisible by 3 or 5";
}
// Example usage:
console.log(classifyNumber(15));




function printMultiplicationTable(n, r) {
    for (let i = r; i >= 1; i--) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}
  printMultiplicationTable(5,6);