import {ISquare} from "../interfaces/Square";
import {IVisitor} from "../interfaces/Visitor";

export class Square implements ISquare {
  side: number;
  element: HTMLElement;


  constructor(side: number) {
    this.side = side;
    this.element = document.createElement('div');
    this.element.style.cssText = `
      width: ${this.side}px;
      height: ${this.side}px;
      background: red;
      margin-right: 12px;
    `;
  }

  access(visitor: IVisitor) {
    visitor.getSquare(this);
  }

  paint() {
    const container: HTMLElement = document.querySelector('.result');
    container.appendChild(this.element);
  }
}
