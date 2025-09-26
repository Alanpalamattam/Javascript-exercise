const decimaltobinary=(num)=>{
    let result="";
    while(num>0){ 
     result=num%2+result;
     num=Math.floor(num/2);
    }
    return result;
}
console.log(decimaltobinary(8))