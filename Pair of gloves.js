/*
Description:
Pair of gloves

Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.
Examples:

input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/
function numberOfPairs(gloves) {
  return Object.values(
    gloves.reduce((acc, el) => {
      return { ...acc, [el]: (acc[el] || 0) + 1 };
    }, {})
  )
    .map((el) => Math.trunc(el / 2))
    .map((el) => (el > 1 ? Array(el).fill(el) : el))
    .flat()
    .filter((el) => el > 0).length;

  //   const arr = gloves.sort();
  //   let pairs = 0;

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === arr[i + 1]) {
  //       i++;
  //       pairs++;
  //     }
  //   }

  //   return pairs;

  //   return Object.values(
  //     gloves.reduce((acc, el) => {
  //       return { ...acc, [el]: (acc[el] || 0) + 1 };
  //     }, {})
  //   ).reduce((acc, el) => acc + parseInt(el / 2), 0);
}

console.log(numberOfPairs(['red', 'red', 'red', 'red'])); //2
console.log(numberOfPairs(['red', 'red', 'red', 'red', 'red'])); //2
console.log(numberOfPairs(['red', 'red'])); //1
console.log(numberOfPairs(['red', 'green', 'blue'])); //0
console.log(
  numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black'])
); //3
