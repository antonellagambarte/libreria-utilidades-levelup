export function createQueue<T>() {
    const items: T[] = [];
  
    return {
      enqueue(item: T): void {
        items.push(item);
      },
      dequeue(): T | undefined {
        return items.shift();
      },
      peek(): T | undefined {
        return items[0];
      },
      isEmpty(): boolean {
        return items.length === 0;
      },
      size(): number {
        return items.length;
      },
      clear(): void {
        items.length = 0;
      },
      getArray(): T[] {
        return [...items];
      }
    };
  }
  