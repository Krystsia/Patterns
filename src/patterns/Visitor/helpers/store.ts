import {ShapeEnum} from "../constants/ShapeEnum";
import {Store} from "../classes/Store";
import {IStore} from "../interfaces/Store";

let store: IStore = {} as IStore;
const resultElement = document.createElement('ul');
resultElement.className = 'list-group result'


export const createStore = (shapeTypes: Array<ShapeEnum>): void => {
  store = new Store(shapeTypes);
  document.body.appendChild(resultElement);
}

export const putToStore = (type: ShapeEnum, value: any): void => {
  store.modified[type].result = value;
  checkResult(type)
}

const checkResult = (type: ShapeEnum) => {
  resultElement.innerHTML = (resultElement.innerHTML || '') + `
    <li class="list-group-item">${ShapeEnum[type]} ..............................  ${getFromStore(type)}</li>`;
}

export const getFromStore = (prop: ShapeEnum): any => store.modified[prop].result;
