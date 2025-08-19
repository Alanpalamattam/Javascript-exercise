const nonrepeat=(str)=>
    str.split('')
.filter((s,index)=>
    str.indexOf(s)===index && str.lastIndexOf(s)===index);

console.log(nonrepeat('hehlo world')); 
console.log(nonrepeat('javascript')); 
 
 