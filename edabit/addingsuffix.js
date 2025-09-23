const add_suffix=(suffix)=>{
    return function fa(char){
        return char+suffix
    }
}
add_less = add_suffix("less")
console.log(add_less("fair"))
