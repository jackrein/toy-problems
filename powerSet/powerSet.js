/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 * I - string
 * O - array of strings
 * C - sort all subset strings, no duplicates
 */

var powerSet = function(str) {
  // create a result obj
  let subsets = {};
  let letters = {};
  str = str || '';
  // iterate over string
  for (let i = 0; i < str.length; i++) {
    letters[str[i]] = true;
  }
  str = Object.keys(letters).join('');
  let recurse = function(strSet) {
    subsets[strSet.split('').sort().join('')] = true;
    for (let i = 0; i < strSet.length; i++) {
      let subSet = strSet.substr(0, i) + strSet.substr(i+1, strSet.length);
      subSet = subSet.split('').sort().join('');
      if (!subsets[subSet]) {
        subsets[subSet] = true;
        recurse(subSet);
      }
    }
  }
    // slice part of string
    // sort & push to array
  recurse(str);
  // return result array
  return Object.keys(subsets).sort();
};

console.log(powerSet("jump"));