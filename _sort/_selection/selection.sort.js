/*
	filename: selection.sort.js
	author: Vj
	goal: minimal/optimal code to perform selection sort
	version: 1.0
	Worst(Comparison, swaps): O(n^2), O(n)
	Best(Comparison, swaps): O(n^2), O(n)
*/

const utils = require('../../_utils');
const { plusOne, lessOne, logger, iterations, swaps } = utils;

// single time running - need to run n times
let selectionSort = (list, leftPivot = 0) => {

	// find smallest elements
	const minAt = getSmallestItemPosition(list, leftPivot);
	const nextPivot = plusOne(leftPivot);
	// swap
	[list[leftPivot] , list[minAt]] = [list[minAt], list[leftPivot]];

	return nextPivot >= lessOne(list.length) ? list : selectionSort(list, nextPivot);

}

let getSmallestItemPosition = (list, pointer, smallItemAt=pointer) => {

	const nextPointer = plusOne(pointer);

	smallItemAt = list[smallItemAt] > list[nextPointer] ? nextPointer : smallItemAt;

	return nextPointer >= lessOne(list.length) ? smallItemAt : getSmallestItemPosition(list, nextPointer, smallItemAt);
}

const unsortedArray = [41, 12, 34, 10, 6, 40, 39];
selectionSort = iterations.increment(selectionSort);
getSmallestItemPosition = iterations.increment(getSmallestItemPosition);
selectionSort = swaps.increment(selectionSort);
logger(selectionSort)([...unsortedArray]);
console.log(`Total iterations on array of length ${unsortedArray.length} is ${iterations.get()}, swaps ${swaps.get()}`);
