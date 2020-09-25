import {IVisitor} from "./Visitor";

export interface IShape {
  access: (visitor: IVisitor) => void;
}
