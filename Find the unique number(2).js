/*
DESCRIPTION:
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique
*/
function findUniq(arr) {
  const occurrences = arr.reduce(
    (acc, el) => ({ ...acc, [el]: (acc[el] || 0) + 1 }),
    {}
  );

  return +Object.entries(occurrences).filter(([_, value]) => value === 1)[0][0];
  ////////////////////////!SECTION
  //   return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
  ////////////////////////!SECTION
  //   arr = arr.sort();
  //   return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0];
}

console.log(findUniq([1, 0, 0])); //1
console.log(findUniq([0, 1, 0])); //1
console.log(findUniq([0, 0, 1])); //1
console.log(findUniq([1, 1, 1, 2, 1, 1])); //2
console.log(findUniq([1, 1, 2, 1, 1])); //2
console.log(findUniq([3, 10, 3, 3, 3])); //10
