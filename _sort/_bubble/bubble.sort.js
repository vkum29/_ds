/*
	filename: bubble.sort.js
	author: Vj
	goal: minimal/optimal code to perform bubble sort
	version: 1.0
	complexity: O(n^2)
*/

const unsortedArray = [41, 12, 34, 10, 6, 40, 39];
const lessOne = value => value - 1;
const plusOne = value => value + 1;
let no_of_exexcution = 0;
let leftMostPivot = 0;

// single time running - need to run n times
const bubbleSort = (list, swapped = false, rightPointer = lessOne(list.length)) => {

	no_of_exexcution++;

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



const logger = method => {
	return (list) => {
		console.log(' input for method ', list);
		const result = method(list);
		console.log(' output for method ', result);
		return result;
	}
}

logger(bubbleSort)([...unsortedArray]);
console.log(`Total Operations on array of length ${unsortedArray.length} is ${no_of_exexcution}`);
