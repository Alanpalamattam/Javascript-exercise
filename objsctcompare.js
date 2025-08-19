const obja = { a: 1, b: 2, c: 3 };
const objb = { a: 1, b: 2, c: 3 };
const objc = { a: 1, b: 1, d: 1 };

const equalobj = (a, b) => {
  let aobj = Object.keys(a);
  let bobj = Object.keys(b);

  if (aobj.length !== bobj.length) return false;

  for (let key of aobj) {
    if (a[key] !== b[key]) return false;
  }

  return true;
};

console.log(equalobj(obja, objb)); 
console.log(equalobj(obja, objc));
 