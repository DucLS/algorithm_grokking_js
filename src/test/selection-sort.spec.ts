import selectionSort from "@algorithms/selection-sort/selection-sort";

test("Should return empty array", () => {
  expect(selectionSort([])).toStrictEqual([]);
});

test("Should return an increase order array", () => {
  expect(selectionSort([4, 1, 3, 2])).toStrictEqual([1, 2, 3, 4]);
});
