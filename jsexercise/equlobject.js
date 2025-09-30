const equalcheck=(obj1,obj2)=>{
    let keys1=Object.keys(obj1);
    let key2=Object.keys(obj2);
    console.log(keys1) 
    for(let key of keys1){ 
        if(!key2.includes(key)||obj1[key]!=obj2[key]){
            return false;
        }
    } 
    console.log(keys1);
    return true;
}

console.log(equalcheck({a:1,b:2,c:4,d:2}, {a:1,b:2,c:4,d:2}))