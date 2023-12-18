/*
DESCRIPTION:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/
function solution(str) {
  const result = [];
  const chars = 2;

  for (let i = 0; i < str.length; i += chars) {
    result.push(str.slice(i, i + chars));
  }

  return result.map((el) => (el.length < chars ? `${el}_` : el));

  //   return (str + '_').match(/.{2}/g) || [];

  //   return (str + '_').match(/../g) || [];

  //   return (str + '_').match(/\w\w/g) || [];
}

console.log(solution('abcdef')); //['ab', 'cd', 'ef']
console.log(solution('abcdefg')); //['ab', 'cd', 'ef', 'g_']
console.log(solution('')); //[]
