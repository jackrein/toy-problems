/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

var longestPalindrome = function (string) {
  let longest = '';
  if (string.length < 2) {
  	return string;
  }
  let findPal = function(left, right) {
    while (left >= 0 && right < string.length && string[left] === string[right]) {
      left--;
      right++;
    }
    return string.slice(left + 1, right);
  };
  for (let f = 1; f < string.length; f++) {
    let oddPal = findPal(f - 1, f + 1);
    let evenPal = findPal(f, f + 1);
    if (oddPal.length > longest.length) {
      longest = oddPal;
    }
    if (evenPal.length > longest.length) {
      longest = evenPal;
    }
  }
  return longest;
};

longestPalindrome("My dad is a racecar athlete");