/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/

function sudokuChecker(board) {
  let matrix = board.split('\n ').map(function(row) {
    return row.split('').map(function(digit) {
      return parseInt(digit);
    });
  });
  function invalid(arr) {
    return arr.length !== 9 ||
    arr.reduce(function(a,b) { return a+b }, 0) !== 45 ||
    arr.indexOf('5') !== arr.lastIndexOf('5');
  }
  for (let row = 0; row < 9; row++) {
    if (invalid(matrix[row])) {
      return 'invalid row: ' + row;
    }
  }
  for (let col = 0; col < 9; col++) {
    if (invalid(matrix.map(function(row) {
      return row[col];
    }))) return 'invalid col: ' + col;
  }
  for (let col = 0; col < 9; col+=3) {
    for (let row = 0; row < 9; row+=3) {
      let row1 = matrix[row].splice(0,3);
      let row2 = matrix[row+1].splice(0,3);
      let row3 = matrix[row+2].splice(0,3);
      if (invalid(row1.concat(row2, row3))) {
        return 'invalid';
      }
    }
  } return 'solved';
};

sudokuChecker(`735814296\n 896275314\n 214963857\n 589427163\n 362189745\n 471356982\n 923541678\n 648792531\n 157638429`);