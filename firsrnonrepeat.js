// const nonrepeat=(str)=>
//     str.split('')
// .filter((s,index)=>
//     str.indexOf(s)===index && str.lastIndexOf(s)===index);

  
 
const nonrepeat=(str)=>{
    let res=str.split('')
  .filter((s,index)=>
str.indexOf(s)===index&&str.lastIndexOf(s)===index)

  return res[0]
}
 console.log(nonrepeat('hehlo world')); 