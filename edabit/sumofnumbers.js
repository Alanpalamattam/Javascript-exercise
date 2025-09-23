const sumofnum=(num)=>{
    const summ1=Array.from(String(num),Number)
    const summ=summ1.reduce((acc,x)=>acc+Number(x),0)
    console.log("object",summ)
    return (summ%2==0?"Evenish":"Oddish")
}

console.log(sumofnum(44))
 