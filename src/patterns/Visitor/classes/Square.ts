import {ISquare} from "../interfaces/Square";
import {IVisitor} from "../interfaces/Visitor";

export class Square implements ISquare {
  side: number;

  constructor(side: number) {
    this.side = side;
  }

  access(visitor: IVisitor) {
    visitor.getSquare(this);
  }
}
