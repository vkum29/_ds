/*
	filename: heap.sort.js
	author: Vj
	goal: minimal/optimal code to perform heap sort
	version: 1.0
	Worst: O(n log n) -
	Best: O(n)-
*/

const utils = require('../../_utils');
const { lessOne, plusOne, logger, iterations, swaps } = utils;

const heapSort = (list) => {
	// To-do
	return list;
}

const unsortedArray = [41, 12, 34, 10, 6, 40, 39];

logger(insertionsSort)([...unsortedArray]);

console.log(`Total iterations on array of length ${unsortedArray.length} is ${iterations.get()}, Swaps ${swaps.get()}`);
