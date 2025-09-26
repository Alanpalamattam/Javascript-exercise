const palindrome=(str)=>{
    let result=""
  for(let item of str){
    result=item+result
  }
  return result===str
}

console.log(palindrome("malayalam"))