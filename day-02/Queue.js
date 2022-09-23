class Queue {
  #list = [];

  constructor(initList) {
    if (initList) this.#list = initList;
  }
  enqueue(item) {
    this.#list.push(item);
  }

  hasNext() {
    return this.#list.length ? true : false;
  }

  dequeue() {
    this.#list = this.#list.slice(1);
  }


}

module.exports = { Queue };
