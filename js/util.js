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

export class PriorityQueue {
 constructor(cb) {
   this.arr = [[-999, -999]]
   this.cb = cb;
 }

length() {
   return this.arr.length-1;
}

lastIndex() {
  return this.length();
}

add(element) {
  this.arr.push(element);
  this.swim(this.lastIndex());
}

swim(index) {
  while (Math.floor(index/2) > 0 && this.cb(this.arr[Math.floor(index/2)], this.arr[index]) == 1) {
    this.swap(Math.floor(index/2), index);
    index = Math.floor(index/2);
  }
}
 
pop() {
  if (this.length() == 0)
    return;
  let retElement = this.arr[1];
  let index = 1;
  while (2*index <= this.lastIndex()) {
    let left = 2*index;
    let right = 2*index+1;
    if (right <= this.lastIndex() && this.cb(this.arr[right], this.arr[left]) == -1) {
      this.arr[index] = this.arr[right];
      index = right;
    } else {
      this.arr[index] = this.arr[left];
      index = left;
    }
  }
  if (index != this.lastIndex()) {
    this.swap(index, this.lastIndex());
    this.swim(index);
  }
  this.arr.pop();
  return retElement;
} 

  swap(a, b) {
  let temp = this.arr[a];
  this.arr[a] = this.arr[b];
  this.arr[b] = temp;
  }
}

export function deepDup(arr) {
  if (!(arr instanceof Array))
    return arr
  return arr.map(ele => deepDup(ele));
}