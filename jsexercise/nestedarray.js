const nested=(arr)=>{
    let result=[]
    for(let item of arr){
       if(Array.isArray(item)){
        result=result.concat(nested(item))
       }
       else{
        result.push(item)
       }       
    }
    return result;
} 
console.log(nested([1, [2, [3, 4]], 5])) 
// const nested=(arr)=>
//     arr.flat(Infinity);
// console.log(nested([1, [2, [3, 4]], 5])) 7u7u7523