import { Edge } from "./Edge";

export class GraphNode {
    constructor(
        private value: String,
        private neighbours: Edge[]
    ) {}

    getNeighbours(): Edge[] {
        return this.neighbours;
    }

    getNearestNeighbour(): GraphNode | null {
        const firstEdge = this.neighbours[0];

        if (!firstEdge) {
            return null;
        }

        let nearest : Edge = firstEdge;

        this.neighbours.forEach(edge => {
            if(edge.getWeight() < nearest.getWeight()){
                nearest = edge;
            }
        })

        return nearest.getDestiny();
    }
    
}