/*
DESCRIPTION:
Format any integer provided into a string with "," (commas) in the correct places.

Example:

For n = 100000 the function should return '100,000';
For n = 5678545 the function should return '5,678,545';
for n = -420902 the function should return '-420,902'.
*/
const numberFormat = function (number) {
  const string = (number + '').split``.reverse``;

  for (let i = 3; i < string.length; i += 4) {
    string.splice(i, 0, ',');
  }

  return string.reverse``.join``.replace('-,', '-');
  //////////////////////////!SECTION
  //   return number.toLocaleString();
  //////////////////////////!SECTION
  //   return String(number).replace(/\B(?=(\d{3})+\b)/g, `,`);
};

console.log(numberFormat(100000)); //'100,000'
console.log(numberFormat(5678545)); //'5,678,545'
console.log(numberFormat(-420902)); //'-420,902'
console.log(numberFormat(-12904)); //'-12,904'
