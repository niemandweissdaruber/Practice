// console.log([1, 2, 3, 4, 5].slice(3));
// [4, 5] вернет новый массив
// [1, 2, 3] исходный массив

// console.log([1, 2, 3, 4, 5].splice(2, 2, 6, 7));
// [3, 4] вернет новый массив
// [1, 2, 6, 7, 5] исходный массив

// const a = {
//   x: 5,
//   y: 6,
// };

// const b = {
//   o: 6,
//   x: 9,
// };

// const c = {
//   ...a,
//   p: 10,
//   ...b,
//   x: 33,
// };

// const { p, x } = c;

// console.log(p, x);

const bar = function () {
  console.log('bar');
};

const baz = function () {
  console.log('baz');
};

const foo = function () {
  console.log('foo');
  bar();
  baz();
};

foo();
