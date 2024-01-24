/*
DESCRIPTION:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/
function solution(string) {
  return [...string].reduce((acc, el, i) => {
    if (string[i] === el.toUpperCase()) acc += ' ';
    return (acc += el);
  }, '');

  //   const result = [];

  //   for (let i = 0; i < string.length; i++) {
  //     const el = string[i];

  //     if (el === el.toLowerCase()) {
  //       result.push(el);
  //     } else {
  //       result.push(' ');
  //       result.push(el);
  //     }
  //   }

  //   return result.join``;

  //   return string.replace(/[A-Z]/g, (el) => ` ${el}`);

  //   return string.replace(/([A-Z])/g, ' $1');
}

console.log(solution('')); //""
console.log(solution('camelCasing')); //"camel Casing"
console.log(solution('camelCasingTest')); //"camel Casing Test"
