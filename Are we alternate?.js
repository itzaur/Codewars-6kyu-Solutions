/*
DESCRIPTION:
Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true
Arguments consist of only lowercase letters.
*/
function isAlt(word) {
  const result = [...word].map((el) => word.indexOf(el.match(/[aeiou]/)));
  const evenArr = [];
  const oddArr = [];

  for (let i = 0; i < result.length; i++) {
    if (i % 2 === 0) evenArr.push(result[i]);
    else oddArr.push(result[i]);
  }

  return (
    (oddArr.every((el) => el === -1) && evenArr.every((el) => el !== -1)) ||
    (oddArr.every((el) => el !== -1) && evenArr.every((el) => el === -1))
  );

  //   return !/[aeiou]{2}|[^aeiou]{2}/.test(word);

  //   return !(word.match(/[aeiou]{2,}/g) || word.match(/[^aeiou]{2,}/g));

  //   return [...word]
  //     .map((el) => ('aeiou'.includes(el) ? 0 : 1))
  //     .every((_, i, arr) => arr[i] !== arr[i + 1]);
}

console.log(isAlt('amazon')); //true
console.log(isAlt('apple')); //false
console.log(isAlt('banana')); //true
console.log(isAlt('cjibg')); //false
console.log(isAlt('ihaga')); //true
console.log(isAlt('iifeb')); //false
console.log(isAlt('ebaii')); //false
