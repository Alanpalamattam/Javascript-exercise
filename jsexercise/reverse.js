// function reverse(text){
//     let text1=text.split('')
//     let reversed=""
//     for(let i=text1.length-1;i>=0;i--){
//       reversed+=text1[i];
//     } 
//   return reversed    
// }  
  
const reverse=(str)=>{
  let resul=""
  for(let i=str.length-1;i>=0;i--){
     resul+=str[i]
  }
  return resul;
}
 console.log(reverse("hello"))