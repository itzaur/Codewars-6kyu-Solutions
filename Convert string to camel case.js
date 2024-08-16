/*
Description:
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/
function toCamelCase(str) {
  const array = str.replace(/[-,_]/g, ' ').split` `;
  return (
    array[0] +
    array.slice(1).map((el) => el[0].toUpperCase() + el.slice(1)).join``
  );
  //////////////////////////////!SECTION
  //   return str.replace(/[-,_](.)/g, (_, c) => c.toUpperCase());
  //////////////////////////////!SECTION
  //   return str
  //     .split(/-|_/g)
  //     .map(
  //       (w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)
  //     )
  //     .join('');
}

console.log(toCamelCase('')); //''
console.log(toCamelCase('the_stealth_warrior')); //'theStealthWarrior'
console.log(toCamelCase('The-Stealth-Warrior')); //'TheStealthWarrior'
console.log(toCamelCase('A-B-C')); //'ABC'
