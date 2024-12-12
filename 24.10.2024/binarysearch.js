
// function binarySearch(arr, m) {
//     let leftIndex = 0;
//     let rightIndex = arr.length - 1;

//     while (leftIndex <= rightIndex) {
//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//         if (m === arr[middleIndex]) {
//             return middleIndex; // Element found
//         } else if (m < arr[middleIndex]) {
//             rightIndex = middleIndex - 1; // Search left half
//         } else {
//             leftIndex = middleIndex + 1; // Search right half
//         }
//     }
//     return -1; // Element not found
// }

// let res = binarySearch([1, 2, 3, 4, 5, 6], 4);
// console.log(res); // Output: 3 (index of 4 in the array)


function binary(array,target){
    let leftIndex=0;
    let rightIndex=array.length-1;
    while(leftIndex<=rightIndex){
        middleIndex= Math.floor(leftIndex+rightIndex)/2;
    }
    if(target===array[middleIndex]){
        return middleIndex;
    }
    else if(target<array[middleIndex]){
        rightIndex=middleIndex-1;
    }
else{
    leftIndex=middleIndex+1;
}
return -1;
}
let res=binary([2,3,4,5,6,7,8],7);
console.log(res);



// //sum2
// function arrayands(a,b){
//     for(let i=0;i<a.length;i++){
//         if(a[i]==b){
//             return true;
//         }

//        }
//        return false;
//     }
// let a=["aj","bt","pp"];
// let b=["pp"];
//  console.log(arrayands(a,b));



//  //to find a string


//  function stringfinding(arr,s){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]==s){
//             return "found";
//         }
//     }
//     return "not found";
//  }
//  let arr=["aj","ao","ab"];
//  let s=["aj"];
//  console.log(stringfinding(arr,s));