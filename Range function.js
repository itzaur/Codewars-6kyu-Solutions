/*
Description:
Create range generator function that will take up to 3 parameters - start value, step and stop value. This function should return an iterable object with numbers. For simplicity, assume all parameters to be positive numbers.

Examples:

range(5) --> 1,2,3,4,5
range(3, 7) --> 3,4,5,6,7
range(2, 3, 15) --> 2,5,8,11,14
*/
function range(...args) {
  switch (true) {
    case args.length == 1:
      return Array.from({ length: args }, (_, i) => i + 1);
    case args.length == 2:
      return Array.from(
        { length: args[1] - args[0] + 1 },
        (_, i) => args[0] + i
      );
    default:
      return Array.from(
        { length: args[2] / args[1] },
        (_, i) => args[0] + args[1] * i
      );
  }
}
////////////////////////////////////!SECTION
// const range = (start, step, stop) =>
//   (stop &&
//     [...Array((1 + (stop - start) / step) ^ 0)].map(
//       (_, idx) => start + idx * step
//     )) ||
//   (step && range(start, 1, step)) ||
//   range(1, 1, start);
////////////////////////////////////!SECTION
// const range = (...args) =>
//   ((stop, start = 1, step = 1) =>
//     Array.from(
//       { length: (stop - start) / step + 1 },
//       (_, idx) => start + idx * step
//     ))(args.pop(), args.shift(), args.shift());
////////////////////////////////////!SECTION
// function range(min, step, max) {
//   if (arguments.length === 1) return range(1, 1, min);
//   if (arguments.length === 2) return range(min, 1, step);

//   const result = [];

//   for (let i = min; i <= max; i += step) {
//     result.push(i);
//   }

//   return result;
// }

console.log(range(5)); //[1,2,3,4,5]
console.log(range(3, 7)); //[3,4,5,6,7]
console.log(range(2, 3, 15)); //[2,5,8,11,14]
