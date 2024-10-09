let oldp=[122,34,56];
let ord_arr= oldp.sort((x,y)=> y-x);
console.log(ord_arr);
   


let set1=[1,2,3];
let set2=[2,3,4];

let union=[...new Set([...set1,...set2])];
console.log(union);



students = [
    { subject1Marks: 80, subject2Marks: 90, subject3Marks: 70 },
    { subject1Marks: 60, subject2Marks: 50, subject3Marks: 65 },
    ]
console.log(Object.values (students[0])) ;   