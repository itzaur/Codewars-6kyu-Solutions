/*
Description:
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/
function testit(arr) {
  const array = arr
    .sort((a, b) => a - b)
    .filter((el) => el !== Math.max(...arr) && el !== Math.min(...arr));

  return (
    Math.round((array.reduce((acc, el) => acc + el, 0) / array.length) * 100) /
      100 || 0
  );
}

console.log(testit([0])); //0
console.log(testit([1, 2, 3])); //2
console.log(testit([4, 5, 6])); //5
console.log(testit([7, 8, 9])); //8
console.log(testit([1, 2, 3, 4, 5])); //3
console.log(testit([1, 2, 3, 4, 5, 6])); //3.5
console.log(testit([2, 3, 4, 5, 6, 7])); //4.5
console.log(testit([6, 7, 19, 15, 16])); //12.67
console.log(testit([10, 15, 5, 6, 15, 1])); //7
console.log(testit([15, 12, 9, 20, 13, 5, 14])); //12.6
console.log(testit([8, 1, 5, 4, 9, 11, 1, 0])); //4.67
console.log(testit([3, 5, 3, 9, 0, 2, 16, 8, 15])); //6.43
console.log(testit([3, 8, 14, 19, 3, 18, 15, 7, 4, 19])); //11
