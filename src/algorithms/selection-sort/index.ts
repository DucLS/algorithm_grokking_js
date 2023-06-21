const selectionSort = function (list: number[]): number[] {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] > list[j]) {
        let tmp = list[i];
        list[i] = list[j];
        list[j] = tmp;
      }
    }
  }

  return list;
};

export default selectionSort;
