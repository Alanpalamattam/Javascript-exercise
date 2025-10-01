const maxarr=(arr)=>{
    let max=arr[0]
     for(let item of arr){
       if(item>max){
         max=item
       }
     }
     return max;
 }

 console.log(maxarr([1,23,5,4]));  