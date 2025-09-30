// const occurence=(str)=>{
//     let result={}
//     for(let item of str){
//         result[item]=(result[item]||0)+1;
//     }
//     return result
// }

// console.log(occurence("banana"))

const occurence=(str)=>{
    let result={}
    for(let item of str){
        result[item]=(result[item]||0)+1;
    }
    return result;
}

console.log(occurence("banana"))