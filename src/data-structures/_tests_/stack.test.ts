import { createStack } from '../index';


describe('createStack',()=>{
    let stack:ReturnType<typeof createStack<string>> 

    beforeEach(() => {
        stack = createStack<string>();
    });

    it('Should be empty at the beggining', () => {
        expect(stack.isEmpty()).toBe(true);
        expect(stack.size()).toBe(0);
    }); 

    it('Should enqueue elements', () => {
        stack.push('a');
        stack.push('b');
        expect(stack.getArray()).toEqual(['a','b'])
        expect(stack.isEmpty()).toBe(false);
        expect(stack.size()).toBe(2);
        expect(stack.peek()).toBe('b');
      });

    it('Should dequeue elements in FIFO order', () => {
        stack.push('a');
        stack.push('b');
        stack.push('c');

        expect(stack.getArray()).toEqual(['a','b','c'])
        expect(stack.pop()).toBe('c');
        expect(stack.pop()).toBe('b');
        expect(stack.pop()).toBe('a');
        expect(stack.isEmpty()).toBe(true);
    });

    it('Should clear the queue', () => {
        stack.push('a');
        stack.push('b');
        stack.clear();
        expect(stack.getArray()).toEqual([])
        expect(stack.isEmpty()).toBe(true);
        expect(stack.size()).toBe(0);
        expect(stack.peek()).toBeUndefined();
    });
})