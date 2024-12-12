// function gcd(x,y){
//    let max=Math.max(x,y);
//     while(max>0){
//         if(x%max==0&&y%max==0){
//             return max;
//         }
//         max--;
//     }
// }
//  let res=gcd(10,20);
//  console.log(res);



//  function lcm(a,b){
//     let tot=a*b;
//     for(i=1,i<tot;i++){
//         if(a%i===0&&b%i===0){
//             return i;
//         }
//     }
//  }



// //lcm//
// function lcm(a,b){
//     let tot=a*b;
//     for(i=1;i<tot;i++){
//         if(i%a==0&&i%b==0){
//            return i;
//         }
//     }

// }
// let res=lcm(10,20);
// console.log(res);





// function lcm2(c,d){
//     let total=c*d;
//     for(i=1;i<=total;i++){
//         if(i%c==0&&i%d==0){
//             return i;
//         }
//     }
// }
// let result=lcm2(2,4);
// console.log(result);




// let x=30;
// let y=40;
// let tott=x*y;
// for(i=1;i<=tott;i++){
//     if(i%x==0&&i%y==0){
//       console.log(i)
//     }
// }




// function gcd(r,s){
//     let max=Math.max(r,s);
//     while(max>0){
//         if(r%max==0&&s%max==0){
//           return max;
//         }
//         max--;     
//     }
    
// }
//  let totta=gcd(10,20);
//  console.log(totta);






//  function gcdvalue(e,f){
//     let maxi=Math.max(e,f);
//     while(maxi>0){
//         if(e%maxi==0&&f%maxi==0){
//             return maxi;
//         }
//         maxi--;
//     }
    
//  }
//  let result2=gcdvalue(78,80);
//  console.log(result2);



//  function primenum(d){
//     if(d<=1){
//         return "not prime";
//     }
//     else{
//         for(i=2;i<=Math.sqrt(d);i++){
//             if(d%i===0){
//                 return false;
//             }
//         }
//     }
//     return true;

//  }
//  let calc=primenum(8);
//  console.log(calc);






//  function isprimornot(j){
//     if(j<=1){
//         return "not prime";
//     }
//     else{
//         for(i=2;i<Math.sqrt(j);i++){
//             if(j%i===0){
//                 return "its not a prime";
//             }
//         }
//     }
//     return "its a prime";
//  }
//  let ress=isprimornot(8);
//  console.log(ress);





//  let n=5;
//  for(i=1;i<=n;i++){
//     let str="";
//     for(j=1;j<=i;j++){
//         str=str+"*"+" ";
//     }
//     console.log(str);
//  }


// let u=6;
// for(i=1;i<=u;i++){
//     let str="";
//     for(j=1;j<=u-i;j++){
//         str+=" ";
//     }
//     for(k=1;k<=i;k++){
//         str+="*"+" ";
//     }
//     console.log(str);
// }




let tri=10;
for(i=tri;i>=0;i--){
    let str="";
    for(j=0;j<tri-i;j++){
        str+=" ";
    }
    for(k=0;k<=i;k++){
        str+="*"+" ";
    }
    console.log(str);
}



// function gcdval(a,b){
//     let maximum=Math.max(a,b);
//     while(maximum>0){
//            if(a%maximum==0&&b%maximum==0){
//             return maximum;
//            }
//            maximum--;
//     }
// }
// let re=gcdval(20,40);
// console.log(re);


// function lcmof(c,d){
//     let t=c*d;
//     for(i=1;i<=t;i++){
//         if(i%c==0&&i%d==0){
//             return i;
//         }
//     }
// }
// let f=lcmof(3,6)
// console.log(f);