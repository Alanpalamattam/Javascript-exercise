const maxvalue=(obj)=>{
    let value=Object.values(obj)[0];
    let keyy=""
    console.log(value)        
    for(let key in obj){
        if(obj[key]>value){
            value=obj[key];
            keyy=key
        }
     }   
     return keyy
}
 
console.log(maxvalue({a:10, b:20, c:15})) 