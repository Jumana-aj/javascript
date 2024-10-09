// function character(n) {
//     if (n == "a" || n == "A") {
//         return ("true");
//     }
//     else if (n == "d" || n == "D" || n == "e" || n == "E" || n == "f" || n == "F") {
//         return ("false");
//     }
//     else {
//         return (1);
//     }

// }
// let res = character("j");
// console.log(res);


// function arr(array) {
//     let sum = 0;
//     for (i = 0; i < array.length; i++) {
//         if (arr[i] % 2 == 1) {
//             sum += array[i];
//         }
//     }
//     if (sum % 3 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// let res1 = arr([1, 2, 3, 4, 5, 1]);
// console.log(res1);

// let arr = [];
// function num1(n1, n2) {
//     for (i = n1; i <= n2; i++) {
//         arr.push(i);
//     }
//     console.log(arr);
//     let revarr=arr.reverse();
//     console.log(revarr);
// }
// num1(5, 10);



// let array=[];
// function numbers(n1,n2){
// for(i=n1;i<=n2;i++){
// if(i%2==0){
//     array.unshift();
// }
// else{
//     array.push();
// }
// }
// console.log(i);
// }
//  let res=numbers(20,30);
//  console.log(res);


let arr=[];
function oddeven(array){
for(let i=1;i<array.length;i++){
    if(array[i]%2==1){
        arr.unshift(i);
    }
    else{
        arr.push(i);
    }
   
}
console.log(arr);
}
oddeven([2,3,4,5,6,7,8]);

