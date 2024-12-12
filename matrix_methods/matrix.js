function matrixaddition(array1,array2){
    if(array1.length!==array2.length&&array1[0].length!==array2[0].length){
        return invalid
    }
    let res=[]
    for(let i=0;i<array1.length;i++){
        let row=[];
        for(let j=0;j<array1.length;j++){
           row.push (array1[i][j]+array2[i][j])
        }
        res.push(row)
    }
    return res
}


const array1=[[1,2,3],[4,5,6],[7,8,9]];
const array2=[[9,8,7],[6,5,4],[3,2,1]];
let resu=matrixaddition(array1,array2);
console.log(resu)