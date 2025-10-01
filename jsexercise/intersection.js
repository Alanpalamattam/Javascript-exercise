const intersection=(arr1,arr2)=>{
    let result=[]
    for(let item of arr1){
        if(arr2.includes(item)){
            result.push(item)
        }
    }
    return result;
}

console.log(intersection([1, 2, 3], [2, 3, 4]))  
