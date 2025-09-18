// const reverse=(str1)=>str1.split('').reverse().join("")  

  
// console.log(reverse("hello"))
//  const vowelcount=(stringg)=>{
//     stringg=stringg.split('')
//    const vowels=['a','e','i','o','u']
//    let count=stringg.filter((x)=>!vowels.includes(x)).length
//    return count
//  }
// console.log(vowelcount("hello"))

// const factorial=(numm)=>{
//     if(numm==1||numm==0){
//         return 1;
//     }
//     return numm*factorial(numm-1)
// }
// console.log(factorial(5))

// const maxnum=(num)=>num.reduce((acc,n)=>acc>n?acc:n)

// console.log(maxnum([2, 8, 5, 1, 9]));
//  const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

//  const count=(fruits)=>fruits.reduce((acc,a)=>{acc[a]=(acc[a]||0)+1; return acc;},{})

//  console.log(count(fruits)) 

// const prime=(n)=>{
//     for(let i=2;i<=n/2;i++){
//        if(n%i==0){return false;}
//     }
//     return true;
// }
// console.log(prime(13))

// const arrcomb=(arr)=>{
//     arr=arr.reduce((acc,a)=>acc.concat(a),[])
//     return arr       
// }
// console.log(arrcomb([1, [2, [3, 4]], 5]))

// const nonrepeating=(strr)=>{
//  strr=strr.split('')
//    .filter((x)=>strr.indexOf(x)==strr.lastIndexOf(x))
//   return strr[0]
// }
// console.log(nonrepeating("aabbcde"))
//   const people=(people1)=>{
//     let result=people1.sort((a,b)=>a.age-b.age)
//      return result
//    } 

// console.log(people([
//   { name: "John", age: 25 },
//   { name: "Jane", age: 22 },
//   { name: "Bob", age: 30 }
// ]))
 
// const firstcap=(cap)=>cap.split(" ").map(x=>x[0].toUpperCase()+x.slice(1)).join(" ");

// console.log(firstcap("i love javascript"))  


// let updated=(people)=>people.map(person=>
//     person.name==="Jane"?{...person,age:53}:person
// );
// console.log(updated([
//    { name: "John", age: 25 },
//    { name: "Jane", age: 22 },
//    { name: "Bob", age: 30 }
//   ])); 
           
// const charcount=(char)=>
//     char.split('').reduce((acc,a)=>{acc[a]=(acc[a]||0)+1;return acc;},{});

// console.log(charcount("abcda"))

// const maxsum=(input)=>{
//     let maxnum=input[0];
//     let currentmax=input[0];

//     for(let i=1;i<input.length-1;i++){
//         currentmax=Math.max(input[i],currentmax+input[i]);
//          maxnum=Math.max(maxnum,currentmax)
//     }
//     return maxnum;
// }
       

// console.log(maxsum([-2,1,-3,4,-1,2,1,-5,4])) 
              
const equalcontent=(equal)=>
    equal.reduce((acc,a)=>[acc.filter(x=>x.includes(a))],[])
console.log(equalcontent(["eat","tea","tan","ate","nat","bat"])) 