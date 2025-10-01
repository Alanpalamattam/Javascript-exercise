// const rotatearr=(arr,num)=>{
//     let result=[...arr];
//     let len=arr.length;
//     for(let i=0;i<num;i++){
//         let temp=[...result]
//          for(let j=0;j<len;j++){
//             let z=(j+1)%len;
//             result[z]=temp[j]
//          }
//     } 
//     return result;

const { forwardRef } = require("react");
 
// }
const rotatearr=(arr,num)=>{
    let len=arr.length;
    return arr.slice(-num).concat(arr.slice(0,len-num))
}    
  
console.log(rotatearr([1, 2, 3, 4, 5],2)) 
  