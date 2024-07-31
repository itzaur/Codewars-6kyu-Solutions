/*
Description:
Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.

Note: This includes any characters

Examples
'abbbbc'  => 'abc'    #  answer: 3
'abbcca'  => 'abca'   #  answer: 2
'ab cca'  => 'ab ca'  #  answer: 1
*/
function countRepeats(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1]) {
      result += str[i];
    }
  }

  return str.length - result.length;
  //////////////////////////////!SECTION
  //   return s.length - s.replace(/(.)\1+/g, '$1').length;
  //////////////////////////////!SECTION
  //   let count = 0,
  //     last;

  //   for (let char of str) {
  //     char === last ? count++ : (last = char);
  //   }

  //   return count;
  //////////////////////////////!SECTION
  //   return [...str].reduce((acc, el, i) => {
  //     return el === str[i - 1] ? (acc += 1) : acc;
  //   }, 0);
}

console.log(countRepeats('AABCCD')); //2
console.log(countRepeats('AABCCDA')); //2
console.log(countRepeats('AaBBCCC')); //3
