# Quick sort (a.k.a partition sort algorithm) - 1959
Sorting works on comparison, if two item can be compared greater or less than they can be sorted.

## Quick sort steps

1. Find pivot, this pivot divides the element into two
2. Sort so that left has smaller value and right has larger values
3. divide these sorted array of low and high and repeat step 1 and 2 and 3 till it can't be broken.

## Performance

| Case        | Operations |
| ----------- | ---------- |
| Worst       | O(n^2)     |
| Average     | O(n log n) |
| Best        | O(n log n) |
| Auxiliary   | O(1)       |

## Characteristics

| Type       | Yes/No    |
| ---------- | --------- |
| In Place   | Yes       |
| Stable     | No        |
| Adaptive   | No        |

### Implementation

[See ./quick.sort.js v1.0](quick.sort.js)

### QuickSort wiki

[External link to Quick sort wikipedia](https://en.wikipedia.org/wiki/Quicksort)

### Other Sorting

[See other sorting algorithm](../)
