# Selection sort
A simple sorting algorithm which sorts minimum no. to left side in second pass after identifying same in first pass.
This process is repeated over till all elements are sorted.

## Quick sort steps
- Pass array to identify minimum value
- Move this value to left of unsorted elements in array.
- i.e can be done by Swap unordered left item
- Repeat above steps till all elements are sorted.

## Complexity O(n^2)
## Swaps O(n)

### Implementation
[See ./selection.sort.js](selection.sort.js)

### SelectionSort wiki
[External link to Selection sort wikipedia]https://en.wikipedia.org/wiki/Selection_sort

### Other Sorting
[See other sorting algorithm](../)
