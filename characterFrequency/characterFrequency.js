/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function(string) {
  let charFreq = {};
  for (let i = 0; i < string.length; i++) {
  	let currChar = string[i];
  	charFreq[currChar] === undefined ? charFreq[currChar] = 1 : charFreq[currChar]++;
  }
  let value = charFreq[1];
  console.log(charFreq[1]);
  let descending = Object.entries(charFreq).sort(function(a,b) {
    return b[1] > a[1] ? true : (a[0] > b[0] ? true : false);
  });
  return descending;
};