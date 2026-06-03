import { GraphNode } from "./GraphNode";

export class Edge {
    constructor(
        private origin: GraphNode,
        private destiny: GraphNode,
        private weight: number
    ) {}

    getOrigin(): GraphNode {
        return this.origin;
    }

    getDestiny(): GraphNode {
        return this.destiny;
    }

    getWeight(): number {
        return this.weight;
    }
}