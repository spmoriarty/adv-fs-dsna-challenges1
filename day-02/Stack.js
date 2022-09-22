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
    

}

module.exports = { Stack };
