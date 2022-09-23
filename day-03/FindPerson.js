
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
          
}

class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }
    
  add(person) {
    if (person < this.value) {
      if (!this.left) {
        this.left = new PersonTreeNode(person);
      } else {
        this.left.add(person);
      }
    } else {
      if (!this.right) {
        this.right = new PersonTreeNode(person);
      } else {
        this.right.add(person);
      }
              
    }
  }


  findPerson(name) {
    if (name === this.value) {
      return this.person;
    }
    if (name < this.value) {
      if (this.left) {
        return this.left.findPerson(name);
      } else {
        return 'Not in tree';
      }
    } else {
      if (name < this.right) {
        return this.right.findPerson(name);
      } else {
        return 'Not in tree';
      }
    }
  }
}

module.exports = { PersonTreeNode, Node };
