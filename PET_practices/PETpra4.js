
//fix the issues//


calculateArea();
greetUser();

function calculateArea() {
 const radius = 5;
 var area = Math.PI * radius * radius;
 console.log(area);
}
function greetUser() {
 var userName = "John";
 console.log(userName);
}

//sum2//
let count = 1;
while (count <=100) {
 console.log("Counting down: " + count);
 count = count + 1;
}



//sum3//
let temperature = 30;
if (temperature <= 20) {
    console.log("It's cold outside.");
   } else {
    console.log("It's warm outside.");
   }

//sum4//
// checkNumber(-5);
// checkNumber(0);
;
function checkNumber(num) {
  if (num > 0){
    console.log("Negative");
  }
  else if (num < 0) {
    console.log("Positive");
  } else {
    console.log("Zero");
  }
}   
checkNumber(0);



//sum5//

function sumNumbers(n) {
    let sum = 0;
    let i = 0; 
     while (i <= n) {
      sum += i;
      i++;
    }
      return sum;
  }
 let res=sumNumbers(10);
 console.log(res);


 