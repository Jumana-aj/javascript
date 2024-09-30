// let fruit=["apple","orange","banana","kiwi"];
// for(i=fruit.length-1;i>=0;i--){
//     console.log(fruit[i]);
// }



// let batch=["batch1","batch2","batch3","batch4"];
// console.log("the winner is"+" "+ batch[2]);

// 



// let a = 10;
// let b = 5;
// let c="";

// if (a > b) {
//     c = a - b;
// } else {
//     c = b - a;
// }

// let d = c * 2;



// let x = 12;  // 1100 in binary
// let y = 5;   // 0101 in binary

// while (x > 0) {
//     x = x >> 1;
// console.log(x);
//     y = y << 1;
// }
// console.log(y);





let num = 15;  // 1111 in binary
let shiftCount = 0;

for (let i = 0; i < 4; i++) {
    if (num & 1) {
        shiftCount++;
    }
    num = num >> 1;
}
console.log(num);

