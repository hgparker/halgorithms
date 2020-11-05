


export function createButton(parentId, buttonText, buttonCallback) {
  let parentElement = document.getElementById(parentId);
  let newButton = document.createElement("BUTTON");
  let text = document.createTextNode(buttonText);
  newButton.appendChild(text);
  newButton.onclick = buttonCallback;
  parentElement.appendChild(newButton);
}

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