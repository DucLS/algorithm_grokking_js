const binarySearch = function (list: number[], item: number): number | null {
  let low = 0;
  let high = list.length - 1;
  let mid;
  let guest;

  while (low <= high) {
    mid = Math.floor((high + low) / 2);
    guest = list[mid];

    if (guest === item) {
      return mid;
    }

    if (guest > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
};

export default binarySearch;
