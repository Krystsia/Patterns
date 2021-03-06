import {IVisitor} from "../interfaces/Visitor";
import {ICircle} from "../interfaces/Cirlcle";
import {ISquare} from "../interfaces/Square";
import {ITriangle} from "../interfaces/Triangle";
import {putToStore} from "../helpers/store";
import {ShapeEnum} from "../constants/ShapeEnum";
import {IShape} from "../interfaces/Shape";

export class Visitor implements IVisitor {
  getCircle(circle: ICircle) {
    const {radius} = circle;
    putToStore(ShapeEnum.Circle, radius ** 2 * Math.PI);
  }

  getSquare(square: ISquare) {
    const {side} = square;
    putToStore(ShapeEnum.Square, side ** 2);
  }

  getTriangle(triangle: ITriangle) {
    const {height} = triangle;
    putToStore(ShapeEnum.Triangle, height * 4);
  }

  run(hosts: Array<IShape>) {
    hosts.forEach(instance => instance.access(this))
  }
}

