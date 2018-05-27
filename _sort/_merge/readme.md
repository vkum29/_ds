# Merge sort
Sorting algorithm, based on divide and conquer.
Items are broken into halves and these two halves are called for merge sort if it can't be broken then sorted and merged back.

## Steps
- Recursively break the elemts into smallest unit possible
- Reversively sort and merge back the items

## Performance
| Case        | Operations     |
| ----------- | -------------- |
| Worst       | O(n log n)     |
| Average     | O(n log n)     |
| Best        | O(n log n)     |
| Auxiliary   | O(1)           |

## Characteristics
| Type       | Yes/No    |
| ---------- | --------- |
| In Place   | No        |
| Stable     | Yes       |
| Adaptive   | No        |

Adaptive Merge sort is an implement variation.

### Implementation
[See ./merge.sort.js v1.0](merge.sort.js)

### InsertionSort wiki
[External link to Merge sort wikipedia](https://en.wikipedia.org/wiki/Merge_sort)

### Other Sorting
[See other sorting algorithm](../)
