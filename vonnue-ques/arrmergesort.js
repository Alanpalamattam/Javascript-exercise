const arrmerge=(arr1,arr2)=>{
    let result=arr1.concat(arr2);
    let temp=""
    for(let i=0;i<result.length;i++){
        for(let j=i+1;j<result.length-1;j++){
            if(result[j]<result[i]){
                temp=result[j]
                result[j]=result[i]
                result[i]=temp;
            }
        }   
    }
    return result;       
} 

console.log(arrmerge([1,5,7],[2,0,7]))      