function patternprint(a){
    for(let i=1;i<=a;i++){
        let str="";
        for(let j=a-i;j>0;j--){
            str=str+"";
        }
        for(let k=1;k<=i;k++){
            str=str+"*"+"";
        }
console.log(str)
    }
}
patternprint(5);



function patternprint2(b){
    for(let i=0;i<=b;i++){
        let str="";
        for(let j=b-i;j>0;j--){
            str+="*";
        }
        console.log(str);
    }
}
patternprint2(5);







// function patternprint2(b){
//     for(let i=0;i<=b;i++){
//         let str="";
//         for(let j=b-i;j>0;j--){
//             str+="*"+" ";
//         }
//         console.log(str);
//     }
// }
// patternprint2(5);



// function amstrongnumber(num){
//     let diglist=num.toString().split("");
//     let len=diglist.length;
//     let sum=0;
//     for(let digit of diglist){
//         sum+=Math.pow(parseInt(digit),len);
//     }
//     return sum===num;
// }
// let res=amstrongnumber(1634);
// console.log(res);
// if(amstrongnumber){
//     console.log(${num} is an amstrong number);
// }
// else{
//     console.log(${num} is not a amstrong number);
// }




// function patternprint3(c){
//     for(let i=0;i<=c;i++){
//         let str="";
//         for(let j=c-i;j>0;j--){
//             str+="*";
//         }
//         console.log(str);
//     }
    
// }
// patternprint3(5);




// function pallindrome(letter){
//     let ar=letter.split();
//     let len=ar.length;
//     let revstr="";
//     for(let i=len-1;i>=0;i--){
//         revstr+=ar[i];
//     }
//     return revstr===letter;
// }
// let letter="mak"
// let res=pallindrome(letter);
// console.log(res);