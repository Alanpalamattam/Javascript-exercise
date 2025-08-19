const formatdate=(date=new Date())=>{
    const day=date.getDate();
    const month=date.getMonth()+1; // Months are zero-based in JavaScript
    const year=date.getFullYear();
    return `${day}/${month}/${year}`;
}

console.log(formatdate())
