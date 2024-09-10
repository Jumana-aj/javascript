
function greet(){
    console.log("hello world");
}
greet();


function displaygreeting(){
    let nam="hello[name]!";
    console.log(nam);
}
  displaygreeting();



let number=10;
  function calculatesquare(number){
    return number**2;
  }
  let result=calculatesquare(number);
  console.log(result);


let x="jumana";
let y="hik";
function concatstrings(x,y){
    let z=x+y;
    return z;
}
let result1=concatstrings(x,y);
console.log(result1);


let r=2;
let d=2;
function addnumbers(r,d){
    let c=r+d;
    return c;
}
let result2=addnumbers(r,d);
console.log(result2);








let temperature = 30;
if (temperature <=20) {
 console.log("It's cold outside.");
} else {
 console.log("It's warm outside.");
}


let count = 1;
while (count <= 100) {
 console.log("Counting down: " + count);
 count = count + 1;
}

checkNumber(-5);
checkNumber(0);
checkNumber(10, 20);
function checkNumber(num) {
  if (num < 0){                    //less than 0 is negative
    console.log("Negative");      //brackets missing
  }                  
  else if (num > 0) {              //grater than 0 is positive
    console.log("Positive");
  }
  else {
    console.log("Zero");
  }
}


calculateArea();
greetUser();
function calculateArea() {
 const radius = 5;
 let area
 area = Math.PI * radius * radius;  //area is already declared
 console.log(area);
}
function greetUser() {
    var userName = "John";
    console.log(userName); //username should be declared before print statement
}
