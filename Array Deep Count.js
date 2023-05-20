/*
Description:

You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
Examples

[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7

The input will always be an array.
*/
function deepCount(arr) {
  return arr.reduce((acc, el) => {
    return acc + (Array.isArray(el) ? deepCount(el) : 0);
  }, arr.length);

  //   let count = 0;

  //   for (let i = 0; i < arr.length; i++) {
  //     if (Array.isArray(arr[i])) {
  //       count += deepCount(arr[i]) + 1;
  //     } else {
  //       count += 1;
  //     }
  //   }

  //   return count;

  //   let length = arr.length;

  //   for (let i = 0; i < arr.length; i++) {
  //     if (Array.isArray(arr[i])) {
  //       length += deepCount(arr[i]);
  //     }
  //   }

  //   return length;
}

console.log(deepCount([1, 2, [3, 4, [5]]])); //7
console.log(deepCount([])); //0
console.log(deepCount([1, 2, 3])); //3
console.log(deepCount(['x', 'y', ['z']])); //4
console.log(deepCount([[[[[[[[[]]]]]]]]])); //8
