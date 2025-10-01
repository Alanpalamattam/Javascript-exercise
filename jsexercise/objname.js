const objname=(obj,arrname,arrage)=>{ 
    let result={}

    for(let i=0;i<arrname.length;i++){               
        result[arrname[i]]=arrage[i]
    } 
    return result;      
 }
console.log(objname({name:"alan",age:21},["nikhil","leose","aslam"],[21,22,23]))
