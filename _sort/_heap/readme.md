# Heap sort
Sorting algorithm, works by creating a heap structure and sorting tree to have max value or minimum value at top of the tree. ONce a value at top is identified a new tree is formed excluding sorted element and re calculation is carried out.

## Steps
- generate maxHeap or minmumHeap
- Start iterating over generated heap and sort element.
- Swap values to have larges value in case of max heap and smallest for min heap in the tree
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
