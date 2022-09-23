const { Queue } = require('../Queue.js');
const { Stack } = require('../Stack.js');

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

describe('Stacking', () => {
  it('adds an item to the back of the stack', () => {
    const stack = new Stack();
    stack.push('aeroplane');
    expect(stack.peek()).toEqual('aeroplane');
  });

  it('removes the last item in a stack', () => {
    const stack = new Stack();
    stack.push('upwards');
    stack.push('halloween');
    expect(stack.peek()).toEqual('halloween');
    stack.pop();
    expect(stack.peek()).toEqual('upwards');
  });

});

describe('I put my thang down, flip it and reverse it', () => {
  it('Is it worth it? Let me work it', () => {
    const missy = new Stack('I put my thang down, flip it and reverse it');
    expect(missy.flipItnReverseIt()).toEqual(['ti esrever dna ti pilf ,nwod gnaht ym tup I']);
  });
});
