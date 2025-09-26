const duplicateremove=(arr)=>{
    let result=[]
    for(let item of arr){
        if(!result.includes(item)){
            result.push(item)
        }
    }
    return result;
}

console.log(duplicateremove([1,21,11,1,5]))