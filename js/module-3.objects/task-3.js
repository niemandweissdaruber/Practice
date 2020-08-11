const findBestEmployee = function (employees) {
  'use strict';

  const values = Object.values(employees);
  let employeeName = '';
  let maxTasks = 0;

  const entries = Object.entries(employees);

  for (const [name, tasks] of entries) {
    if ([tasks] > maxTasks) {
      maxTasks = tasks;
      employeeName = name;
    }
  }
  return employeeName;
};

//   const keys = Object.keys(employees);
//   const values = Object.values(employees);
//   let biggestValue = values[0];

//   for (const value of values) {
//     // console.log(value);
//     if (value > biggestValue) {
//       biggestValue = value;
//     }
//   }
//   return `${biggestValue}`;

//   for (const key of keys) {
//     console.log(biggestValue.key);
//   }
// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
