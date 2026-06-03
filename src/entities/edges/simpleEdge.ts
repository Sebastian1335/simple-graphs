import { Edge } from "./edge.abstract";
import type { Node } from "../nodes/node.abstract";

export class SimpleEdge<T> extends Edge<T> {
    constructor(
        origin: Node<T>,
        destiny: Node<T>,
    ){
        super(origin, destiny)
    }
}