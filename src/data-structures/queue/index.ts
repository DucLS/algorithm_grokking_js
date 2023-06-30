class Queue<T> {
  items: T[] = [];

  constructor(...params: T[]) {
    this.items = [...params];
  }

  enQueue(data: T) {
    this.items.push(data);
  }

  deQueue(): T | undefined {
    return this.items.shift();
  }

  front(): T {
    return this.items[0];
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

export default Queue;
