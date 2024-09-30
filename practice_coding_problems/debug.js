//prob1
// calculateArea();
// greetUser();

// function calculateArea() {
//  const radius = 5;
//  var area = Math.PI * radius * radius;
//  console.log(area);
// }
// function greetUser() {
//  var userName = "John";
//  console.log(userName);
// }



//prob2
// let count = 1;
// while (count <=100) {
//  console.log("Counting down: " + count);
//  count = count + 1;
// }



//prob3
// let temperature = 30;
// if (temperature >=0) {
//     console.log("It's cold outside.");
//    } else {
//     console.log("It's warm outside.");
//    }

//prob4

// function checkNumber(num) {
//   if (num > 0){
//     console.log("Negative");
//   }else if (num < 0) {
//     console.log("Positive");
//   } else {
//     console.log("Zero");
//   }
// }
// checkNumber(10, 20);
// checkNumber(-5);
// checkNumber(0);



//prob5

// function sumNumbers(n) {
//   let sum = 0;
//   let i = 0;
//   while (i <= n) {
//     sum += i;
//     i++;
//   }  
//   return sum;
// }
// let result=sumNumbers(10);
// console.log(result);

// function classifyNumbers(j){
//   if(j%3==0){
//      console.log("divisible by three");
//   }
//   else if(j%5==0){
//     console.log("divisible by five");
//   }
//   else if(j%3==0&&j%5==0){
//     console.log("divisible by three and five");
//   }
//   else{
//     console.log("not divisible by anything")
//   }
// }
// classifyNumbers(6);



// function getdaynum(num){
//   switch(num){
//     case 1:
//       return "monday";
//     case 2:
//       return "tuesday";
//     case 3:
//       return "wednesday";
//     case 4:
//       return "thursday";
//     case 5:
//       return "friday";
//     case 6:
//       return "saturday";
//     case 7:
//       return "friday";
//     default:
//       return "invalid";

//   }
// }
// console.log(getdaynum(8));



function printmultiplicationtable(r){
  let i=1;
  while(i<=r){
   if(i%2===1){
    let tab=i*r;
    console.log(i+"*"+r+"="+tab)
   }
   i--;
  }
  return i;
}
printmultiplicationtable(5);

