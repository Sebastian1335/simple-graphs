import { randomUUIDv7 } from "bun";

export abstract class Node<T> {
    protected item: T;
    protected id: string;
    constructor(
        item: T
    ){
        this.item = item;
        this.id = randomUUIDv7()
    }
    
    public getItem() : T {
        return this.item;
    }

    public getId() : string {
        return this.id;
    }

    public setItem(v: T) {
        this.item = v;
    }   
}