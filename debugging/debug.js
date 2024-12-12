
//sum 1


let arr = [5, 8, 13, 21];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 13) {
    console.log("Found 13!");  // Loop continues even after finding 13
  }
}

//sum2



function findMax(arr) {
    let max = 0; 
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
let result=findMax([1,2,3,4,5,6,7,8]);
console.log(result);




//sum3



function findAlphabeticallyFirst(arr) {
    if(arr.length===0) {
        return "";
    }
    let first = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < first) {
        first = arr[i];
      }
    }
    return first;
  }
  let result2=findAlphabeticallyFirst(["ball","cat",,"dod"]);
  console.log(result2);



  //sum4




  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {  
      let mid = Math.floor((left + right) / 2);
      
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] > target) {
       right = mid - 1;
      } else {
        left = mid + 1;
      }
     
    }
    return -1;  
  
  }

  let result3=binarySearch([1,2,3,4,5,6],6);
  console.log(result3);



  //sum4



