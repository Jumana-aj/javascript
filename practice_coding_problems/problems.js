
//prob1//

function sumnumbers(n){
    let sum=0;
    let i=1;
    while(i<=n){
        sum+=i;
        i++; 
    }
    return sum;
}
let result=sumnumbers(10)
console.log(result);


//prob2//
function calculateFactorial(n){
    let i=1;
    let factorial=1;
    while(i<=n){
        factorial*=i;
        i++;
    }
    return factorial;
}
let result1=calculateFactorial(5);
console.log(result1);



//prob3//

function printEvenNumbers(n){
    let i=2;
    while(i<=n){
        if(i%2==0){
            console.log(i)
        }
        i++;
    }
    return i;
}
let result3=printEvenNumbers(10);


//multiple of 5
function multipleof5(n){
   for(i=n; i>=0;i--){
    
   }
}