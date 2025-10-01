const remain=(num1,num2)=>{
    x=Math.floor(num1/num2)
    let remainder=num1-(num2*x)
    return remainder
  }

 console.log(remain(7,4))     