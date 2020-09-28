import {createStore} from "./helpers/store";
import {ShapeEnum} from "./constants/ShapeEnum";
import {Circle} from "./classes/Cirlcle";
import {Square} from "./classes/Square";
import {Triangle} from "./classes/Triangle";
import {Visitor} from "./classes/Visitor";
import {VisitorPainter} from "./classes/VisitorPainter";


export const VisitorComponent = {
  getView: function() {
    let color: string = 'red';

    createStore([ShapeEnum.Circle, ShapeEnum.Square, ShapeEnum.Triangle]);
    const circle = new Circle(22);
    const square = new Square(44);
    const triangle = new Triangle(12);

    circle.paint();
    square.paint();
    triangle.paint();

    const visitor = new Visitor();
    const visitorContainer = document.createElement('div');
    const inputColor = document.createElement('input');

    inputColor.className = 'form-control';
    inputColor.style.marginTop = '10px';
    inputColor.addEventListener('mouseleave', (event) => color = (<HTMLInputElement>event.target).value);

    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.innerText = 'Запустить посетителя';
    button.addEventListener('click', () => visitor.run([circle, square, triangle]))

    const buttonVisitorPainter = document.createElement('button');
    buttonVisitorPainter.className = 'btn btn-primary';
    buttonVisitorPainter.style.marginLeft = '10px';
    buttonVisitorPainter.innerText = 'Запустить посетителя перекрашивателя'
    buttonVisitorPainter.addEventListener('click', () => {
      const visitorPainter = new VisitorPainter(color)
      visitorPainter.run([circle, square, triangle])
    });

    visitorContainer.className = 'col-12 visitor-header';
    visitorContainer.innerHTML = '<p>Паттерн посетитель - это поведенческий паттерн проектирования, который позволяет добавлять операции над объектами классов не изменяя при этом сами классы.\n' +
      '\n' +
      'Использование\n' +
      '\n' +
      '\t1. Когда нужно выполнить какую-то операцию над всеми элементами сложной системы например дерева. Посетитель позволяет применить одну и ту же операцию на объектами различных классов\n' +
      '\t2. Когда над объектами сложной структуры необходимо выполнить разные не связанные между собой операции, но не хочется засорять структуру самих классов.\n' +
      '\t3. Когда нужно произвести операцию не над всеми объектами сложной структуры.\n</p> ';

    const fragment: DocumentFragment = document.createDocumentFragment();
    fragment.appendChild(button);
    fragment.appendChild(buttonVisitorPainter);
    fragment.appendChild(inputColor);
    visitorContainer.appendChild(fragment);

    return visitorContainer;
  }
}
