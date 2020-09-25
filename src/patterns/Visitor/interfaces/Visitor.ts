import {ICircle} from "./Cirlcle";
import {ITriangle} from "./Triangle";
import {ISquare} from "./Square";
import {IShape} from "./Shape";

export interface IVisitor {
  getCircle: (circle: ICircle) => void;
  getTriangle: (triangle: ITriangle) => void;
  getSquare: (square: ISquare) => void;
  run: (hosts: Array<IShape>) => void;
}
