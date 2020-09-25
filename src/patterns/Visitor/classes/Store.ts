import {IStore} from "../interfaces/Store";
import {ShapeEnum} from "../constants/ShapeEnum";

export class Store implements IStore {
  modified = new Array;

  constructor(shapeTypes: Array<ShapeEnum>) {
    shapeTypes.forEach(type => this.modified[type] = {type: type, result: null})
  }
}
