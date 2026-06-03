import type { Edge } from "../edges/edge.abstract";
import type { Node } from "../nodes/node.abstract";

export abstract class Graph<T> {
    protected edges: Array<Edge<T>> = []

    public addEdge(edge: Edge<T>):void {
        if (this.edges.some((v) => v.isSame(edge))) return;
        this.edges.push(edge);
    }

    public deleteEdge(): void{}

    public getListEdges(): Array<Edge<T>>{
        return this.edges
    }

    public getAllNodes(): Array<Array<Node<T>>>{
        return this.edges.map((v) => v.getNodes())
    }

    public getAllNodesFlatted(): Array<Node<T>>{
        const nodeSet = new Set<Node<T>>();
        this.edges.forEach((v) => v.getNodes().forEach(v => nodeSet.add(v)))
        return Array.from(nodeSet)
    }
}