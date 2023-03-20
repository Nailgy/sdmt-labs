"use strict";

const { SinglyLinkedCircList } = require("./main.js");

describe("length()", () => {
  let list;
  beforeEach(() => {
    list = new SinglyLinkedCircList();
  });

  test("Length of empty list is 0", () => {
    expect(list.length()).toEqual(0);
  });

  test("Length of list with 1 element is 1", () => {
    list.append("a");

    expect(list.length()).toEqual(1);
  });

  test("Length of list is equal to the number of nodes in it", () => {
    list.append("a");
    list.append("b");
    list.append("c");
    list.append("d");

    expect(list.length()).toEqual(4);
  });
});

describe("append()", () => {
  let list;
  beforeEach(() => {
    list = new SinglyLinkedCircList();
  });

  test("Appending a new node to an empty list", () => {
    list.append("a");

    expect(list.get(0)).toBe("a");
    expect(list.length()).toBe(1);
  });

  test("Appending a new node to a non-empty list", () => {
    list.append("a");
    list.append("b");

    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.length()).toBe(2);
  });

  test("Not appending a new node to an empty list with incorrect data type", () => {
    const checkBadString = () => list.append("abc");
    const checkNum = () => list.append(8);
    const checkBool = () => list.append(true);
    const checkNull = () => list.append(null);
    const checkUndef = () => list.append(undefined);
    const checkArr = () => list.append(["1", "2"]);
    const checkObj = () => list.append({ a: "b" });

    expect(checkBadString).toThrow(
      "Error. Wrong input type. Expected type string of length 1"
    );
    expect(checkNum).toThrow(
      "Error. Wrong input type. Expected type string of length 1"
    );
    expect(checkBool).toThrow(
      "Error. Wrong input type. Expected type string of length 1"
    );
    expect(checkNull).toThrow(
      "Error. Wrong input type. Expected type string of length 1"
    );
    expect(checkUndef).toThrow(
      "Error. Wrong input type. Expected type string of length 1"
    );
    expect(checkArr).toThrow(
      "Error. Wrong input type. Expected type string of length 1"
    );
    expect(checkObj).toThrow(
      "Error. Wrong input type. Expected type string of length 1"
    );
    expect(list.length()).toBe(0);
  });
});

describe("insert()", () => {
  let list;
  beforeEach(() => {
    list = new SinglyLinkedCircList();
  });

  test("Inserting element in the empty list", () => {
    list.insert("a", 0);

    expect(list.get(0)).toBe("a");
    expect(list.length()).toBe(1);
  });

  test("Inserting element at the beginning of a non-empty list", () => {
    list.append("a");
    list.insert("b", 0);

    expect(list.get(0)).toBe("b");
    expect(list.get(1)).toBe("a");
    expect(list.length()).toBe(2);
  });

  test("Inserting element at the end of a non-empty list", () => {
    list.append("a");
    list.insert("b", 1);

    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.length()).toBe(2);
  });

  test("Inserting element in the middle of a non-empty list", () => {
    list.append("a");
    list.append("b");
    list.insert("c", 1);

    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("c");
    expect(list.get(2)).toBe("b");
    expect(list.length()).toBe(3);
  });

  test("Not inserting element on negative index", () => {
    const checkNegIndex = () => list.insert("b", -1);

    expect(checkNegIndex).toThrow("Error. Index out of range");
  });

  test("Not inserting element on index greater than the length of the list", () => {
    const checkBigIndex = () => list.insert("a", 10);

    expect(checkBigIndex).toThrow("Error. Index out of range");
  });

  test("Not inserting element with invalid data type to the begining of the list", () => {
    const checkBadString = () => list.insert("32", 0);
    const checkNum = () => list.insert(1, 0);
    const checkBool = () => list.insert(true, 0);
    const checkNull = () => list.insert(null, 0);
    const checkUndef = () => list.insert(undefined, 0);
    const checkArr = () => list.insert(["1", "2"], 0);
    const checkObj = () => list.insert({ a: 1 }, 0);

    expect(checkBadString).toThrow(
      "Error. Wrong input type. Expected type string of length 1"
    );
    expect(checkNum).toThrow(
      "Error. Wrong input type. Expected type string of length 1"
    );
    expect(checkBool).toThrow(
      "Error. Wrong input type. Expected type string of length 1"
    );
    expect(checkNull).toThrow(
      "Error. Wrong input type. Expected type string of length 1"
    );
    expect(checkUndef).toThrow(
      "Error. Wrong input type. Expected type string of length 1"
    );
    expect(checkArr).toThrow(
      "Error. Wrong input type. Expected type string of length 1"
    );
    expect(checkObj).toThrow(
      "Error. Wrong input type. Expected type string of length 1"
    );
    expect(list.length()).toBe(0);
  });
});

