const nonrepeat=(str)=>{
     let result={}; 
     for(let item of str){
        result[item]=(result[item]||0)+1;
     }
     for(let item in result){
        if(result[item]==1){
            return item;
        }  
     }
     
 }
 
console.log(nonrepeat("banbgna"))   
  