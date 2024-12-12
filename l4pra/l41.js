// function countvowels(string){
//     let vowels="aeiou";
//     let distringvow="";
//     let count=0;
//     for(let char of string){
//         if(vowels.includes(char)&&!distringvow.includes(char)){
//             distringvow+=char;
//             count++;
//         }
//     }
//     console.log(distringvow.length);
// }
// let resu=countvowels("cool");
// console.log(resu);

// function addtocart(cart){
//     let total=0;

//     for(let item of cart){
//         let [code,quantity]=item.split(" ");
//         quantity=parseInt(quantity,10);
//     }

//     if(code==="M"){
//         total+=500*quantity;
//     }
//     else if(code==="j"){
//         total+=1000*quantity;
//     }
//     else if(code==="p"){
//         total+=10*quantity;
//     }
//  return total;
// }
//  let result=addtocart(["M 3","p 2"]);
//  console.log(result);





// function findMax(arr) {
//     if (arr.length === 0) return undefined;

//     let max = 0;
//     for (let i = 1; i <= arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i];
//       }
//     }
//     return max;
//   }

//   console.log(findMax([1, 3, 5, 2, 4]));
//   console.log(findMax([]));
//   console.log(findMax([10, -5, 20]));
//   console.log(findMax["a", "b", "c"]);
//   console.log(findMax());




// function lcmOfArray(arr){
//     let LCMof=(a,b)=>{
//         let max= Math.max(a,b);
//         while(true){
//             if(max%a===0 && max%b==0){
//                 return max;
//             }
//             max++;
//         }

//     }
//     return arr.reduce((num, hcf)=> LCMof(num, hcf))
// }

// console.log(lcmOfArray([3,4,5,6]));




// function lcmOfArray(arr) {
//     let LCMof = (a, b) => {
//         let max = Math.max(a, b);
//         while (true) {
//             if (max % a === 0 && max % b == 0) {
//                 return max;
//             }
//             max++; 
//         }
       
//     }
//     return arr.reduce((num1, num2) => LCMof(num1, num2));

// }

// console.log(lcmOfArray([1,2,3,4]));


// function lcm(array){
//     let lcmoff=(a,b) =>{
//          let maximum=Math.max(a,b)
//          while(true){
//             if(maximum%a==0&&maximum%b==0){
//                 return maximum;
//             }
//             maximum++;
//          }

//     }
//     return array.reduce((number1,number2)=>lcmoff(number1,number2));
// }
// console.log(lcm([5,10,15]));




// function lcmofa(ar){
//     let lcmm=(a,b)=>{
//         let maxx=Math.max(a,b);
//         while(true){
//             if(maxx%a==0&&maxx%b==0){
//                 return maxx
//             }
//             maxx++
//         }
//     }
//      return ar.reduce((num1,num2)=>lcmm(num1,num2));

// }
// console.log(lcmofa([2,3,4,5,68]));


// function leastcommonmultiple(val){
//     let lcm=(x,y)=>{
//         let maxxi=Math.max(x,y);
//         while(true){
//             if(maxxi%x==0&&maxxi%y==0){
//                 return maxxi;
//             }
//             maxxi++
//         }
//     }
//     return val.reduce((num1,num2)=>lcm(num1,num2))
// }
// console.log(leastcommonmultiple([2,5,7,6]));


// function lcmwithoutarr(a,b){
//     let max=Math.max(a,b)
//     while(true){
//         if(max%a==0&&max%b==0){
//             return max
//         }
//         max++
//     }
// }
// console.log(lcmwithoutarr(2,3));



// function fibbonacciseries(x){
// // if(x===0) return[]
// // if(x===1)return[0]
// let fib=[0,1]
// for(let i=2;i<x;i++){
//     fib.push(fib[i-1]+fib[i-2])
// }
// return fib
// }

// console.log(fibbonacciseries(10))



function lcm(a,b){
    let max=Math.max(a,b)
    
}



















