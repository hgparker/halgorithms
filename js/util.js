


export function createButton(parentId, buttonText, buttonCallback) {
  let parentElement = document.getElementById(parentId);
  let newButton = document.createElement("BUTTON");
  let text = document.createTextNode(buttonText);
  newButton.appendChild(text);
  newButton.onclick = buttonCallback;
  parentElement.appendChild(newButton);
}