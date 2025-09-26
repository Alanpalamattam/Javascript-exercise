const lcmofnum=(num1,num2)=>{
let max=Math.max(num1,num2);
while(true){
  if(max%num1===0 && max%num2===0){
     return max;
  }   
  max++;
}
}

console.log(lcmofnum(10,4))
