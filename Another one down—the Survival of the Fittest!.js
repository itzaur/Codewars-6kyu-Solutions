/*
DESCRIPTION:
Stuck? [Try this one](http://www.codewars.com/kata/remove-the-minimum).
A Storm at Sea
Jill the adventurer has seen everything, from the highest mountains, to the most dangerous animals. But today she sailed through a hideous storm and shipwrecked. Left with only a damaged life boat and some supplies, she has carefully balanced out the weight not to capsize. But the weight is too much for the small life boat, she has to get rid of some items.

Beginning from one side of the boat, she starts to remove the n smallest items and hopes for the best…

Task
Given an array of integers, remove the n smallest. If there are multiple elements with the same value, remove the ones with a lower index first. If n is greater than the length of the array/list, return an empty list/array. If n is zero or less, return the original array/list.

Don't change the order of the elements that are left.

Examples
removeSmallest (-10) [1,2,3,4,5] = [1,2,3,4,5]
removeSmallest 0 [1,2,3,4,5] = [1,2,3,4,5]
removeSmallest 2 [5,3,2,1,4] = [5,3,4]
removeSmallest 3 [5,3,2,1,4] = [5,4]
removeSmallest 3 [1,2,3,4,5] = [4,5]
removeSmallest 5 [1,2,3,4,5] = []
removeSmallest 9 [1,2,3,4,5] = []

removeSmallest 2 [1,2,1,2,1] = [2,2,1]
*/
function removeSmallest(n, arr) {
  const arrCopy = arr.slice();
  const min = Math.min(...arrCopy);
  const index = arrCopy.indexOf(min);

  if (n <= 0) return arrCopy;

  arrCopy.splice(index, 1);

  return n > 1 ? removeSmallest(n - 1, arrCopy) : arrCopy;

  // let res = arr.slice(0);
  // while( n-- > 0 ) res.splice(res.indexOf( Math.min(...res) ),1);
  // return res
}

console.log(removeSmallest(-10, [1, 2, 3, 4, 5])); //[1,2,3,4,5]
console.log(removeSmallest(0, [1, 2, 3, 4, 5])); //[1,2,3,4,5]
console.log(removeSmallest(2, [5, 3, 2, 1, 4])); //[5,3,4]
console.log(removeSmallest(3, [5, 3, 2, 1, 4])); //[5,4]
console.log(removeSmallest(3, [1, 2, 3, 4, 5])); //[4,5]
console.log(removeSmallest(5, [1, 2, 3, 4, 5])); //[]
console.log(removeSmallest(9, [1, 2, 3, 4, 5])); //[]
