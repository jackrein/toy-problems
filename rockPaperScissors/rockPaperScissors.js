/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = roundCount => {
  if (roundCount === 0) return []
  const permutations = []
  function playRound(plays){
	if (plays.length === roundCount) {
	  permutations.push(plays)
	  return
	}
	['R', 'P', 'S'].forEach(play => {
	  playRound(plays + play)
	})
  }
  playRound('')
  return permutations
}

rockPaperScissors(3);