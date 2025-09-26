// const elementfind=(arr,value)=>{
//     return (arr.find((x)=>x==value)?"Boom":"frr")
// }

const elementfind=(arr,value)=>{
 for(let x in arr){
    if(x==value){
        return "Boom"
    }
 }
  return "looop"
}
console.log(elementfind([1, 2, 3, 4, 5, 6, 7],5))
