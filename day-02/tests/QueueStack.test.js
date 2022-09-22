const { Queue } = require('../Queue.js');

describe('Queing', () => {
  it('The queue adds an item', () => {
    const queue = new Queue();
    queue.enqueue('Tim');
    expect(queue.hasNext()).toEqual(true);
  });

  it('removes first item from queue', () => {
    const queue = new Queue();
    queue.enqueue('Marvin');
    expect(queue.hasNext()).toEqual(true);
    queue.dequeue();
    expect(queue.hasNext()).toEqual(false);
  });
});
