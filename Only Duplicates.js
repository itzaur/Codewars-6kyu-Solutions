/*
DESCRIPTION:
Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"
*/
function onlyDuplicates(str) {
  const obj = [...str].reduce(
    (acc, el) => ({ ...acc, [el]: (acc[el] || 0) + 1 }),
    {}
  );

  return [...str].reduce((acc, el) => {
    return obj[el] > 1 ? (acc += el) : (acc += '');
  }, '');

  //   return [...str].filter((el) => str.indexOf(el) !== str.lastIndexOf(el))
  //     .join``;
}

console.log(onlyDuplicates('abccdefee')); //'cceee'
console.log(onlyDuplicates('hello')); //'ll'
console.log(onlyDuplicates('colloquial')); //'ollol'
console.log(onlyDuplicates('foundersandcoders')); //'ondersndoders'
