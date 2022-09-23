class Stack {
  #list = [];

  constructor(initList) {
    if (initList) this.#list = initList;
  }

  push(item) {
    this.#list.push(item);
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }

  pop() {
    return this.#list.pop();
  }
  

  flipItnReverseIt() {
    return this.#list.split().map((word) => word.split('').reverse().join('')).reverse();
  }

}

module.exports = { Stack };
