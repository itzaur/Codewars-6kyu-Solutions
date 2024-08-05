/*
Description:
In this kata, you will be given a string containing numbers from a to b, one number can be missing from these numbers, then the string will be shuffled, you're expected to return an array of all possible missing numbers.

Examples (input => output)
Here's a string with numbers from 1 - 21, its missing one number and the string is then shuffled, your'e expected to return a list of possible missing numbers.

1, 21, "2198765123416171890101112131415"  => [ 12, 21 ]
You won't be able to tell if its 21 or 12, you must return all possible values in an array.

Another Example
5, 10, "578910" => [ 6 ]
Documentation:
The parameters will be in order two numbers and a string:

start => from
stop => to
string => numbers from start to stop in string form (shuffled), but missing one number
Note:

if there're no missing numbers return an empty list
Too easy ? Try Range of Integers in an Unsorted String
*/
/*
Not easy. Find all possible values of number digits
*/
function findNumber(start, stop, string) {
  const array = Array.from({ length: stop - start + 1 }, (_, i) => start + i);
  let result = array.map((el) => `${el}`.split``).flat().join``;

  function replaceChar(str, char) {
    if (str.includes(char)) {
      str = str.replace(char, '');
    }
    return str;
  }

  for (let i = 0; i < string.length; i++) {
    result = replaceChar(result, string[i]);
  }

  if ([...result].length >= 2) {
    const allPossibleResults = [...result]
      .reduce(
        (acc, el) => {
          return acc.flatMap((item) => {
            return Array.from({ length: item.length + 1 }, (_, i) => [
              ...item.slice(0, i),
              el,
              ...item.slice(i),
            ]);
          });
        },
        [[]]
      )
      .map((el) => +el.join``)
      .filter(
        (el) =>
          el >= start && el <= stop && `${el}`.length === [...result].length
      )
      .sort();

    return [...new Set(allPossibleResults)];
  }

  return result == 0 ? [] : [+result];
  ////////////////////////////////////////////////////////!SECTION
  // const ns = Array.from({ length: b - a + 1 }, (_, i) => a + i);
  // const ds = Array.from(
  //   [].reduce.call(s, (ds, d) => ds.replace(d, ''), ns.join(''))
  // )
  //   .sort()
  //   .join('');

  // return ns.filter((n) => Array.from(`${n}`).sort().join('') === ds);
  ////////////////////////////////////////////////////////!SECTION
  // let array = Array.from({ length: stop - start + 1 }, (_, i) => start + i)
  //   .join``;

  // for (char of string) {
  //   array = array.replace(char, '');
  // }

  // const standard = [...array].sort().join``;

  // const result = [];

  // for (let i = start; i <= stop; i++) {
  //   if ([...('' + i)].sort().join`` === standard) result.push(i);
  // }

  // return result;
}

console.log(findNumber(609, 610, '609')); //[610]
console.log(
  findNumber(
    425,
    485,
    '468427436478447482481453455435448426475471465441437438466479432454452442429459485443469470483449428450430456474480451440477462476473434433464463445460461472458439467444484457431446'
  )
); //[425, 452]
console.log(findNumber(7, 16, '131214115178910')); //[16]
console.log(findNumber(1, 10, '12345678910')); //[]
console.log(findNumber(1, 10, '2345678910')); //[1]
console.log(findNumber(1, 10, '1234678910')); //[5]
console.log(findNumber(1, 10, '123456789')); //[10]
console.log(findNumber(1, 21, '1116122137143151617181920849510')); //[12, 21]
console.log(
  findNumber(
    1,
    250,
    '2491771842155490223116351359624312364528611014378220168235412194624714016711713319814428177371372322483356775157513821213812018915616178169180422057425055702049257200441752021649520319463179155401482271358391661117611818617619918524622611214787196431912247122923132852316022867242822118221107236471216824475181150239121712918214915910923798652331532147215125222170494190146216102161182971832061006216327616919791582131417224013622832171920823414111920188116842613237131811954516213053245241210105361242183110491312860155099247920710123810311423018722589102126931061741129193139134341491423011512712511380881921451541731651085920912215220148'
  )
); //[66]
