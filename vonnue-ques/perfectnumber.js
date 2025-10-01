const perfectnumber=(num)=>{
     let sum=0;
    for(let i=1;i<=num/2;i++){
        if(num%i==0){
             sum=sum+i;
        }
    }
   return sum===num
}
      
console.log(perfectnumber(28))

