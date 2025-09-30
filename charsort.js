// const charsort=(str)=>
//     str.split('').sort((a,b)=>a>b?1:-1)
// .join('');

// console.log(charsort('hello'));
// console.log(charsort('world'));

// const charsort=(str)=>
//     str.split('').sort((a,b)=>a>b?1:-1)
      
// console.log(charsort('hello')); 
 
// function outer(){
//     return inner;
//     function inner(i){
//         console.log(i)
//     }
// }

const charsort=(str)=>
    str.split('').sort((a,b)=>a>b?1:-1).join('')   

console.log(charsort("hello"))