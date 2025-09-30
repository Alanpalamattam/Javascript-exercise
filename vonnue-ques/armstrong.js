const armstrong=(num)=>{
 let sum=0
 let temp=num;
 let length=num.toString().length;
 while(num>0){
    digit=num%10;
    sum=sum+Math.pow(digit,length);
    num=Math.floor(num/10);
 }
return sum==temp;
}
 console.log(armstrong(151))