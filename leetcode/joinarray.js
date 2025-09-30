var join = function(arr1, arr2) {
    let arr3=[]
    let result=[]   
    let seen={} 
    arr3=arr1.concat(arr2)
    for(let item of arr3){
      if(!seen[item.id]){
        seen[item.id]=true;
        result.push(item);  
      }
    }
         console.log(result);

   };
 
join(arr1 = [ 
    {"id": 1, "x": 1},
    {"id": 2, "x": 9},         
],arr2=[{"id": 3, "x": 5},{"id": 2, "x": 5}])
  