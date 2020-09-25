import {createStore} from "./helpers/store";
import {ShapeEnum} from "./constants/ShapeEnum";
import {Circle} from "./classes/Cirlcle";
import {Square} from "./classes/Square";
import {Triangle} from "./classes/Triangle";
import {Visitor} from "./classes/Visitor";

export const VisitorComponent = {
  getView: function() {
    createStore([ShapeEnum.Circle, ShapeEnum.Square, ShapeEnum.Triangle]);
    const circle = new Circle(22);
    const square = new Square(44);
    const triangle = new Triangle(12,13,15, 3);
    const visitor = new Visitor();

    const visitorContainer = document.createElement('div');
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.innerText = 'Запустить посетителя';
    button.addEventListener('click', () => visitor.run([circle, square, triangle]))
    visitorContainer.className = 'col-12';
    visitorContainer.innerHTML = '<p>Паттерн посетитель - это поведенческий паттерн проектирования, который позволяет добавлять операции над объектами классов не изменяя при этом сами классы.\n' +
      '\n' +
      'Использование\n' +
      '\n' +
      '\t1. Когда нужно выполнить какую-то операцию над всеми элементами сложной системы например дерева. Посетитель позволяет применить одну и ту же операцию на объектами различных классов\n' +
      '\t2. Когда над объектами сложной структуры необходимо выполнить разные не связанные между собой операции, но не хочется засорять структуру самих классов.\n' +
      '\t3. Когда нужно произвести операцию не над всеми объектами сложной структуры.\n</p> ';

    visitorContainer.appendChild(button);


    return visitorContainer;
  }
}
