function checkForSpam(string) {
  'use strict';

  const blackListedWord1 = 'spam';
  const blackListedWord2 = 'sale';

  let result =
    string.toLowerCase().includes(blackListedWord1) ||
    string.toLowerCase().includes(blackListedWord2);

  return result;
}

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
//
