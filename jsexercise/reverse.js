function reverse(text){
    let text1=text.split('')
    let reversed=""
    for(let i=text1.length-1;i>=0;i--){
      reversed+=text1[i];
    }  
  return reversed  
}
console.log(reverse("hello")) 