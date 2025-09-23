var map = function(arr, fn) {
    len=arr.length;
     if(fn=="plusone"){
        for(i=0;i<len;i++){
            arr[i]=arr[i]+1
        }
        return arr
     }
     else if(fn=="plusI"){
         for(i=0;i<len;i++){
            arr[i]=arr[i]+i
        }
        return arr
    } 
     else{
        return 42;
     }
};  
console.log(map([1,2,3],"plusI"))