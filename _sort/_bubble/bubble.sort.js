/*
	filename: bubble.sort.js
	author: Vj
	goal: minimal/optimal code to perform bubble sort
	version: 1.0
	complexity: O(n^2)
*/


const utils = require('../../_utils');
const {lessOne, plusOne, logger, iterations, swaps} = utils;

let leftMostPivot = 0;

// single time running - need to run n times
let bubbleSort = (list, swapped = false, rightPointer = lessOne(list.length)) => {
	let leftPointer = lessOne(rightPointer);

	if (rightPointer && (list[leftPointer] > list[rightPointer])) {
		 list.splice(leftPointer, 2, list[rightPointer], list[leftPointer]);
		 swapped = true;
	}

	if(lessOne(list.length) <= plusOne(leftMostPivot)) {
		return list;
	} else if(leftPointer === leftMostPivot) {
		leftMostPivot = plusOne(leftMostPivot);
		return bubbleSort(list);
	} else {
		return bubbleSort(list, swapped, leftPointer);
	}
}

const unsortedArray = [41, 12, 34, 10, 6, 40, 39];
bubbleSort = iterations.increment(bubbleSort);
logger(bubbleSort)([...unsortedArray]);
console.log(`Total Operations on array of length ${unsortedArray.length} is ${iterations.get()}`);
