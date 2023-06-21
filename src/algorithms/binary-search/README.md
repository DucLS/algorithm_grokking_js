## Input

A sorted array and search item

## Step

- First get mid item in array and compare with search item
- Second, if mid item lower then search item, update high value = mid - 1 else update low value = mid + 1
- Finally, mid item equal search item return index of mid item else return null

## Pseudocode

```
low = 0
high = array.length - 1

while (low <= high)
  mid = (high + low) / 2
  guest = array[mid]

  if (guest == item) {
    return mid
  }

  if (guest < item) {
    high = mid - 1
  } else {
    low = mid + 1
  }

return null
```

## BigO

O(n) = log(n)
