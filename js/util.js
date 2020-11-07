

// DOM utilities

// export function createElement(parentId, element, id, className) {
//   let parentElement = document.getElementById(parentId);
//   let newElement = document.createElement(element);
//   newElement.setAttribute("id", id);  
//   if (className)
//     newElement.setAttribute("class", className);
//   parentElement.appendChild(newElement);
// }

export function createElement(parentId, element, id, options = {}) {
  let parentElement = document.getElementById(parentId);
  let newElement = document.createElement(element);
  newElement.setAttribute("id", id);  
  if (options.className)
    newElement.setAttribute("class", options.className);
  if (options.callback)
    newElement.onclick = options.callback;
  parentElement.appendChild(newElement);
  return newElement;
}

export function createButton(parentId, buttonId, buttonText, options = {}) {
  let newButton = createElement(parentId, "BUTTON", buttonId, options);
  let text = document.createTextNode(buttonText);
  newButton.appendChild(text);
}

export function removeElement(id) {
  let element = document.getElementById(id);
  element.parentNode.removeChild(element);
}

// DSA utilities

export class Queue {
  constructor () {
    this.queueStart = 0
    this.queueLength = 0
    this.arr = [];
  }

  enqueque(q) {
    this.arr.push(q);
    this.queueLength++;
  }

  dequeque() {
    this.queueLength--;
    this.queueStart++;
    return this.arr[this.queueStart-1];
  }

  length() {
    return this.queueLength;
  }
}