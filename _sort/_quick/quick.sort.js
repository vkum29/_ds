/*
	filename: quick.sort.js
	author: Vj
	goal: minimal/optimal code to perform quick sort
	Worst:
	Best:
*/

const utils = require('../../_utils');
const {lessOne, plusOne, logger, iterations, swaps} = utils;

// single time running - need to run n times
let quickSort = (list, left = 0, right = list.length - 1) => {
	if (left >= right)
		return list;

	let pivot = getPivot(list, left, right);
	quickSort(list, left, pivot - 1);
	quickSort(list, pivot + 1, right);

	return list;
}

let getPivot = (list, pivot, right) => {

	let left = plusOne(pivot);

	while (right >= left) {
		if (list[left] >= list[pivot]){
			if (list[right] <= list[pivot]) {
				swap(list, left++, right--);
			} else {
				right--;
			}
		} else {
			left++;
		}
	};
	swap(list, pivot, right);
	return right;
};

let swap = (list, left, right) => {
	!!(left - right) && ([list[left], list[right]] = [list[right], list[left]]);
};

const unsortedArray = [12, 1, 34, 39, 6, 10,1];
quickSort = iterations.increment(quickSort);
swap = swaps.increment(swap);
logger(quickSort)([...unsortedArray]);
console.log(`Total Operations on array of length ${unsortedArray.length} is ${iterations.get()}, swaps are is ${swaps.get()}`);
