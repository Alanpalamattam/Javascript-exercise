const charsort=(str)=>
    str.split('').sort((a,b)=>a>b?1:-1)
.join('');

console.log(charsort('hello'));
console.log(charsort('world'));