
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
        
}


class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
      
  add(val) {
    if (val < this.value) {
      if (!this.left) {
        this.left = new BinaryTreeNode(val);
      } else {
        this.left.add(val);
      }
    } else {
      if (!this.right) {
        this.right = new BinaryTreeNode(val);
      } else {
        this.right.add(val);
      }
            
    }     
    
  }
}



module.exports = { BinaryTreeNode, Node };
