// function printStar(n) {
//     for(let i = 1; i <= n; i++) {
//         let output = getSpaces(n - i);
//         let pattern = getNumSequence(i);
//         console.log(output + pattern);

//     }

//     // Reverse print
//     for(let i = n - 1; i >=1; i--) {
//         let output = getSpaces(n - i);
//         let pattern = getNumSequence(i);
//         console.log(output + pattern);
//     }

// }


// function getSpaces(n) {
//     let outputStr = "";
//     for(let i = 1; i <= n; i++) {
//         outputStr += " ";
//     }
//     return outputStr;
// }

// function getNumSequence(n) {
//     let outputStr = "";
//     for(let i = 1; i <= n; i++) {
//         outputStr += i + " ";
//     }
//     return outputStr;
// }


// let res=printStar(5);
// console.log(res);






// function calculateTotal(cart) {
//     let total = 0;
  
//     // Loop through each item in the cart
//     for (let item of cart) {
//       let [code, quantity] = item.split(" ");
//       quantity = parseInt(quantity, 10);  // Convert quantity to a number
  
//       // Check the code and calculate the total based on the item
//       if (code === "M") {
//         total += 500 * quantity;  // Mug
//       } else if (code === "J") {
//         total += 3000 * quantity; // Jeans
//       } else if (code === "T") {
//         total += 1500 * quantity; // T-shirt
//       } else if (code === "P") {
//         total += 10 * quantity;   // Pen
//       }
//     }
  
//     console.log(total);
//   }
//   let ress=calculateTotal(["M 2","J 6"]);
//   console.log(ress)








// function print(o){
//   for(let i=1;i<=o;i++){
//     let output=getSpaces(o-i);
//     let pattern=getNumSequence(i);
//     console.log(output+pattern);
//   }


//   for(let i=o-1;i>=1;i--){
//     let output=getSpaces(o-i);
//     let pattern=getNumSequence(i);
//     console.log(output+pattern);
//   }


// function getSpaces(o){
//   let outputstr="";
//   for(i=1;i<=o;i++){
//    outputstr+=" ";
//   }
//   return outputstr;
// }
// function getNumSequence(o){
//   let outputstr="";
//   for(i=1;i<=o;i++){
//     outputstr+=i+" ";
//   }
//   return outputstr;
// }


// }
// let res=print(5);
// console.log(res);



// function printstar(n){
//   for(i=1;i<=n;i++){
//   let  output=getSpaces(n-i);
//   let  pattern=getNumSequence(i);
//   console.log(output+pattern);
//   }


//   for(i=n-1;i>0;i--){
//     let output=getSpaces(n-i);
//     let pattern=getNumSequence(i);
//     console.log(output+pattern);
//   }


//   function getSpaces(n){
//     let str="";
//     for(let i=1;i<=n;i++){
//     str+=" ";
//     }
//     return str;
// }
//  function getNumSequence(n){
//   let str="";
//   for(let i=1;i<=n;i++){
//     str+=i+" ";
//   }
//   return str;
//  }
// }
// let ress=printstar(4);
// console.log(ress);




function calculateTotalBill(usages) {
  let amount=0;
  for(let i=0;i<usages.length;i++){
     for(let j=1;j<=usages[i];j++){
         if(j<=100){
             amount+=8;
         }
         else if(j<=300 && j>=101){
             amount+=12;
         }
         else{
             amount+=15;
         }
     }
    
  }
console.log(amount);
}

 calculateTotalBill([350,250,100]);






 function calculateTotalamount(usage){
  let amount=0;
  for(let i=1;i<usage.length;i++){
    for(let j=1;j<usage[i];j++){
      if(j<100){
        amount+=8;
      }
      else if(j<=300&j>=101){
        amount+=12;
      }
      else {
        amount+=15;
      }
    }
  }
  console.log(amount);
 }
 calculateTotalamount([120,300,230]);




//  function printEvenAlph(arr){
//   let inputstring=arr.split(" ");
//   let outputstring="";
//   for(let i=0;i<inputstring.length;i++){
//     if(inputstring[i].length%2===0){
//       if(outputstring==" "){
//         outputstring+=inputstring[i];
//       }
//       else{
//         outputstring+=","+inputstring[i];
//       }
//     }
//   }
//   console.log(outputstring);
//  }
//  printEvenAlph(["hi i am jumana from trichy"]);





// function printEvenLengthStrs(inputStr) {
//   let inputStrs = inputStr.split(" ");
//   let outputStr = " ";
//   for(let i = 0; i < inputStrs.length; i++) {
//       if(inputStrs[i].length % 2 == 0) {
//           if(outputStr == "") {
//               outputStr += inputStrs[i];
//           }
//           else {
//               outputStr += "," + inputStrs[i] ;
//           }
//       }
//   }
//   console.log(outputStr)
// }

// printEvenLengthStrs("hi i am jumana from trichy");




// function circularShiftRight(array){
//   if(array.length===0){
//     return;
//   }
//   let lastelement=array[array.length-1];
// for(let i=<array.length;i>0;i--){

// }
// }

function circularShiftRight(arr) {
  if (arr.length === 0) return; // Handle empty array edge case

  // Store the last element
  let lastElement = arr[arr.length - 1];

  // Shift all elements to the right
  for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
  }

  // Place the last element at the first position
  arr[0] = lastElement;

  // Print the shifted array
  console.log(arr.join(" "));
}

// Example input
let arr = [45, 21, 15, 19];
circularShiftRight(arr);


