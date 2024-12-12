let array=[1,2,3,4];
let max=Math.max(...array);
console.log(max);

maximum
let arra=[12,2,45,66];
let tem=arra[0];
let len=arra.length;
for(i=1;i<len;i++){
    if(tem<arra[i]){
        tem=arra[i];
    }
}
console.log(tem);


function greater(ar){
    let tem=ar[0];
let len=ar.length;
for(i=1;i<len;i++){
    if(tem<ar[i]){
        tem=ar[i];
    }
}
return tem;
}
let arr=[1,2,3];
let res=greater(arr);
console.log(res);


function lesser(m){
    let temp=m[0];
    let len=m.length;
    for(i=1;i<len;i++){
        if(temp>m[i]){
            temp=m[i];
        }
    }
    return temp;
}
let m=[11,2,4,3];
console.log(lesser(m));




function maximum(h){
    let na=h[0];
    let leng=h.length;
    for(i=1;i<leng;i++){
        if(na<h[i]){
            na=h[i];
        }
    }
    return na;
}
let h=[22,33,44,55]
let resi=maximum(h)
console.log(resi);




function minimum(q){
    let y=q[0];
    let lengt=q.length;
    for(i=1;i<lengt;i++){
        if(y>q[i]){
            y=q[i];
        }
    }
    return y;
}
let q=[8,7,6,5];
let result=minimum(q);
console.log(result);


let arraa=[2,3,4,5];
let min=Math.min(...arraa);
console.log(min);