describe("delete())", () => {
  let list;
  beforeEach(() => {
    list = new SinglyLinkedCircList();
    list.append("a");
    list.append("b");
    list.append("c");
  });

  test("Return an empty list on deleting every node", () => {
    list.delete(0);
    list.delete(0);
    list.delete(0);

    expect(list.length()).toBe(0);
  });

  test("Deleting the node element", () => {
    const deleted = list.delete(0);

    expect(deleted).toBe("a");
    expect(list.get(0)).toBe("b");
    expect(list.get(1)).toBe("c");
    expect(list.length()).toBe(2);
  });

  test("Deleting the node element", () => {
    const deleted = list.delete(2);

    expect(deleted).toBe("c");
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.length()).toBe(2);
  });

  test("Deleting the node inside the list", () => {
    const deleted = list.delete(1);

    expect(deleted).toBe("b");
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("c");
    expect(list.length()).toBe(2);
  });

  test("Not deleting node if index is negative ", () => {
    const checkNegIndex = () => list.delete(-1);

    expect(checkNegIndex).toThrow("Error. Index out of range");
    expect(list.length()).toBe(3);
  });

  test("Not deleting node if index is out of range", () => {
    const checkBigIndex = () => list.delete(3);

    expect(checkBigIndex).toThrow("Error. Index out of range");
    expect(list.length()).toBe(3);
  });
});

describe("deleteAll", () => {
  let list;
  beforeEach(() => {
    list = new SinglyLinkedCircList();
  });

  test("Deleting all the nodes with matching element", () => {
    list.append("a");
    list.append("b");
    list.append("c");
    list.append("a");
    list.append("b");

    list.deleteAll("a");

    expect(list.length()).toBe(3);
    expect(list.get(0)).toBe("b");
    expect(list.get(1)).toBe("c");
    expect(list.get(2)).toBe("b");
  });

  test("Deleting all the nodes when every element in list is matching", () => {
    list.append("a");
    list.append("a");
    list.append("a");
    list.deleteAll("a");

    expect(list.length()).toBe(0);
  });

  test("No effect when the list is empty", () => {
    list.deleteAll("a");

    expect(list.length()).toBe(0);
  });

  test("No effect when there is no matching elements in list", () => {
    list.append("a");
    list.append("b");
    list.append("c");
    list.deleteAll("x");

    expect(list.length()).toBe(3);
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("c");
  });
});

describe("get()", () => {
  let list;
  beforeEach(() => {
    list = new SinglyLinkedCircList();
    list.append("a");
    list.append("b");
    list.append("c");
  });

  test("Returning the element by it's index", () => {
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("c");
  });

  test("Error on negative index", () => {
    const checkNegIndex = () => list.get(-1);

    expect(checkNegIndex).toThrow("Error. Index out of range");
  });

  test("Error on index that is >= length of the list", () => {
    const checkBigIndex = () => list.get(3);

    expect(checkBigIndex).toThrow("Error. Index out of range");
  });
});

describe("clone()", () => {
  test("Returning a new list which has the same elements", () => {
    const list = new SinglyLinkedCircList();
    list.append("a");
    list.append("b");
    list.append("c");
    const clonedList = list.clone();

    expect(clonedList.length()).toEqual(3);
    expect(clonedList.get(0)).toEqual("a");
    expect(clonedList.get(1)).toEqual("b");
    expect(clonedList.get(2)).toEqual("c");
  });

  test("Cloned list must not affect original one", () => {
    const list = new SinglyLinkedCircList();
    list.append("a");
    list.append("b");
    list.append("c");
    const clonedList = list.clone();
    clonedList.delete(0);

    expect(clonedList.length()).toEqual(2);
    expect(list.length()).toEqual(3);
  });

  test("Returning an empty list if cloning from empty", () => {
    const list = new SinglyLinkedCircList();
    const clonedList = list.clone();

    expect(clonedList.length()).toEqual(0);
  });
});

