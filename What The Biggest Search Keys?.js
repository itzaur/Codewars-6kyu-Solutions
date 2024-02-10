/*
DESCRIPTION:
You're a programmer in a SEO company. The SEO specialist of your company gets the list of all project keywords everyday, then he looks for the longest keys to analyze them.

You will get the list with keywords and must write a simple function that returns the biggest search keywords and sorts them in lexicographical order.

For instance you might get:

'key1', 'key2', 'key3', 'key n', 'bigkey2', 'bigkey1'
And your function should return:

"'bigkey1', 'bigkey2'"
*/
function theBiggestSearchKeys(...keys) {
  const length = keys.reduce((acc, el) => {
    return { ...acc, [el]: el.length };
  }, {});
  const result = Object.entries(length).sort((a, b) => b[1] - a[1]);
  const maxNumber = Math.max(...result.map((el) => el[1]));

  return (
    result
      .filter((el) => el[1] == maxNumber)
      .map((el) => el[0])
      .sort()
      .map((el) => `'${el}'`).join`, ` || "''"
  );
}

console.log(theBiggestSearchKeys('key1', 'key22', 'key333')); //"'key333'"
console.log(theBiggestSearchKeys('coding', 'sorting', 'tryruby')); //"'sorting', 'tryruby'"
console.log(
  theBiggestSearchKeys(
    'small keyword',
    'how to coding?',
    'very nice kata',
    'a lot of keys',
    'I like Ruby!!!'
  )
); //"'I like Ruby!!!', 'how to coding?', 'very nice kata'"
console.log(theBiggestSearchKeys('pippi')); //"'pippi'"
console.log(theBiggestSearchKeys()); //"''"
