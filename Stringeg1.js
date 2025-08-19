const makenewstring=(str)=>
    str.length<3 ? str : str.slice(0,3)+str.slice(-3);

  console.log(makenewstring('abcdefg'));
  console.log(makenewstring('ab'));