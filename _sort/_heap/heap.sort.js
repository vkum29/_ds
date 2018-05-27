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

let heapify = (item, ...list) => {
	let result = item ?  [item] : [];
	for (let i = Math.floor(list.length / 2) - 1; i >= 0; i--) {
		swap(list, ...getHeap(i));
	}
	list.length > 1 ? result.push(...heapify(...list)) : result.push(...list);
	return result;
};

const heapSort = (list) => {
	return heapify(null, ...list);
};

const getHeap = (index) => {

	let leftSibling = 2 * index + 1;
	let rightSibling = leftSibling + 1;

	return [index, leftSibling, rightSibling];
};

const compare = (list, parent, leftChild, rightChild) => {
	const lChild = list[leftChild];
	const rChild = list[rightChild];

	if (lChild && lChild > list[parent]) {
		parent = leftChild;
	}
	if (rChild && rChild > list[parent]) {
		parent = rightChild;
	}

	return parent;
};

let swap = (list, parent, leftChild, rightChild) => {
	const newParent = compare(list, parent, leftChild, rightChild);

	if (newParent !== parent) {
		[list[parent], list[newParent]] = [list[newParent], list[parent]];
	}
	return list;
};


const unsortedArray = [6, 1, 5, 2, 4, 3, 9, 6, 7];
heapify = iterations.increment(heapify);
swap = swaps.increment(swap, false);
logger(heapSort)([...unsortedArray]);

console.log(`Total iterations on array of length ${unsortedArray.length} is ${iterations.get()}, Swaps ${swaps.get()}`);
