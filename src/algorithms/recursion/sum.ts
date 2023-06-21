const sum = function (arr: number[]): number {
  if (arr.length === 0) return 0;

  if (arr.length === 1) return arr[0];

  return arr[arr.length - 1] + sum(arr.splice(arr.length - 1, 1));
};

export default sum;
