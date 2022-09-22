const {
  BinaryTreeNode
} = require('./BinaryTree');


describe('node based data structures', () => {
  it('example test', () => {
    expect(1).toBe(1);
  });

  it('Should show B as the root of A,C,D', () => {
    const tree = new BinaryTreeNode(5);
    tree.add(1);
    tree.add(8);
    tree.add(9);
    expect(tree).toEqual({ 'left': { 'left': null, 'right': null, 'value': 1 }, 'right': { 'left': null, 'right': { 'left': null, 'right': null, 'value': 9 }, 'value': 8 }, 'value': 5 });
  });

});
