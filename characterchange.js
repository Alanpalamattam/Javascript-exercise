// const strchange=(str)=>
//   str
//   .split('')
//   .map(char=>String.fromCharCode(char.charCodeAt(0)+1))
//   .join('');
// console.log(strchange('abcs'));  

const strchange=(str)=>{
 let occurences={}
for(let char of str){
  occurences[char]=(occurences[char]||0)+1;
}
return occurences;
}
console.log(strchange('abacs')); 
