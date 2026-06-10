type NestedArray = (number | number[])[];
// const flattenArray = (arr: NestedArray) => {
//   return arr.flat();
// };

const flattenArray = (arr: NestedArray) => {
  const result: number[] = [];
  arr.map((value) =>
    Array.isArray(value) ? result.push(...value) : result.push(value),
  );
  return result;
};
console.log(flattenArray([1, [2, 3], [4, 5]]));
