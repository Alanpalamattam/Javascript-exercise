const objtoarr=(obj1,obj2)=>{
   let arr=obj1.concat(obj2)
   let result=[]
   for(let i=0;i<arr.length;i+=2){
       result.push({[arr[i]]:arr[i+1]}) 
   }
   return result;
 }        
  
 console.log(objtoarr(['a',1],['b',2]));         

  