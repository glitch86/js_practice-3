const chunkenArray = (arr: number[], size: number) => {
  const result: number[][] = [];
  let index = 0;
  while (index < arr.length) {
    result.push(arr.slice(index, (index += size)));
  }
  index += size;
  return result;
};

console.log(chunkenArray([1, 2, 3, 4, 5], 2));
