// const getlength=(arr)=>
//     arr.reduce((acc,x)=>acc.concat(Array.isArray(x)?flatten(x):x),[]).length

// console.log(getlength([1, [2, [3, [4, [5, 6]]]]]))
 

// const numstr=(arr)=>
//     arr.filter((x)=>/\d/.test(x))

// console.log(numstr(["1a", "a", "2b", "b"])) 

// const arraycheck=(arr1,arr2)=>
//     arr1.filter((x)=>!arr2.includes(x))

// console.log(arraycheck(["banana", "orange", "apple"], ["orange", "apple"]))
 
const simplepair=(arr,n)=>{
  for(let i=0;i<arr.length;i++){
     for(let j=i+1;j<arr.length;j++){
        if(arr[i]*arr[j]===n){
            return [arr[i],arr[j]]
        }
     }
    }
  return null
}
console.log(simplepair([1, 2, 3], 3))