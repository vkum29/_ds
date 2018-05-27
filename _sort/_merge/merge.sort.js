/*
	filename: merge.sort.js
	author: Vj
	goal: minimal/optimal code to perform merge sort
	version: 1.0
	Worst: O(n log n) -
	Best: O(n)-
*/

const utils = require('../../_utils');
const { lessOne, plusOne, logger, iterations, swaps } = utils;

let mergeSort = (list) => {
	const midPoint = isListDivisible(list.length);
	if (midPoint === 1) {
		return sort(list.slice(0, midPoint), list.slice(midPoint, list.length));
	} else if (!!midPoint) {
		return sort(mergeSort(list.slice(0, midPoint)), mergeSort(list.slice(midPoint, list.length)));
	}
	return list;
};

const isListDivisible = (listLength) => Math.ceil(listLength / 2);

let sort = (list1, list2) => {
	const result = [];
	let l2Pointer = 0;
	while(list1.length) {
		while (list2.length && l2Pointer < list2.length) {
			if (list1[0] < list2[0]) {
				result.push(...splicer(list2));
			} else {
				l2Pointer++;
			}
		}
		l2Pointer = 0;
		result.push(...splicer(list1));
	}
	return result.concat( list1, list2 );
};

let splicer = (list) => {
	return list.splice(0, 1);
}

const unsortedArray = [6, 1, 5, 2, 4, 3, 9, 6, 7];
mergeSort = iterations.increment(mergeSort);
splicer = swaps.increment(splicer, false);
logger(mergeSort)([...unsortedArray]);

console.log(`Total iterations on array of length ${unsortedArray.length} is ${iterations.get()}, Swaps ${swaps.get()}`);
