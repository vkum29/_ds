/*
	filename: bubble.sort.js
	author: Vj
	goal: minimal/optimal code to perform bubble sort
	complexity: O(n^2)
*/

 const unsortedArray = [41, 12, 34, 10, 6, 40, 39];
 const lessOne = value => value - 1;
 let no_of_exexcution = 0;

// single time running - need to run n times
const bubbleSort = (list, pivotAt = lessOne(list.length), rightPointer = lessOne(list.length)) => {
	no_of_exexcution++;

	if(rightPointer <= 0 && pivotAt <= 0) {
		return list;
	}

	let leftPointer = lessOne(rightPointer);

	if (!rightPointer) {
			pivotAt = lessOne(pivotAt);
			leftPointer = undefined;
	} else if(list[leftPointer] > list[rightPointer]) {
		 list.splice(leftPointer, 2, list[rightPointer], list[leftPointer]);
	}

	return bubbleSort(list, pivotAt, leftPointer);
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
