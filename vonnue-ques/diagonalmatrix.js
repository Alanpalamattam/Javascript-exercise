const diagonalmatrix=(arr)=>{
    let isdiagonal=true;
     for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(arr[i][j]!=0 && i!=j){
             isdiagonal=false;
            }
        }
 }
 return isdiagonal;
}
console.log(diagonalmatrix([
  [8, 0, 0],
  [0, 0, 0]
]))    

  