const concatarr=(...args)=>{
    return( args.reduce((acc,x)=>acc.concat(x)))
}
 
console.log(concatarr([1, 2, 3], [4, 5], [6, 7]))