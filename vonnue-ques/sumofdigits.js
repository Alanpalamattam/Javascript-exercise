const sumofdigits=(num)=>{
    let sum=0;
    while(num>0){
        let digit=num%10;
        num=Math.floor(num/10);
        sum=sum+digit;
    }
    return sum;
}

console.log(sumofdigits(45))
 