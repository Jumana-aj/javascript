// function addtocart(cart){
//   let amount=0;
//   for( let i=1;i<cart.length;i++){
//     for(let j=1;j<cart[i];j++){
//         if(j<100){
//             amount+=8;
//         }
//         else if(j>300&&j<101){
//             amount+=12;
//         }
//         else{
//             amount+=15;
//         }
//     }
//   }
//   return amount;
// }
// let res=addtocart([250,300,350]);
// console.log(res);


// function printEvenAlph(str){
//     let inputstr=str.split(" ");
//     let outputstr="";
//     for(let i=0;i<inputstr.length;i++){
//         if(inputstr[i].length%2===0){
//             if(outputstr===""){
//                 outputstr+=inputstr[i];
//             }
//             else{
//         outputstr+=","+inputstr[i];
//             }
//         }
//     }
//     console.log (outputstr);
// }
//  printEvenAlph("i am jumana here");



// function findmaxsalary(sal){
//     let maxSal=0;
//     let maxSalEmp="";
//     for(let str of sal){
//         console.log(str)
//     }
//     // console.log(maxsal)
// }
// findmaxsalary(["jumana,17,2000","joshi,12,3000","shaalu,19,4000"]);



// function isleapyear(year){
//     if(year%4==0&& year%100!==0||year%400==0){
//         return true
//     }
//     else{
//         return "false"
//     }
// }
//  let year=2024;
// if(isleapyear(year)){
//     console.log(`${year} is leap`)
// }else{
//     console.log(`${year} is not leap`);
// }


// function seperadig(num){
//     let digits=num.toString().split("").map(Number);
//     let rev=digits.reverse().join('')
//         console.log(rev);  

// }
// // let num=2578;
// seperadig(234);




// function chronology(str){
//     let string=str.split("-");
//     for(let n of string){
//         console.log(n);
//     }

// }
// chronology("")




// function maximumsalary(arr){
//     const datestr1="jan-12-2024";
//     const datestr2="feb-12-1900";
//     const date1=new Date(datestr1);
//     const date2=new Date(datestr2);

//     const firstdate=date1<date2? datestr1:datestr2;
//     console.log(firstdate);
// }
// maximumsalary(["jan-12-2024","feb-12-1900"]);



// function arrayandtarget(arr, tar) {
//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === tar) {
//             return mid;
//         }
//         else if (arr[mid] < tar) {
//             left = mid + 1;
//         }
//         else {
//             right = mid - 1;
//         }
        
//     }
//     return -1;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7]
// let tar = 5
// console.log(arrayandtarget(arr, 5));


// function calculateBill(usage){
//     let bill=0
//     if(usage<=100){
//      bill=usage*8
//     }
//     else if(usage<=300){
//         bill=100*8+(usage-100)*12
//     }
//     else{
//         bill=100*8+200*12+(usage-300)*15
//     }
//     return bill
// }

// // calculateBill([350,150,100])

// function calculatetotalbill(usages){
//     let total=0
//     for(let usage of usages){
//         total+=calculateBill(usage)
//     }
//     console.log(total)
// }
// calculateBill([350,150,100])



// function addtocart(cart){
//     let sum=0
//     for(let items of cart){
//         let[code,quantity]=items.split(" ")
//         if(code==='M'){
//             sum+=quantity*500
//         }
//         if(code==='J'){
//             sum+=quantity*3000
//         }
//         if(code==='T'){
//             sum+=quantity*1500
//         }
//         if(code==='P'){
//             sum+=quantity*10
//         }
//     }
//     console.log(sum)
// }
// addtocart(["M 3", "J 1", "T 2"])






// function unsortedarray(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr;
// }
// let res=unsortedarray([2,3,5,6,4,1]);
// console.log(res);



// function unsortedarray2(array){
//     for(let i= 0;i<array.length;i++){
//         for(let j=0;j<array.length-i-1;j++){
//             if(array[j]>array[j+1]){
//                 [[array[j],array[j+1]]=[array[j+1],array[j]]]
//             }
//         }
//     }
//     return array
// }
// let result=unsortedarray2([10,30,20,40,50]);
// console.log(result);




// function unsortedarray3(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [[arr[j],arr[j+1]]=[arr[j+1],arr[j]]]
//             }
//         }
//     }
//     return arr
// }
// let ress=unsortedarray3([4,6,7,5,-23,43,50]);
// console.log(ress);


// function unsort(arr){
//     for(let i=0;i<arr.length;i++){
       
//         for(let j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//               [[arr[j],arr[j+1]]=[arr[j+1],arr[j]]]
            
//             }
//         }
//     }
  
    
//     return arr
// }
// let rs=unsort([2,24,35,43]);
// console.log(rs)



// function sorting(array,n){
//     let isswapped;
//     for(let i=0;i<n;i++){
//         isswapped=false
//         for(let j=0;j<n;j++){
//             if(array[j]>array[j+1]){
//               [array[j],array[j+1]]=[array[j+1],array[j]]
//               isswapped=true
//             }
//         }
//         if(!isswapped){
//             break;
//         }
//     }
    
//     return array
    
// }
// let array=[1,6,8,7,9,4]
// let n=array.length
//  let rs=sorting(array,n)
//  console.log(rs)



// function sortedornot(arr,a){
//    let isswapped;
//    for(let i=0;i<a-1;i++){
//     isswapped=false
//     for(let j=0;j<a-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             isswapped=true
//         }
//     }
//     if(!isswapped){
//         break;
//     }
//    }
//    return arr
// }
// let arr=[2,24,35,43];
// let a=arr.length;
// let res=sortedornot(arr,a)
// console.log(res);


// // bubble sort


// function sortedornot(array,n){
//     let isswapped;
//     for(let i=0;i<n-1;i++){
//         for(let j=0;j<n-i-1;j++){
//             if(array[j]>array[j+1]){
//                [array[j],array[j+1]]=[array[j+1],array[j]]
//                isswapped=true
//             }
//         }
//         if(!isswapped){
//           break
//         }
//     }
//     return array
// }
// let array=[0,9,78,87,35.77]
// let n =array.length
// let res=sortedornot(array,n)
// console.log(res)










