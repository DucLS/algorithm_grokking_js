const quickSort = function (arr: number[]): number[] {
  let pivot: number;
  let leftArr = [];
  let rightArr = [];

  if (arr.length < 2) {
    return arr;
  }

  pivot = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

export default quickSort;
