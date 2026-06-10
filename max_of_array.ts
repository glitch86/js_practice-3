const findMax = (arr: number[]) => {
  return arr.reduce((num, acc) => (num > acc ? (acc = num) : acc), 0);
};

console.log(findMax([3, 1, 7, 2, 9]));
