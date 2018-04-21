# Insertion sort
A simple sorting algorithm which starts with assuming left item to be sorted.
In every pass it takes the next element and moves it to left in such a way that all bigger value comes after it.
This process is repeated over till all elements are sorted.

## Steps
- Pass array to identify minimum value
- Move this value to left of unsorted elements in array.
- i.e can be done by Swap unordered left item
- Repeat above steps till all elements are sorted.

## Performance
| Case        | Operations |
| ----------- | ---------- |
| Worst       | O(n^2)     |
| Average     | O(n^2)     |
| Best        | O(n)       |
| Auxiliary   | O(1)       |

## Characteristics
| Type       | Yes/No    |
| ---------- | --------- |
| In Place   | Yes       |
| Stable     | Yes       |
| Adaptive   | Yes       |


### Implementation
[See ./insertion.sort.js v1.0](insertion.sort.js)

### InsertionSort wiki
[External link to Insertion sort wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)

### Other Sorting
[See other sorting algorithm](../)
