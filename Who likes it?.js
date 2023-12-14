/*
DESCRIPTION:
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/
function likes(names) {
  const { 0: firstName, 1: secondName, 2: thirdName } = names;

  switch (names.length) {
    case 0:
      return `no one likes this`;
    case 1:
      return `${names} likes this`;
    case 2:
      return `${firstName} and ${secondName} like this`;
    case 3:
      return `${firstName}, ${secondName} and ${thirdName} like this`;
    default:
      return `${firstName}, ${secondName} and ${
        names.length - 2
      } others like this`;
  }

  //   names.length === 0 && (names = ["no one"]);
  //   let [a, b, c, ...others] = names;
  //   switch (names.length) {
  //     case 1: return `${a} likes this`;
  //     case 2: return `${a} and ${b} like this`;
  //     case 3: return `${a}, ${b} and ${c} like this`;
  //     default: return `${a}, ${b} and ${others.length + 1} others like this`;
  //   }
}

console.log(likes([])); //'no one likes this'
console.log(likes(['Peter'])); //'Peter likes this'
console.log(likes(['Jacob', 'Alex'])); //'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark'])); //'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); //'Alex, Jacob and 2 others like this'
