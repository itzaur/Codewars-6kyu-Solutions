/*
Description:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of projecteuler.net (Problem 1)
*/
function solution(number) {
  return Array.from({ length: number - 1 }, (_, i) => i + 1)
    .filter((el) => el % 3 == 0 || el % 5 == 0)
    .reduce((acc, el) => acc + el, 0);
  ////////////////////////////////!SECTION
  //   return number < 3
  //     ? 0
  //     : [...Array(number)].reduce(
  //         (pre, _, idx) => pre + idx * (!(idx % 3) || !(idx % 5)),
  //         0
  //       );
}

console.log(solution(10)); //23
