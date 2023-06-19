import binarySearch from "@algorithms/binary-search/binary-search";

test("Should return null", () => {
  expect(binarySearch([1, 2, 3], 5)).toBeNull();
});

test("Should return index of item", () => {
  expect(binarySearch([1, 2, 3, 5, 7, 9], 5)).toBe(3);
});
