const transpose=(arr)=>{
    let result=[];
    for(let i=0;i<arr.length;i++){
        result[i]=[]
        for(let j=0;j<arr[i].length;j++){
            result[i][j]=arr[j][i]
        }
    }
    return result;
}  
console.log(transpose([[1, 0, 4],
  [0, 1, 0],
  [6, 0, 0]]))