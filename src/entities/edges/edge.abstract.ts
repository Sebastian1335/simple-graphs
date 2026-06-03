import type { Node } from "../nodes/node.abstract"

export abstract class Edge<T> {
    protected origin: Node<T>
    protected destiny: Node<T>

    constructor(origin: Node<T>, destiny: Node<T>){
        this.origin = origin
        this.destiny = destiny
    }

    public isSame(edge: Edge<T>): boolean{
        const response = this.getOriginId() === edge.getOriginId() && this.getDestinyId() === edge.getDestinyId()
        return response
    }

    public getOrigin() : Node<T> {
        return this.origin 
    }

    public getOriginId() : string {
        return this.origin.getId()
    }

    public getDestiny() : Node<T> {
        return this.destiny 
    }

    public getDestinyId() : String {
        return this.destiny.getId()
    }

    public getNodes(): [Node<T>, Node<T>]{
        return [this.origin, this.destiny]
    }
}