/**
 * Write a function that takes a number as its argument and returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  let denom = 1;
  if (number < 0) {
    return '-' + toFraction(-number);
  } else {
    while (!Number.isInteger(number)) {
      number *= 10;
      denom *= 10;
    }
  }
  let gcd = 1;
  for (let d = number; d > 0; d--) {
    if (number % d === 0 && denom % d === 0) {
      gcd = d;
      break;
    }
  }
  return number/gcd + '/' + denom/gcd;
};