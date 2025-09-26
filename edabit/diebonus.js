// const possibleBonus=(a,b)=>{
//     const res=Number(b)-Number(a)
//      if(res<=6&&res>0){
//         return true;
//     }
//     else{
//         return false
//     }
// }
// console.log(possibleBonus(3,7))

// const shiftToRight=(a,b)=>{
//  return floor(a/(2**b))
// }
// function perimeter(l, num){
// 	return (l=="s"?4*num:6.28*num)
// }
// function num_of_digits(num) {
// 	return `${num}`.match(/\d/g).length;
// }
// console.log(num_of_digits(1305981031))

// const addname=(obj,name,age)=>{
//    return {...obj,[name]:age}
// }

// console.log(addname({ piano: 500, stereo: 300 }, "Caligula", 440))

// const compact=(arr)=>{
//     const falsey=[false,null,0,"",undefined,"Nan"]
//     let res=[]
//     for(let i=0;i<arr.length;i++){
//         if(!falsey.includes(arr[i])){
//             res.push(arr[i])
//         }
//     }
//     return res;
// }

// console.log(compact([0, 1,false, 2,"",null,3]))
// function makePlusFunction(baseNum) {
// 	return function f(n){
//         return n+baseNum
//     }
// }

// const plusFive = makePlusFunction(5)
// console.log(plusFive(2))

// const add=(n)=>{
//    return function add(y){
//           return n+y;
//     } 
// }

// const toArray=(arr)=>{
//     return Object.keys(arr).map(x=>[x,arr[x]]);
//    }  

// const toobj=(arr)=>{
//     return arr.map(x=>{x,arr[x]})
// DFDFS}

const toArray =(arr)=> {
  return Object.keys(arr).map(x =>[x, arr[x]]);
};
console.log(toArray({ a: 1,b: 2 }));
