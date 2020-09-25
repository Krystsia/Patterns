import {ICircle} from "../interfaces/Cirlcle";
import {IVisitor} from "../interfaces/Visitor";

export class Circle implements ICircle {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  access(visitor: IVisitor) {
    visitor.getCircle(this);
  }
}
