function printNum(a,b){
    for(i=a;i<=b;i++){
        console.log(i);
    }
    return i;
}
printNum(1,15);





function printwhile(c,d){
    
while(c>=d){
    console.log(c);
    c--;
}
return c;
}
printwhile(20,10);




function arr(array){
    for (let arr of array){
        console.log(arr);
    }
}
arr(['red','blue','green']);



function sumOfNumb(a,b){
    let sum=0;
    for(i=a;i<=b;i++){
        sum+=i;
    }
    return sum;
}
let res2=sumOfNumb(1,50);
console.log(res2);



function factorialnum(a){
    let factorial=1;
    for(i=1;i<=a;i++){
        factorial*=i;
    }
    return factorial;
}
 let res3=factorialnum(5);
 console.log(res3);




 function oddeven(x){
    
 }