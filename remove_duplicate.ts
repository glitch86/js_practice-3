const removeDuplicate = (arr: number[]) => {
  return arr.filter((num, index) => arr.indexOf(num) === index);
};

console.log(removeDuplicate([1, 2, 2, 3, 3, 4] ));
