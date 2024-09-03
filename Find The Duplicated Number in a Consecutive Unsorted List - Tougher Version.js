/*
Description:
Spin-off of this kata, here you will have to figure out an efficient strategy to solve the problem of finding the sole duplicate number among an unsorted array/list of numbers starting from 1 up to n.

Hints: a solution in linear time can be found; using the most intuitive ones to search for duplicates that can run in O(n²) time won't work.
*/
function findDup(array) {
  return (
    array.reduce((acc, el) => acc + el) -
    (Math.max(...array) * (Math.max(...array) + 1)) / 2
  );
  //////////////////////////////!SECTION
  //   return array.reduce((acc, val, idx) => acc ^ val ^ idx, 0);
  //////////////////////////////!SECTION
  //   const set = new Set();

  //   for (num of array) {
  //     if (set.has(num)) return num;
  //     set.add(num);
  //   }
  //////////////////////////////!SECTION
  //   return (
  //     array.reduce((a, b) => a + b, 0) - ((array.length - 1) * array.length) / 2
  //   );
  //////////////////////////////!SECTION
  //   return array.reduce((acc, el, i) => acc + el - i, 0);
  //////////////////////////////!SECTION
  //   return array.sort().find((el, i) => el === array[i + 1]);
}

console.log(findDup([1, 2, 3, 1])); //1
console.log(findDup([5, 4, 3, 2, 1, 1])); //1
console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6])); //5
console.log(findDup([8, 2, 6, 3, 7, 2, 5, 1, 4])); //2
console.log(findDup([1, 1])); //1
