// function printnum(n) {
//     for (i = 0; i <= n; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             console.log("fizzbuzz");
//         }
//         else if (i % 3 == 0) {
//             console.log("fizz");
//         }
//         else if (i % 5 == 0) {
//             console.log("buzz");
//         }
//         else {
//             console.log(i);
//         }
//     }
// }
// printnum(100);




// //function 

// function isprime(n) {
//     // if(n <= 1)return "not prime";
//     // if(n == 2)return "prime";
    
//     for (let i = 2; i < Math.sqrt(n); i++) {
//         if (n % i == 0) {
//             return "false";
//         }
//         else {
//             return "true";
//         }
//     }
// }
// console.log(isprime(7));




// //lcm

// function lcmof(x,y){
//     let tot=x*y;
//     for(i=1;i<=tot;i++){
//         if(i%x==0&&i%y==0){
//             return i;
//         }
//     }
// }
// console.log(lcmof(20,40));



// //gcd

// function gcd(num1,num2){
//     while(num2!==0){
//         let temp=num2;
//         num2=num1%num2;
//         num1=temp;
//     }
//     return Math.abs(num1);
// }
//  console.log(gcd(66,20));



