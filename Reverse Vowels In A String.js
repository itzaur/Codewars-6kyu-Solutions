/*
DESCRIPTION:
In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!
*/
function reverseVowels(str) {
  const vowels = [];
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[aeiouAEIOU]/)) vowels.push(str[i]);
    result.push(str[i]);
  }

  for (let j = 0; j < result.length; j++) {
    if (result[j].match(/[aeiouAEIOU]/)) {
      result[j] = vowels.pop();
    }
  }

  return result.join``;

  //   const vowels = str.match(/[aeiou]/gi);
  //   return str.replace(/[aeiou]/gi, () => vowels.pop());
}

console.log(reverseVowels('Hello!')); //'Holle!'
console.log(reverseVowels('Tomatoes')); //'Temotaos'
console.log(reverseVowels('Reverse Vowels In A String')); //'RivArsI Vewols en e Streng'
console.log(reverseVowels('Oh my goodness')); //'eh my goodnOss'
console.log(reverseVowels('The quick brown fox jumped over the lazy dog')); //'Tho qaeck brewn fox jempud ovor thi luzy deg'
