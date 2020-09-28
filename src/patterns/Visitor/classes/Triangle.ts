import {IVisitor} from "../interfaces/Visitor";
import {ITriangle} from "../interfaces/Triangle";

export class Triangle implements ITriangle {
  height: number;
  element: HTMLElement;

  constructor(height: number) {
    this.height = height;
    this.element = document.createElement('div');
    this.element.style.cssText = `
      width: 0;
      height: 0;
      border-width: ${this.height}px;
      border-color: transparent transparent red transparent;
      border-style: solid;
    `;
  }

  access(visitor: IVisitor) {
    visitor.getTriangle(this);
  }

  paint() {


    const container: HTMLElement = document.querySelector('.result');
    container.appendChild(this.element);
  }
}
