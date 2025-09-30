const frequency=(arr)=>{
    let result={}
    for(let item of arr){
       result[item]=(result[item]||0)+1;
    }
    return result;
}

console.log(frequency([1,1, 2, 2, 3, 3, 3]))