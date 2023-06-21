## Quicksort

- Quicksort uses divide & conquer algorithm. Faster than Selection sort.
- When using divide & conquer, need to find base case and recursive case.
- Base case of quicksort is when array's length < 2, otherwise is recursive case.

## Step
- Pick a pivot. (Pivot is a random element in array)
- Divide array into two sub-arrays: elements less than the pivot and elements greater than the pivot.
- Call quicksort recursively on the two sub-arrays.

## Pseudocode

```
  if (arr.length < 2) {
    return arr;
  }

  pivot = arr[0];

  for(i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      lessArr.push(arr[i]);
    } else {
      greaterArr.push(arr[i]);
    }
  }

  return [...lessArr, pivot, ...greaterArr];

```

## BigO

O($n * \log(n)$)