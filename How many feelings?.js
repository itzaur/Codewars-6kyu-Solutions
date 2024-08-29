/*
Description:
You have two arguments: string - a string of random letters(only lowercase) and array - an array of strings(feelings). Your task is to return how many specific feelings are in the array.

For example:

string -> 'yliausoenvjw'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '3 feelings.' // 'awe', 'joy', 'love'


string -> 'griefgriefgrief'
array -> ['anger', 'awe', 'joy', 'love', 'grief']
output -> '1 feeling.' // 'grief'


string -> 'abcdkasdfvkadf'
array -> ['desire', 'joy', 'shame', 'longing', 'fear']
output -> '0 feelings.'
If the feeling can be formed once - plus one to the answer.

If the feeling can be formed several times from different letters - plus one to the answer.

Eeach letter in string participates in the formation of all feelings. 'angerw' -> 2 feelings: 'anger' and 'awe'.
*/
function countFeelings(string, array) {
  const result = array
    .map((el) => el.split``.every((el) => string.includes(el)))
    .filter((el) => el == 1).length;

  return `${result} feeling` + (result !== 1 ? 's.' : '.');
  //////////////////////////////////////////!SECTION
  //   const result = array
  //     .map((el) =>
  //       el.split``.reduce((acc, el) => {
  //         return acc && string.includes(el);
  //       }, true)
  //     )
  //     .filter((el) => el).length;

  //   return `${result} feeling${result !== 1 ? 's' : ''}.`;
}

console.log(
  countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief'])
); //'3 feelings.'
console.log(countFeelings('angerw', ['anger', 'awe', 'joy', 'love', 'grief'])); //'2 feelings.'
console.log(
  countFeelings('griefgriefgrief', ['anger', 'awe', 'joy', 'love', 'grief'])
); //'1 feeling.'
console.log(
  countFeelings('abcdkasdfvkadf', ['desire', 'joy', 'shame', 'longing', 'fear'])
); //'0 feelings.'
