/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {
  if (array.length < 2) return array;
  let pivot = array[Math.floor(array.length / 2)];
  let left = [], right = [];
  array.forEach(element => {
    if (element < pivot) left.push(element)
    if (element > pivot) right.push(element)
  });
  left = quicksort(left);
  right = quicksort(right);
  let sorted = left.concat(pivot, right);
  return sorted;
};

console.log(quicksort([2, 6, 1, 4, 3]));