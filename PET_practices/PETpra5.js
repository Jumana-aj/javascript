// // sum4//

// function sumnumbers(n){
//      let sum=0;
//     for(i=0;i<=n;i++){
//         sum+=i;
//     }
//     return sum;
// }
// let result=sumnumbers(10);
// console.log(result);


// // sum4 ex//

// function sumnumbers2(b){
//     let sum=0;
//     for(i=0;i<=b;i++){
//         sum+=i;
//     }
//     return sum;
// }
// let result1=sumnumbers2(15);
// console.log(result1);



// //sum 2//


// function calculatefactorial(n){
//     let factorial=1;
//     for(i=1;i<=n;i++){
//         factorial*=i;
//     }
//     return factorial;
// }
// let res=calculatefactorial(5);
// console.log(res);

// //sum2 ex//

// function calculatefactorial2(x){
//     let factorial=1;
//     for(i=1;i<=x;i++){
//         factorial*=i;
//     }
//     return factorial;
// }
// let res2=calculatefactorial2(6);
// console.log(res2);

// doubt sum//
function printevennumbers(a){
    let i=2;
   while(i<=a){
    console.log(i);
     i+=2;
   }
   return i;
}
 printevennumbers(10);



// //sum3//
// // odd or even using for loop//
// function oddoreven(n){
//  for(i=0;i<=n;i++){
//     if(i%2==0){
//         console.log(i);
//     }
//  }
//  return i;
// }
// oddoreven(10);

// //odd or even using for loop ex//
// function oddeven(j){
//     for(i=0;i<=j;i++){
//         if(i%2==1){
//             console.log(i);
//         }
//     }

// }
// oddeven(10);



// //sum4//

function classifynumbers(w){
    for(i=0;i<=w;i++){
        if(w%3==0 && w%5==0){
            return"divisible by both";
          
        }
        else if(w%5==0){
            return"divisible by five";
            
        }
        else if(w%3==0){
            return "divisible by three";
           
        }
        else{
            return"none";
           
        }
    }
}
 let total=classifynumbers(15);
 console.log(total);



// //  sum 5//
//  function getdaybynum(n){
//     switch (n){
//         case 1:
//             console.log("monday");
//             break;
//         case 2:
//             console.log("tuesday");
//             break;
//         case 3:
//             console.log("wednesday");
//             break;
//         case 4:
//             console.log("thursday");
//             break;
//         case 5:
//             console.log("friday");
//             break;
//         case 6:
//             console.log("saturday");
//             break;
//         case 7:
//             console.log("sunday");
//             break;
//         default:
//             console.log("wrong");
//             break;
//     }
//  }
// getdaybynum(6);
  


// function printmultiplicationtable(n,r){
//     let mul=0;
//     for(i=r;i>=n;r--){
//       n*r;
//     }
//     return i;
// }
// let total1=printmultiplicationtable(5,6);
// console.log(total1);




function printmul(x,y){
  for(i=y;i>=0;i--){
     let tot=i*x;
    console.log(`${i}*${x}=${tot}`);
  }
}
printmul(5,10);
