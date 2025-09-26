const nthprime=(num)=>{
    let result=[] 
    for(let i=2;i<num;i++){
        let isprime=true;
        for(j=2;j<i;j++){
            if(i%j==0){
                isprime=false;
            }
        }
        if(isprime){
              result.push(i)  
        }  
    } 
    return result;
}
console.log(nthprime(10))