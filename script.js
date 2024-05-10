function findEvenIndex(arr) {
  for (let index=0;index<arr.length;index++) {
    let leftSum = arr.slice(0, index).reduce((acc, curr) => acc + curr, 0);
    let rightSum = arr.slice(index + 1).reduce((acc, curr) => acc + curr, 0);
    if (leftSum === rightSum) {
      return index;
    }
  }
  return -1;
}
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));


