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

// const bar = function () {
//   console.log('bar');
// };

// const baz = function () {
//   console.log('baz');
// };

// const foo = function () {
//   console.log('foo');
//   bar();
//   baz();
// };

// foo();

const Husband = function ({ nationality, height, job, languages = 2 } = {}) {
  this.nationality = nationality;
  this.height = height;
  this.job = job;
  this.languages = languages;
};

Husband.prototype.changeJob = function (newJob) {
  this.job = newJob;
};

const myHusband = new Husband({
  nationality: 'latin',
  height: 190,
  job: 'ambassador',
});

console.log(myHusband);
myHusband.changeJob('narcotraficante');

const myHusband2 = new Husband({
  nationality: 'arab',
  height: 185,
  job: 'sheikh',
  languages: ['arab', 'english', 'french'],
});

console.log(myHusband2);

const Phone = function ({ model, year, storage, cameras } = {}) {
  this.model = model;
  this.year = year;
  this.storage = storage;
  this.cameras = cameras;
};

const myPhone = new Phone({
  model: 'iPhone',
  year: 2020,
  storage: '256 GB',
  cameras: 4,
});

console.log(myPhone);
