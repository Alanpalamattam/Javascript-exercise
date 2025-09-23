var join = function(arr1, arr2) {
    let arr3=[]
    arr3=arr1.concat(arr2)
    console.log(arr3)
    console.log(arr3.map((x,y)=>x[id]==y[id]))
 };  

join(arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
],arr2=[{"id": 3, "x": 5},{"id": 2, "x": 5}])

 