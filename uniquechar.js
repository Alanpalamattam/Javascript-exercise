// const unique=(char)=>
//    char.split('')
//     .filter((c,index,arr)=>
//       arr.slice(index+1).indexOf(c)===-1);


const unique=(char)=>
  char.split('')
.filter((c,index,arr)=>
 arr.slice(index+1).indexOf(c)===-1);

console.log(unique("jwol")) 

