/*
DESCRIPTION:
Given an integer n, find two integers a and b such that:

A) a >= 0 and b >= 0
B) a + b = n
C) DigitSum(a) + Digitsum(b) is maximum of all possibilities.
You will return the digitSum(a) + digitsum(b).

For example:
solve(29) = 11. If we take 15 + 14 = 29 and digitSum = 1 + 5 + 1 + 4 = 11. There is no larger outcome.
n will not exceed 10e10.

More examples in test cases.

Good luck!
*/
function solve(n) {
  const el = n + '';
  const arr = el.split``.fill(9);

  if (el[0] !== '1') arr[0] = el[0] - 1;
  else arr[0] = 0;

  return (
    reducer([
      reducer(arr.join``.split``),
      reducer(`${n - arr.join``}`.split``),
    ]) || 0
  );
  ////////////////////////////////!SECTION
  //   const str = n + '',
  //     a = '9'.repeat(str.length - 1),
  //     b = n - a;

  //   return (a + b).split``.reduce((acc, el) => acc + +el, 0);
}

function reducer(el) {
  return el.reduce((acc, el) => acc + +el, 0);
}

console.log(solve(18)); //18
console.log(solve(29)); //11
console.log(solve(45)); //18
console.log(solve(1140)); //33
console.log(solve(7019)); //35
console.log(solve(0)); //0
