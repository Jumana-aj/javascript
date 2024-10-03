// let array=[1,2,3,4,5];
// let res=array.reverse();
// console.log(res);

// function mul(n){
//     for(i=1;i<=n;i++){
//         console.log(i*6);
//    }
// }
// mul(12);



// function multi(n){
//     for(i=1;i<=n;i++){
//         let mul=i*7;
//         console.log(`${i} * 7 =${mul}`);
//     }
// }
// multi(8);


// function oddnum(o){
//     for(i=0;i<=o;i++){
//       if(i%2===1){
//     console.log(i)
//       }  
//     }
    
// }
// oddnum(25);




// let array2=[20,30,40,50,60];
// let len=array2.length;
// let sum=0;
// let avg=0;
// for(i=0;i<=array2.length;i++){
//     sum+=i;
//     avg=sum/array2.length;
// }
// console.log(avg);


// let int=[5,10,15,36,43];
// for(i=0;i<int.length;i++){
//     if(int[i]%5==0){
//         console.log(int[i])
//     }
// }

// let arr=[2,11,6,7,9,25];
// let a=2;
// let b=25;
// let count=0;
// for(let el of arr){
//     if(el>a && b>el){
//        count++;
//     }
// }
// console.log(count);


let array=["a","b","b","c","d"];
let count="b";
for(i=0;i<array.length;i++){
    if(array[i]=="b"){
        count ++;
        count=count+1;
    }
}
console.log(count);