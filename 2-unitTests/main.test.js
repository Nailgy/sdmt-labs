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
