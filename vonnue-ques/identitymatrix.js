const identity=(arr)=>{
     let isidentity=true;
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]!=0 && i!=j || arr[i][j]!=1 && i==j){
                isidentity=false;
            }
        }
    }
    return isidentity
}
 
console.log(identity([[1, 0, 0],
  [0, 1, 0],
  [0, 0, 0]]))
    