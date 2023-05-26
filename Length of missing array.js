/*
Description:

You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3


If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/
function getLengthOfMissingArray(arrayOfArrays) {
  if (
    arrayOfArrays === null ||
    arrayOfArrays.includes(null) ||
    arrayOfArrays.filter((el) => el.length === 0).length
  )
    return 0;

  return arrayOfArrays.length
    ? +arrayOfArrays
        .map((arr) => arr.length)
        .sort((a, b) => a - b)
        .map((_, i, arr) => (arr[i + 1] - arr[i] !== 1 ? arr[i] + 1 : 0))
        .sort((a, b) => a - b)
        .slice(-2, -1)
    : 0;
}

console.log(
  getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
); //3
console.log(
  getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])
); //2
console.log(getLengthOfMissingArray([[null], [null, null, null]])); //2
console.log(
  getLengthOfMissingArray([
    ['a', 'a', 'a'],
    ['a', 'a'],
    ['a', 'a', 'a', 'a'],
    ['a'],
    ['a', 'a', 'a', 'a', 'a', 'a'],
  ])
); //5
console.log(getLengthOfMissingArray([])); //0
