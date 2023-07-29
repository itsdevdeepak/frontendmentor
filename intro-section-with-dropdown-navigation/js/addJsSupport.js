const noJsElements = document.querySelectorAll(".no-js");
const dropdownButtons = document.querySelectorAll(".dropdown_button");

const removerNoJsClass = (elementCollection) => {
  for (let element of elementCollection) {
    element.classList.remove("no-js");
  }
}

const turnIntoButtons = (elementCollection) => {
  for (let element of elementCollection) {
    const button = document.createElement("button");
    button.classList = element.classList;
    button.replaceChildren(element.innerHTML);
    element.replaceWith(button);
  }
}

removerNoJsClass(noJsElements);
turnIntoButtons(dropdownButtons);