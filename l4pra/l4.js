// function printstar(n){
//     for(let i=1;i<=n;i++){
//         let output=getspaces(n-i);
//         let pattern=getNumsequence(i);
//         console.log(output+pattern);
//     }


//     for(  let i=n-1;i>=1;i--){
//         let output=getspaces(n-i);
//         let pattern=getNumsequence(i);
//         console.log(output+pattern);
//     }
// }
// function getspaces(n){
//     let str="";
//     for( let i=1;i<=n;i++){
//         str+=" ";
//     }
//     return str;
// }
// function  getNumsequence(n){
//     let str="";
//     for( let i=1;i<=n;i++){
//         str+=i+" ";
//     }
//     return str;
// }
// let res=printstar(5);
// console.log(res);




// function addtocart(cart){
//     let total=0;

//     for(let item of cart){
//         let [code,quantity]=item.split(" ");
//         quantity=parseInt(quantity,10);
//     }

//     if(code==="M"){
//         total+=500*quantity;
//     }
//     else if(code==="j"){
//         total+=1000*quantity;
//     }
//     else if(code==="p"){
//         total+=10*quantity;
//     }
//  return total;
// }
//  let result=addtocart(["M 3","p 2"]);
//  console.log(result);






// function countvowels(string){
//     let vowels="aeiou";
//     let distringvow="";
//     for(let char of string){
//         if(vowels.includes(char)&&!distringvow.includes(char)){
//             distringvow+=char;
//             count++;
//         }
//     }
//     console.log(distringvow.length);
// }
// let resu=countvowels("cool");
// console.log(resu);