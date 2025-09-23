const reduntant=(str)=>{
       
    return function f(){
        return str;
    }
}

const f1=reduntant("apple")                        