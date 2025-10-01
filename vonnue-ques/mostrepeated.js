const mostrepeat=(arr)=>{
    let count={}
    let max=0
    let maxvalue=null; 
    for(let item of arr){
    count[item]=(count[item]||0)+1;
    if(count[item]>max){
        max=count[item];
        maxvalue=item;
    }        
}
    return maxvalue
 }
 
 console.log(mostrepeat([3,2,3,4,2,2,5]))