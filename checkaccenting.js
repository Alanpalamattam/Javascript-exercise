// const checkasenting=(arr)=>{
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i+1]<arr[i]) return false;
//     }
//     return true;
// }

// console.log(checkasenting([1,2,3,4,5]));


const checkascenting=(arr)=>{

   
    for(let i=0;i<arr.length;i++){
         arr[i]===arr.sort((x,y)=>x-y)[i]
    }
    }
    
console.log(checkascenting([12,10,5,15,2]))
  