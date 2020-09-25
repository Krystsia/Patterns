import { VisitorComponent } from "./patterns/Visitor";


document.addEventListener('DOMContentLoaded', () => {
  const container: HTMLBodyElement = document.querySelector('.app');
  const mainElement: HTMLDivElement = document.createElement('div');
  mainElement.className = 'container row';
  mainElement.innerHTML = '<h1 class="col-12">Посетитель!!!</h1>'
  container.appendChild(mainElement);
  container.appendChild(VisitorComponent.getView())
})
