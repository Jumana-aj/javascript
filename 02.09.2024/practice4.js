let a=10;
let b=12;
let c=13;
if(a>5){
    let d=a+b;
    console.log(d);
}
else if(a<5){
    d=a+c;
    console.log(d);
}
else{
    console.log("nothing happened");
}

let price=40;
let ispre=true;
if(price>50 || ispre){
    console.log("free");
}
else{
    console.log("not free");
}


let g=4.5;
let extra=2;
if(g>=3.5 && extra>0){
    console.log("eligible");
}
else{
    console.log("not eligible");
}




let amount=200;
let item=10;
let discount=20;
if(amount>100||item>5){
    console.log("discount");
    let discamount= amount*discount/100;
    let total=amount-discamount;
    console.log(total);
}
else{
    console.log("not discount");
}




