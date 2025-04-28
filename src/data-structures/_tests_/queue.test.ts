import { createQueue } from '../';


describe('createQueue',()=>{
    let queue:ReturnType<typeof createQueue<number>> 

    beforeEach(() => {
        queue = createQueue<number>();
    });

    it('Should be empty at the beggining', () => {
        expect(queue.isEmpty()).toBe(true);
        expect(queue.size()).toBe(0);
    }); 

    it('Should enqueue elements', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        expect(queue.getArray()).toEqual([1,2])
        expect(queue.isEmpty()).toBe(false);
        expect(queue.size()).toBe(2);
        expect(queue.peek()).toBe(1);
      });

    it('Should dequeue elements in FIFO order', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.getArray()).toEqual([1,2,3])
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(2);
        expect(queue.dequeue()).toBe(3);
        expect(queue.isEmpty()).toBe(true);
    });

    it('Should clear the queue', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.clear();
        expect(queue.getArray()).toEqual([])
        expect(queue.isEmpty()).toBe(true);
        expect(queue.size()).toBe(0);
        expect(queue.peek()).toBeUndefined();
        expect(queue.dequeue()).toBeUndefined();
    });
})