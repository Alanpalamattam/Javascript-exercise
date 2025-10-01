const mex=(arr)=>{
    let mex=0;
    for(let item of arr){
        if(arr.includes(mex)){
            mex=mex+1;
        }   
        else{
            return mex;
        }
    }
}

console.log(mex([1,0,2,4]))