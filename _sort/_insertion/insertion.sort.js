/*
	filename: insertion.sort.js
	author: Vj
	goal: minimal/optimal code to perform insertion sort
	version: 1.0
	complexity: O(n^2)
	swap: O(n)
*/

const unsortedArray = [1, 2, 3, 4, 5, 6, 7];
const lessOne = value => value - 1;
const plusOne = value => value + 1;
let no_of_exexcution = 0;

const insertionsSort = (list) => {

	no_of_exexcution++;
	// To-do sorting

	return list;

}

const logger = method => {
	return (list) => {
		console.log(' input for method ', list);
		const result = method(list);
		console.log(' output for method ', result);
		return result;
	}
}

logger(insertionsSort)([...unsortedArray]);
console.log(`Total iterations on array of length ${unsortedArray.length} is ${no_of_exexcution}`);
