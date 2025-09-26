function nonrepeating(char){
let non=char.split('')
non.map((m,index)=>{
    m[index]+=1;
    console.log(m[index])
}
)
} 
nonrepeating("hello") 
 