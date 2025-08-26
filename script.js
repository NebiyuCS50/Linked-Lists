export class LinkedList {
  constructor(list = []) {
    this.list;
    this.head = null;
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
  getHead() {
    return this.head;
  }
  getTail() {
    if (!this.head) return null;
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }
  at(index) {
    if (index < 0) return null;
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) return current;
      count++;
      current = current.next;
    }
    return null;
  }
  pop() {
    if (!this.head) return null;
    if (!this.head.next) {
      const value = this.head.value;
      this.head = null;
      return value;
    }
    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }
    const value = current.next.value;
    current.next = null;
    return value;
  }
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }
  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }
  toString() {
    let current = this.head;
    let str = "";
    while (current) {
      str += `( ${current.value} ) -> `;
      current = current.next;
    }
    str += "null";
    return str;
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
