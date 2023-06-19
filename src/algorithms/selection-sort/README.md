## Input

An unsorted array

## Pseudocode

```
for (i = 0; i < arr.length - 1; i++) {
  for (j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      tmp = arr[i]
      arr[i] = arr[j]
      arr[j] = arr[i]
    }
  }
}
```

## BigO

O(n) = n^2
