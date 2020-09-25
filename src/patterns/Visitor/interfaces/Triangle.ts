import {IShape} from "./Shape";

export interface ITriangle extends IShape {
  side1: number;
  side2: number;
  side3: number;
  radius: number;
}
