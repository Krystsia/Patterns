import {IVisitor} from "../interfaces/Visitor";
import {ICircle} from "../interfaces/Cirlcle";
import {ISquare} from "../interfaces/Square";
import {ITriangle} from "../interfaces/Triangle";
import {IShape} from "../interfaces/Shape";

export class VisitorPainter implements IVisitor {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  getCircle(circle: ICircle) {
    circle.element.style.backgroundColor = this.color;
  }

  getSquare(square: ISquare) {
    square.element.style.backgroundColor = this.color;
  }

  getTriangle(triangle: ITriangle) {
    triangle.element.style.borderBottomColor = this.color;
  }

  run(hosts: Array<IShape>) {
    hosts.forEach(instance => instance.access(this))
  }
}

