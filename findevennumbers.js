const findnumberofevennumbers=(numarr)=>
    numarr.filter(num=>num%2===0).length;

console.log(findnumberofevennumbers([1,2,3,4,5,6,7,8,9,10]));
console.log(findnumberofevennumbers([11,13,15,17,19]));