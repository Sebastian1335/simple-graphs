import {describe, expect, test} from "bun:test"
import { BasicNode } from "../../../src/entities/nodes/basicNode";

describe("Basic Node class test", () => {
  
  const value = "hola"
  const basicNode = new BasicNode<string>(value)

  test("NodeId must be string", () => {
    
    const id = basicNode.getId()
    expect(id).toBeString()
  });

  test("value of Node", () => {
    const nodeValue = basicNode.getItem()
    expect(nodeValue).toBe(value);
  });

  test("Set new value of Node", () => {
    const newValue = "nuevo valor";
    basicNode.setItem(newValue);
    const newNodeValue = basicNode.getItem()
    expect(newNodeValue).toBe(newValue)
  })
});
