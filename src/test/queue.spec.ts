import Queue from "../data-structures/queue/index";

const queue = new Queue<number>(1, 2, 3, 4, 5);

test("Size queue should be 5", () => {
  expect(queue.size()).toBe(5);
});

test("Add item to queue", () => {
  queue.enQueue(6);
  expect(queue.size()).toBe(6);
});

test("Get item from queue", () => {
  expect(queue.deQueue()).toBe(1);
  expect(queue.size()).toBe(5);
});

test("Get first item in queue", () => {
  expect(queue.front()).toBe(2);
});

test("Exception when queue is empty", () => {
  const queue = new Queue();

  expect(queue.deQueue()).toBeUndefined;
});
