const getfileextension=(filename)=>{
    return filename.slice(filename.lastIndexOf('.'));
}

let str1=getfileextension('index.html');
let str2=getfileextension('script.js');
console.log(str1);