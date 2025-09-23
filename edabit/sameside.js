// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// // 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]

const countBoomerangs=(arr)=>{
    let count = 0;
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i + 2] && arr[i] !== arr[i + 1]) {
      count++;
    }
  }
  return count;
}
          
 console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]))