import * as _ from 'lodash/fp';


// Exercise 1
// Refactor to remove all arguments by partially applying the function

const words = _.split(' ');

// Exercise 1a
// Use map to make a new words fn that works on an array of strings.

const sentences = _.map(words);


// Exercise 2
// Refactor to remove all arguments by partially applying the functions

// const filterQs = (xs) => {
//   return filter(function(x){ return match(/q/i, x);  }, xs);
// };

const filterQs = _.filter(val => /q/i.test(val));
// Exercise 3
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
const _keepHighest = (x,y) => { return x >= y ? x : y; };

// REFACTOR THIS ONE:
// const max = (xs) => {
//   return reduce(function(acc, x){
//     return _keepHighest(acc, x);
//   }, -Infinity, xs);
// };
const max = _.reduce(_keepHighest, -Infinity);


// Bonus 1:
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
// const slice = (start) =>
//   (end) =>
//     (arr) =>
//       arr.slice(start, end);

const slice = _.curry((start, end, arr) => arr.slice(start, end));


// Bonus 2:
// ============
// Use slice to define a function "take" that returns
// n elements from the beginning of an array. Make it curried.
// For ['a', 'b', 'c'] with n=2 it should return ['a', 'b']
const take = n => slice(0)(n);


export const E = {
  words,
  sentences,
  filterQs,
  max,
  slice,
  take,
};
