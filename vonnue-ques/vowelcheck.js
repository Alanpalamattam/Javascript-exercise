// const vowelcheck=(str)=>{
//       let code=str.charCodeAt(0)
//       return (code>=65 && code<=90)||(code>=97&&code<=122)
// }
// console.log(vowelcheck('2'))   

const vowelcheck=(str)=>{
    return str.replace(/\d/g,"");
}
console.log(vowelcheck('agc60'))