describe("reverse()", () => {
  let list;
  beforeEach(() => {
    list = new SinglyLinkedCircList();
  });

  test("Returning reversed list", () => {
    list.append("a");
    list.append("b");
    list.append("c");
    list.append("d");
    list.reverse();

    expect(list.get(0)).toEqual("d");
    expect(list.get(1)).toEqual("c");
    expect(list.get(2)).toEqual("b");
    expect(list.get(3)).toEqual("a");
  });

  test("Returning the same list if there is only 1 node", () => {
    list.append("a");
    list.reverse();

    expect(list.get(0)).toEqual("a");
  });

  test("Error on reversing the empty list", () => {
    const checkEmpty = () => list.reverse();

    expect(checkEmpty).toThrow("Error. The list is empty");
  });
});

describe("findFirst()", () => {
  let list;
  beforeEach(() => {
    list = new SinglyLinkedCircList();
  });

  test("Returning index of the first occurrence of an element", () => {
    list.append("a");
    list.append("b");
    list.append("c");
    list.append("a");
    list.append("d");

    expect(list.findFirst("a")).toEqual(0);
    expect(list.findFirst("b")).toEqual(1);
    expect(list.findFirst("c")).toEqual(2);
    expect(list.findFirst("d")).toEqual(4);
  });

  test("Returning -1 if the element has been not found", () => {
    list.append("a");
    list.append("b");
    list.append("c");

    expect(list.findFirst("x")).toEqual(-1);
  });

  test("Returning -1 if the list is empty", () => {
    expect(list.findFirst("a")).toBe(-1);
  });
});

describe("findLast()", () => {
  let list;
  beforeEach(() => {
    list = new SinglyLinkedCircList();
  });

  test("must return the index of the last occurrence of the element", () => {
    list.append("a");
    list.append("b");
    list.append("c");
    list.append("a");
    list.append("d");

    expect(list.findLast("a")).toEqual(3);
    expect(list.findLast("b")).toEqual(1);
    expect(list.findLast("c")).toEqual(2);
    expect(list.findLast("d")).toEqual(4);
  });

  test("Returning -1 if the element has been not found", () => {
    list.append("a");
    list.append("b");
    list.append("c");

    expect(list.findLast("x")).toEqual(-1);
  });

  test("Returning -1 if the list is empty", () => {
    expect(list.findLast("a")).toBe(-1);
  });
});

describe("clear()", () => {
  let list;
  beforeEach(() => {
    list = new SinglyLinkedCircList();
  });

  test("Removing all elements from list", () => {
    list.append("a");
    list.append("b");
    list.append("c");
    list.clear();

    expect(list.length()).toBe(0);
  });

  test("Removing all elements from an empty list", () => {
    list.clear();

    expect(list.length()).toBe(0);
  });
});

describe("extend()", () => {
  test("Adding all elements of the given list to the end of first list", () => {
    const list1 = new SinglyLinkedCircList();
    list1.append("a");
    list1.append("b");
    const list2 = new SinglyLinkedCircList();
    list2.append("c");
    list2.append("d");
    list1.extend(list2);

    expect(list1.get(0)).toEqual("a");
    expect(list1.get(1)).toEqual("b");
    expect(list1.get(2)).toEqual("c");
    expect(list1.get(3)).toEqual("d");
    expect(list1.length()).toEqual(4);
  });

  test("No effect if given list is empty", () => {
    const list1 = new SinglyLinkedCircList();
    list1.append("a");
    list1.append("b");
    const list2 = new SinglyLinkedCircList();
    list1.extend(list2);

    expect(list1.length()).toEqual(2);
    expect(list1.get(0)).toEqual("a");
    expect(list1.get(1)).toEqual("b");
  });
});
