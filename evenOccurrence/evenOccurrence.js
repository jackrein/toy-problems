/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

var evenOccurrence = function(arr) {
  let counts = {};
  for (let n = 0; n < arr.length; n++) {
  	let currChar = arr[n];
    counts[currChar] = !counts[currChar];
  }

  for (let e = 0; e < arr.length; e++) {
    if (!counts[arr[e]]) {
      return arr[e];
    }
  }
  return null;
};

evenOccurrence([5, 5, 2, 1, 3, 3]);