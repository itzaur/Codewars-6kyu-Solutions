/*
Description:
Let us take a string composed of decimal digits: "10111213". We want to code this string as a string of 0 and 1 and after that be able to decode it.

To code we decompose the given string in its decimal digits (in the above example: 1 0 1 1 1 2 1 3) and we will code each digit.

Coding process to code a number n expressed in base 10:
For each digit d of n

a) Let k be the number of bits of d

b) Write k-1 times the digit 0 followed by the digit 1

c) Write digit d as a binary string, with the rightmost bit being the least significant

d) Concat the result of b) and c) to get the coding of d

At last concatenate all the results got for the digits of n.

An example
So we code 0 as 10, 1 as 11, 2 as 0110, 3 as 0111 ... etc...

With the given process, the initial string "10111213" becomes: "11101111110110110111" resulting of concatenation of 11 10 11 11 11 0110 11 0111.

Task:
Given strng a string of digits representing a decimal number the function code(strng) should return the coding of strng as explained above.

Given a string strng resulting from the previous coding, decode it to get the corresponding decimal string.

Examples:
code("77338855") --> "001111001111011101110001100000011000001101001101"
code("77338")  --> "0011110011110111011100011000"
code("0011121314") --> "1010111111011011011111001100"

decode("001111001111011101110001100000011000001101001101") -> "77338855"
decode("0011110011110111011100011000") -> "77338"
decode("1010111111011011011111001100") -> "0011121314"
Notes
SHELL: The only tested function is decode.
Please could you ask before translating.
*/
function code(string) {
  const array = [...string].map((el) => Number(el).toString(2));

  return array.map((el) => '0'.repeat(el.length - 1) + '1' + el).join``;
}

function decode(str) {
  const array = [...Array(10).keys()].map((el) => code(String(el)));

  let result = '';

  while (str.length !== 0) {
    for (let i = 0; i < array.length; i++) {
      if (str.startsWith(array[i])) {
        result += i;
        str = str.slice(array[i].length);
        break;
      }
    }
  }

  return result;
}
//////////////////////////////////////////////////////!SECTION
// const ENC = [
//   '10',
//   '11',
//   '0110',
//   '0111',
//   '001100',
//   '001101',
//   '001110',
//   '001111',
//   '00011000',
//   '00011001',
// ];

// function code(strng) {
//   return [...strng].map((c) => ENC[c]).join('');
// }

// function decode(str) {
//   let pattern = new RegExp(ENC.join('|'), 'g');
//   return str.replace(pattern, (m) => ENC.indexOf(m));
// }

console.log(code('62')); //"0011100110"
console.log(code('55337700')); //"001101001101011101110011110011111010"
console.log(code, '1119441933000055'); //"1111110001100100110000110011000110010111011110101010001101001101"
console.log(code('69')); //"00111000011001"
console.log(code('86')); //"00011000001110"

console.log(decode('10001111')); //"07"
console.log(
  decode(
    '001100001100001100001110001110001110011101110111001110001110001110001111001111001111001100001100001100'
  )
); //"444666333666777444"
console.log(
  decode(
    '01110111110001100100011000000110000011110011110111011100110000110001100110'
  )
); //"33198877334422"
console.log(
  decode(
    '0011010011010011011010101111110011000011000011000011100011100011100011100011100011100001100100011001000110011100011001001111001111001111001111001111001111'
  )
); //"55500011144466666699919777777"
console.log(
  decode(
    '01110111011111000110010011110011110011110011110011110011110111011101110110011001100110011001101111111010101100011001000110000001100000011000'
  )
); //"3331977777733322222211100019888"
