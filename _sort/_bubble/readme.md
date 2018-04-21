# Bubble sort (a.k.a sinking sort)
A simple method to sort. Consecutively compares adjacent pair and swaps if they need sorting.
This is repeated operation and done till no more swap is possible/needed on list.

## Steps
- Start with pivotAt end of array
- Compare this pivot with left side element
- Swap if order is not as expected
- Change the Pivot to Pivot - 1

This operation has to be repeated n * n time to sort the content.

Easy to understand and implement but requires n^2 operations to sort data.

## Improved bubble Sort
After each iteration, one less element (the last/first one) is needed to be compared until there are no more elements left to be compared.


## Performance
| Case        | Operations |
| ----------- | ---------- |
| Worst       | O(n^2)     |
| Average     | O(n^2)     |
| Best        | O(n)       |
| Auxiliary   | O(1)       |

## Characteristics
| Type       | Yes/No  |
| ---------- | ------- |
| In Place   | Yes     |
| Stable     | Yes     |
| Adaptive   | Yes     |

### Implementation
[See ./bubble.sort.js v1.0](bubble.sort.js)

### BubbleSort wiki
[External link to Bubble sort wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)

### Other Sorting
[See other sorting algorithm](../)
