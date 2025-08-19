const strchange=(str)=>
  str
  .split('')
  .map(char=>String.fromCharCode(char.charCodeAt(0)+1))
  .join('');

console.log(strchange('abcs'));  