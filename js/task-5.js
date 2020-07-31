const min = 6;
const max = 15;
let total = 0;

for (let i = min; i < max; i += 1) {
  //   console.log(i);

  if (i % 2 !== 0) {
    console.log('Нечетное:', i);
    continue;
  }

  console.log('Четное:', i);
  total += i;
}

console.log('total: ', total);
