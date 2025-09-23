 var reduce = function(nums, fn, init) {
    if(nums.length==0){
        return init;
    }
    for(i=0;i<nums.length;i++){
     current=init+nums[i]*nums[i];
     init=current;
    }
    return current;
}