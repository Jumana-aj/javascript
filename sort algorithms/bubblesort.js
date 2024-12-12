// function sortedornot(array,n){
//     let isswapped;
//     for(let i=0;i<n-1;i++){
//         for(let j=0;j<n-i-1;j++){
//             if(array[j]>array[j+1]){
//                [array[j],array[j+1]]=[array[j+1],array[j]]
//                isswapped=true
//             }
//         }
//         if(!isswapped){
//           break
//         }
//     }
//     return array
// }
// let array=[0,9,78,87,35.77]
// let n =array.length
// let res=sortedornot(array,n)
// console.log(res)






// function unsortedarray2(array){
//     for(let i= 0;i<array.length;i++){
//         for(let j=0;j<array.length-i-1;j++){
//             if(array[j]>array[j+1]){
//                 [[array[j],array[j+1]]=[array[j+1],array[j]]]
//             }
//         }
//     }
//     return array
// }
// let result=unsortedarray2([10,30,20,40,50]);
// console.log(result);




// function unsortedarray3(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-1;j++){
//             if(arr[j]>arr[j+1]){
//                 [[arr[j],arr[j+1]]=[arr[j+1],arr[j]]]
//             }
//         }
//     }
//     return arr
// }
// let ress=unsortedarray3([4,6,7,5,-23,43,50]);
// console.log(ress);


// function unsort(arr){
//     for(let i=0;i<arr.length;i++){
       
//         for(let j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//               [[arr[j],arr[j+1]]=[arr[j+1],arr[j]]]
            
//             }
//         }
//     }
  
    
//     return arr
// }
// let rs=unsort([2,24,35,43]);
// console.log(rs)



// function sorting(array,n){
//     let isswapped;
//     for(let i=0;i<n;i++){
//         isswapped=false
//         for(let j=0;j<n;j++){
//             if(array[j]>array[j+1]){
//               [array[j],array[j+1]]=[array[j+1],array[j]]
//               isswapped=true
//             }
//         }
//         if(!isswapped){
//             break;
//         }
//     }
    
//     return array
    
// }
// let array=[1,6,8,7,9,4]
// let n=array.length
//  let rs=sorting(array,n)
//  console.log(rs)



// function sortedornot(arr,a){
//    let isswapped;
//    for(let i=0;i<a;i++){
//     isswapped=false
//     for(let j=0;j<a-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             isswapped=true
//         }
//     }
//     if(!isswapped){
//         break;
//     }
//    }
//    return arr
// }
// let arr=[2,24,35,43];
// let a=arr.length;
// let res=sortedornot(arr,a)
// console.log(res);



function sorted(arr){
    let isswapped;
    let a=arr.length;
    for(let i=0;i<a;i++){
        isswapped=false
        for(let j=0;j<a-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                isswapped=true;
            }

        }
        if(!isswapped){
            break
        }
    }
    return arr
}

console.log(sorted([2,3,4,1,6,5]))


function sort(arr){
let swapping;
let n=arr.length;
for(i=0;i<n;i++){
    swapping=false;
    for(j=0;j<n-1-i;j++){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            swapping=true;
        }
    }
    if(!swapping){
        break
    }
 
}
return arr;
}
console.log(sort([5,7,9,8,7]))



function bubblesorting(arrays){
    let isswapped;
    let a =arrays.length;
    for(let i=0;i<n;i++){
        isswapped=false;
        for(let j=0;j<n-1-i;j++){
            if(arrays[j]>arrays[j+1]){
                arrays[j],arrays[j+1]=arrays[j+1],arrays[j]
            }
        }
        if(!isswapped){
            break
        }
    }
    return arrays
}








