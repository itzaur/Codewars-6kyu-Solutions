/*
DESCRIPTION:
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/
function reverse(str) {
  return str.split` `.map((el, i) =>
    i % 2 !== 0 ? [...el].reverse().join`` : el
  ).join` `.trim();
}

console.log(reverse('Reverse this string, please!')); //"Reverse siht string, !esaelp"
console.log(
  reverse("I really don't like reversing strings!"),
  "I yllaer don't ekil reversing !sgnirts"
); //"I yllaer don't ekil reversing !sgnirts"
console.log(reverse(' ')); //''
