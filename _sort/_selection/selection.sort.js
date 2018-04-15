/*
	filename: selection.sort.js
	author: Vj
	goal: minimal/optimal code to perform selection sort
	version: 1.0
	complexity: O(n^2)
	swap: O(n)
*/

const unsortedArray = [1, 2, 3, 4, 5, 6, 7];
const lessOne = value => value - 1;
const plusOne = value => value + 1;
let no_of_exexcution = 0;

// single time running - need to run n times
const selectionSort = (list, leftPivot = 0) => {

	no_of_exexcution++;
	// find smallest elements
	const minAt = getSmallestItemPosition(list, leftPivot);
	const nextPivot = plusOne(leftPivot);
	// swap
	[list[leftPivot] , list[minAt]] = [list[minAt], list[leftPivot]];

	return nextPivot >= lessOne(list.length) ? list : selectionSort(list, nextPivot);

}

const getSmallestItemPosition = (list, pointer, smallItemAt=pointer) => {

	no_of_exexcution++;

	const nextPointer = plusOne(pointer);

	smallItemAt = list[smallItemAt] > list[nextPointer] ? nextPointer : smallItemAt;

	return nextPointer >= lessOne(list.length) ? smallItemAt : getSmallestItemPosition(list, nextPointer, smallItemAt);
}


const logger = method => {
	return (list) => {
		console.log(' input for method ', list);
		const result = method(list);
		console.log(' output for method ', result);
		return result;
	}
}

logger(selectionSort)([...unsortedArray]);
console.log(`Total iterations on array of length ${unsortedArray.length} is ${no_of_exexcution}`);
