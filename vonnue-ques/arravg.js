const arravg=(arr)=>{
    let sum=0
    for(let item of arr){
        sum=sum+item
    }
    return sum/arr.length
}
 console.log(arravg([1,2,,3,4,5]))