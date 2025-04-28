export function createStack<T>() {
    const items: T[] = [];
  
    return {
      push(item: T): void {
        items.push(item);
      },
      pop(): T | undefined {
        return items.pop();
      },
      peek(): T | undefined {
        return items[items.length - 1];
      },
      isEmpty(): boolean {
        return items.length === 0;
      },
      size(): number {
        return items.length;
      },
      clear(): void {
        items.length = 0;
      }
    };
  }
  