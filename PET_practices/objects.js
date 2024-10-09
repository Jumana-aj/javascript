// let car= {make:2,
//     model:8,
//     year:2020
// }


// console.log(car.make);

// let book=[{
//     title:"jj",
//     author:"aj"
// }]
// console.log(book.title);

// let cars = [
//     { brand: "Tata", model: "Nano" },
//     { brand: "Honda", model: "Civic" }
// ];
// let year=[1990, 2019];
// for(let i=0; i< year.length; i++){
//     cars[i].jumana= year[i];
// }

// console.log(cars);

let students = [
    { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
    { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
    ];
let result=[]
for(i=0; i<students.length; i++){
   result[i]= students[i].subject1Marks+students[i].subject2Marks+ students[i].subject3Marks
}
console.log(result);
