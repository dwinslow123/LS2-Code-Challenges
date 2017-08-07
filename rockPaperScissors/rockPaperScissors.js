/*
 * * Write a function that generates every sequence of throws a single
 * * player could throw over a three-round game of rock-paper-scissors.
 * *
 * * Your output should look something like:
 * *   [["rock", "rock", "rock"],
 * *    ["rock", "rock", "paper"],
 * *    ["rock", "rock", "scissor"],
 * *    ["rock", "paper", "rock"],
 *              ...etc...
 *                   */

const rockPaperScissors = (n) => {
	let rounds = n;
	const results = [];

	const choices = ['rock', 'paper', 'scissors'];

	const recurse = (roundsLeft, played) => {
		if (roundsLeft === 0) {
			return results.push(played);
		}
		for (let i = 0; i < choices.length; i++) {
			let active = choices[i];
			recurse( roundsLeft - 1, played.concat(current) );
		}
	};

	recurse(rounds, []);
	return results;
};

console.log(rockPaperScissors);