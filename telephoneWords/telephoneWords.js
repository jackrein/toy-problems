 /* Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  */

const fs = require('fs');

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

var telephoneWords = function(digitString) {
  // split string into digits
  // let digits = digitString
  let words = [];
  var dictionary = fs.readFile('c://Users/Jackson/OneDrive/Documents/Hack Reactor/ghrbld09-toy-problems/telephoneWords/words.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    return data;
  })
  // iterate over digit array
  let lettersForDigits = (word, digits) => {
    if (digits.length === 0) {
      // if (dictionary.contains(word)) {
        return words.push(word);
      // }
    }
    [...phoneDigitsToLetters[digits[0]]]
      .forEach(letter => {
        lettersForDigits(word + letter, digits.slice(1));
      });
  };
  lettersForDigits('', [...digitString]);
  // generate possible string combos
  // push strings to result array
  // return words;
  console.log(words);
};
telephoneWords('2745');
  /* Example:
  *
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  */