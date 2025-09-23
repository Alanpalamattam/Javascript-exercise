// const lessthan = (str, char) =>
//   str.split('').filter(s=>s==char).length

// console.log(lessthan("hello", "l"));

const icharcount=(str,char)=>
    str.split('').filter(s=>s===char).length
console.log(icharcount("hello", "l"));