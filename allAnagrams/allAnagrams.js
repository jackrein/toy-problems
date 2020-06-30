/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  let anagrams = {};
  let addLtr = function(text, opts) {
    if (text.length === string.length) {
      anagrams[text] = true;
    }
    for (let i = 0; i < opts.length; i++) {
      addLtr(text + opts[i],
        opts.slice(0, i) + opts.slice(i+1))
    }
  }
  addLtr('', string);
  return Object.keys(anagrams);
};

console.log(allAnagrams('abc'));