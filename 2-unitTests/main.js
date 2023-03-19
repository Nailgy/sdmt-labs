"use strict";

class Node {
  constructor(element) {
    this.element = element;
    this.nextNode = null;
  }
}

class SinglyLinkedCircList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  length() {
    return this.size;
  }

  append(element) {
    if (typeof element === "string" && element.length === 1) {
      const node = new Node(element);
      if (!this.head) {
        this.head = node;
      } else {
        this.tail.nextNode = node;
      }
      node.nextNode = this.head;
      this.tail = node;
      this.size++;
    } else {
      throw new Error(
        "Error. Wrong input type. Expected type string of length 1"
      );
    }
  }

  insert(element, index) {
    if (typeof element === "string" && element.length === 1) {
      if (index < 0 || index > this.size) {
        throw new Error("Error. Index out of range");
      }
      const node = new Node(element);
      if (index === 0) {
        node.nextNode = this.head;
        this.head = node;
        this.tail = node;
      } else if (index === this.size) {
        this.tail.nextNode = node;
        this.tail = node;
        node.nextNode = this.head;
      } else {
        let currNode = this.head;
        for (let i = 0; i < index - 1; i++) {
          currNode = currNode.nextNode;
        }
        node.nextNode = currNode.nextNode;
        currNode.nextNode = node;
      }
      this.size++;
    } else {
      throw new Error(
        "Error. Wrong input type. Expected type string of length 1"
      );
    }
  }

  delete(index) {
    if (index < 0 || index > this.size - 1) {
      throw new Error("Error. Index out of range");
    }
    let deletedItem = null;
    if (this.size === 1) {
      deletedItem = this.head.element;
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
      deletedItem = this.head.element;
      this.head = this.head.nextNode;
      this.tail.nextNode = this.head;
    } else {
      let currNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currNode = currNode.nextNode;
      }
      deletedItem = currNode.nextNode.element;
      currNode.nextNode = currNode.nextNode.nextNode;
      if (index === this.size - 1) {
        this.tail = currNode;
      }
    }
    this.size--;
    return deletedItem;
  }

  deleteAll(element) {
    let currNode = this.head;
    let prevNode = this.tail;
    for (let i = 0; i < this.size; i++) {
      if (currNode.element === element) {
        if (i === 0) {
          this.head = this.head.nextNode;
          this.tail.nextNode = this.head;
          prevNode = this.tail;
        } else {
          prevNode.nextNode = currNode.nextNode;
          if (i === this.size - 1) {
            this.tail = prevNode;
          }
        }
        this.size--;
        i--;
      } else {
        prevNode = currNode;
      }
      currNode = currNode.nextNode;
    }
  }

  get(index) {
    if (index < 0 || index > this.size - 1) {
      throw new Error("Error. Index out of range");
    }
    let i = 0;
    let currNode = this.head;
    for (let i = 0; i < index; i++) {
      currNode = currNode.nextNode;
    }
    return currNode.element;
  }

  clone() {
    const newList = new SinglyLinkedCircList();
    let currNode = this.head;
    for (let i = 0; i < this.size; i++) {
      newList.append(currNode.element);
      currNode = currNode.nextNode;
    }
    return newList;
  }

  reverse() {
    let prevNode = this.tail;
    let currNode = this.head;
    let nextNode;

    if (!currNode) {
      throw new Error("Error. The list is empty");
    }

    for (let i = 0; i < this.size; i++) {
      nextNode = currNode.nextNode;
      currNode.nextNode = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    this.head = prevNode;
    this.tail = this.head.nextNode;
  }

  findFirst(element) {
    let currNode = this.head;
    let firstIndex = -1;
    for (let i = 0; i < this.size; i++) {
      if (currNode.element === element) {
        firstIndex = i;
        return firstIndex;
      }
      currNode = currNode.nextNode;
    }
    return firstIndex;
  }

  findLast(element) {
    let currNode = this.head;
    let lastIndex = -1;
    for (let i = 0; i < this.size; i++) {
      if (currNode.element === element) {
        lastIndex = i;
      }
      currNode = currNode.nextNode;
    }
    return lastIndex;
  }

  clear() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  extend(list) {
    let currNode = list.head;
    let i = 0;
    for (let i = 0; i < list.size; i++) {
      this.append(currNode.element);
      currNode = currNode.nextNode;
    }
  }
}

module.exports = { SinglyLinkedCircList };
