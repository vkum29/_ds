# Heap sort
Sorting algorithm, divides input into a sorted and an unsorted region and iteratively shrinks unsorted region by extracting largest element and moving that to sorted region.

## Steps
- Pass array to identify minimum value
- Move this value to left of unsorted elements in array.
- i.e can be done by Swap unordered left item
- Repeat above steps till all elements are sorted.

## Performance
| Case        | Operations     |
| ----------- | -------------- |
| Worst       | O(n log n)     |
| Average     | O(n log n)     |
| Best        | O(n)           |
| Auxiliary   | O(1)           |

## Characteristics
| Type       | Yes/No    |
| ---------- | --------- |
| In Place   | Yes       |
| Stable     | No        |
| Adaptive   | variation |

Adaptive heap sort is an implement variation.

### Implementation
[See ./heap.sort.js v1.0](heap.sort.js)

### InsertionSort wiki
[External link to Heap sort wikipedia](https://en.wikipedia.org/wiki/Heapsort)

### Other Sorting
[See other sorting algorithm](../)
