import { Edge } from "./edge.abstract";
import type { Node } from "../nodes/node.abstract";

export class WeightedEdge<T> extends Edge<T> {
    constructor(
        origin: Node<T>,
        destiny: Node<T>,
        private weigth: number
    ){
        super(origin, destiny)
        this.weigth = weigth
    }
    
    public getWeight() : number {
        return this.weigth
    }

    public setWeight(weight: number): void {
        this.weigth = weight;
    }
}