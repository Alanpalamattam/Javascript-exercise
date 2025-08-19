 
const vowelcount=(str,letters=['a','e','i','o','u'])=>
  str.split('').
  filter(s=>letters.includes(s)).length

console.log(vowelcount("helloworld"))
 