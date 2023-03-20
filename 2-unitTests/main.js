"use strict";

class Node {
  constructor(element) {
    this.element = element;
    this.nextNode = null;
  }
}

class ListOnArrays {
  constructor() {
    this.list = [];
  }

  length() {
    return this.list.length;
  }

  append(element) {
    if (typeof element === "string" && element.length === 1) {
      this.list.push(element);
    } else {
      throw new Error(
        "Error. Wrong input type. Expected type string of length 1"
      );
    }
  }

  insert(element, index) {
    if (typeof element === "string" && element.length === 1) {
      if (index < 0 || index > this.list.length) {
        throw new Error("Error. Index out of range");
      }
      this.list.splice(index, 0, element);
    } else {
      throw new Error(
        "Error. Wrong input type. Expected type string of length 1"
      );
    }
  }

  delete(index) {
    if (index < 0 || index > this.list.length - 1) {
      throw new Error("Error. Index out of range");
    }
    const deletedItem = this.list[index];
    this.list.splice(index, 1);
    return deletedItem;
  }

  deleteAll(element) {
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] === element) {
        this.list.splice(i, 1);
        i--;
      }
    }
  }

  get(index) {
    if (index < 0 || index > this.list.length - 1) {
      throw new Error("Error. Index out of range");
    }
    const node = this.list[index];
    return node;
  }

  clone() {
    const newList = new ListOnArrays();
    for (let i = 0; i < this.list.length; i++) {
      newList.append(this.list[i]);
    }
    return newList;
  }

  reverse() {
    if (this.list.length > 0) {
      this.list.reverse();
    } else {
      throw new Error("Error. The list is empty");
    }
  }

  findFirst(element) {
    let firstIndex = -1;
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] === element) {
        firstIndex = i;
        return firstIndex;
      }
    }
    return firstIndex;
  }

  findLast(element) {
    let lastIndex = -1;
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i] === element) {
        lastIndex = i;
      }
    }
    return lastIndex;
  }

  clear() {
    this.list = [];
  }

  extend(list) {
    for (let i = 0; i < list.length(); i++) {
      this.list.push(list.get(i));
    }
  }
}

module.exports = { ListOnArrays };
