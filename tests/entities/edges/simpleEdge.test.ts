import { describe, expect, test } from 'bun:test';
import { SimpleEdge } from '../../../src/entities/edges/simpleEdge';
import { BasicNode } from '../../../src/entities/nodes/basicNode';
describe("simpleEdge class testing", () => {
    const nodeOrigin = new BasicNode("Hola");
    const nodeDestiny = new BasicNode("Adios");
    const simpleEdge = new SimpleEdge(nodeOrigin, nodeDestiny)
    test("An edge must hace two nodes", () => {
        const nodes = simpleEdge.getNodes()
        expect(nodes).toBeArrayOfSize(2)
    })
})