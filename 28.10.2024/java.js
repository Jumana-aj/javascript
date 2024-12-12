// find the second maximum number of array

let array=[21,32,54,75];
let sortedarr=array.sort((a,b)=>b-a);
console.log(sortedarr[1]);




//Print the different between the maximum and minimum element in a given array. 


let array2=[3,2,5,8,9];
let sortedarray=array2.sort((a,b)=>b-a);
console.log(sortedarray);
let length=sortedarray.length;
let differ=sortedarray[0]-sortedarray[length-1];
console.log(differ);




//Count the number of occurrences of a string s2 in a string s1.
//  For example s1 = "This is a String" s2 = "is", number of occurences is 2.


function countofoccurence(s1,s2){
    let count=0;
    let search=s1.indexOf(s2);

    while(search!==-1){
        count++;
        search= s1.indexOf(s2,search+1);
    }
    return count;
}
let res=countofoccurence("this is an apple","an");
console.log(res);






//exampless

//desending order

let arr=[65,74,85,67];
let check=arr.sort((a,b)=>b-a);
console.log(check[1]);

//assending order

let arra=[55,44,33,22,11];
let che=arra.sort((a,b)=>a-b);
console.log(che[0]);



//difference between max and min


let arrr=[12,3,4,5,77,1];
let sorte=arrr.sort((a,b)=>b-a);
console.log(sorte);
let length1=sorte.length;
let maxandmin=sorte[0]-sorte[length1-1];
console.log(maxandmin);



// occurences



function numberofocc(a1,a2){
    let count=0;
    let searchof=a1.indexOf(a2);


    while(searchof!==-1){
        count++;
        searchof=a1.indexOf(a2,searchof+1);
    }
    return count;
}
let result=numberofocc("my name is jumana and my age is 17","my");
console.log(result);