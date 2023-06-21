import quickSort from "@algorithms/quick-sort/index";

test("Should return []", () => {
  expect(quickSort([])).toStrictEqual([]);
});

test("Should return [1]", () => {
  expect(quickSort([1])).toStrictEqual([1]);
});

test("Should return [1, 2, 3, 4, 5]", () => {
  expect(quickSort([3, 5, 2, 1, 4])).toStrictEqual([1, 2, 3, 4, 5]);
});

test("Should return [1, 2, 3, 4, 5]", () => {
  expect(quickSort([3, 5, 2, 2, 4, 1, 5, 1, 4])).toStrictEqual([
    1, 1, 2, 2, 3, 4, 4, 5, 5,
  ]);
});
