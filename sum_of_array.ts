const sumArray = (arr: number[]) => {
  return arr.reduce((num, acc) => num + acc, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));
