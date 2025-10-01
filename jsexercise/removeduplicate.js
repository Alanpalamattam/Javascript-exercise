const duplicate=(arr)=>{
    let result=[];
    for(let item of arr){
        if(!result.includes(item)){
            result.push(item)
        }
    }
    return result;
}
  
console.log(duplicate([1, 2, 2, 3, 4, 4]))    