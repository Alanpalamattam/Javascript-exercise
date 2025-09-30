const findnumberofevennumbers=(numarr)=>
    numarr.filter(num=>num%2===0).length;

const createarrayofnumbers=(num)=>{
    const newarray=[]
    for(let i=1;i<=num;i++){
        newarray.push(i);
     }
    return newarray;
     
}
  
console.log(findnumberofevennumbers(createarrayofnumbers(10)));  

  