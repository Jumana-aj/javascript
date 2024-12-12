//length
let fruits=["apple","banana","kiwi","mango"];
console.log(fruits.length);



//indexof
let names=["ab","cd","ef","gh"];
console.log(names.indexOf("ab"));



//push and pop
let num=[1,2,3];
num.push(4);
console.log(num);


let lastnum=num.pop();
console.log(lastnum);
console.log(num)



//shift and unshift

let alph=["b","c","d"];
alph.unshift("a");
console.log(alph);


alph.shift()
console.log(alph);


//join 
let subject=["english","tamil","maths","science"];
let sub=subject.join(", ");
console.log(sub);

let str="red,blue,green";
let string=str.split(",");
console.log(string);