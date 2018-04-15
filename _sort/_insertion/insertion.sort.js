/*
	filename: insertion.sort.js
	author: Vj
	goal: minimal/optimal code to perform insertion sort
	version: 1.0
	complexity: -
	swap: -
*/

const utils = require('../../_utils');
const {lessOne, plusOne, logger, iterations, swaps} = utils;



const isPivotAtEnd = (pivot, length) => {
	return pivot === length;
}

const areArraySame = (list, newList) => {
	return newList.join(',') === list.join(',');
}

let findSmallerValuePosition = (list, pivot, newPivotAt = pivot) => {
	const lessOnePivot = lessOne(newPivotAt);
	return (!newPivotAt || list[pivot] > list[lessOnePivot]) ? newPivotAt : findSmallerValuePosition(list, pivot, lessOnePivot);
}

let swap = (list, pivot, newPivot) => {
	const item = list.splice(pivot, 1)[0];
		list.splice(newPivot,0,item);
	return list;
}

// pivot starts from 1 as last first value is considered sorted.
const insertionsSort = (list, pivot = 1) => {
	if(isPivotAtEnd(pivot, list.length )){
		return list;
	} else {
		const newPivot = findSmallerValuePosition([...list], pivot);
		const newList = newPivot !== pivot ? swap([...list], pivot, newPivot) : list;
		return (isPivotAtEnd(pivot, lessOne(list.length)) || areArraySame([...list], [...newList])) ? newList : insertionsSort([...newList], plusOne(pivot));
	}
}

const unsortedArray = [41, 12, 34, 10, 6, 40, 39];

findSmallerValuePosition = swaps.increment(iterations.increment(findSmallerValuePosition), false);
swap = swaps.increment(swap, true);
logger(insertionsSort)([...unsortedArray]);

console.log(`Total iterations on array of length ${unsortedArray.length} is ${iterations.get()}, Swaps ${swaps.get()}`);
