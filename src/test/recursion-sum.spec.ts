import sum from "@algorithms/recursion/sum";

test("Should return 0 with empty array", () => {
  expect(sum([])).toBe(0);
});

test("Should return first item when array has only 1 item", () => {
  expect(sum([1])).toBe(1);
});

test("Should be return sum of items in array", () => {
  expect(sum([1, 2, 3])).toBe(6);
});

test("Should be return sum of items in array", () => {
  expect(sum([2, 4, 6])).toBe(12);
});
