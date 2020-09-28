import {ICircle} from "../interfaces/Cirlcle";
import {IVisitor} from "../interfaces/Visitor";

export class Circle implements ICircle {
  radius: number;
  element: HTMLElement;

  constructor(radius: number) {
    this.radius = radius;
    this.element = document.createElement('div');
    this.element.style.cssText = `
      width: ${this.radius * 2}px;
      height: ${this.radius * 2}px;
      border-radius: 50%;
      background: red;
    `;
  }

  access(visitor: IVisitor) {
    visitor.getCircle(this);
  }

  paint() {
    const container: HTMLElement = document.querySelector('.result');
    container.appendChild(this.element);
  }
}
