const fractionlower=(num1,num2)=>{
 let min=Math.min(num1,num2);
 let gcd=1
 for(let i=1;i<min;i++){
    if(num1%i===0 && num2%i===0){
         gcd=i
    }
 }
 let a=num1/gcd;
 let b=num2/gcd;
 return [a , b];
}
console.log(fractionlower(10,6))