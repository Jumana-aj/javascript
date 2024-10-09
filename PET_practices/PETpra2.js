function findNegativeNumbers(arr) {
    for (i = 0; i < arr.length; i++) {

        if (arr[i] < 0) {
            return arr[i];
        }
        else{
            return null;
        }
    }

}
let res = findNegativeNumbers([1, 2, 3]);
console.log(res);




function countvowels(str){
    for (i=0;i<countvowels.length;i++){
        if(str[i]=="a"||str[i]=="e"){
            count++;
            return str[i];

        }
        else{
            console.log("no")
        }
    }
}
countvowels("a","i","o");
