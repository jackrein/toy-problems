/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  let letterCount = {};
  for (let i = 0; i < string.length; i++) {
    let currChar = string[i];
    letterCount[currChar] === undefined ? letterCount[currChar] = 1 : letterCount[currChar]++;
  }
  let singles = [];
  for (let key in letterCount) {
    if (letterCount[key] === 1) {
      singles.push(key);
    }
  }
    return singles[0];
};