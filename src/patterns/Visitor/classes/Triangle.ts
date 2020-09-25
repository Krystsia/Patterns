import {IVisitor} from "../interfaces/Visitor";
import {ITriangle} from "../interfaces/Triangle";

export class Triangle implements ITriangle {
  side1: number;
  side2: number;
  side3: number;
  radius: number;

  constructor(side1: number, side2: number, side3: number, radius: number) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.radius = radius;
  }

  access(visitor: IVisitor) {
    visitor.getTriangle(this);
  }
}
