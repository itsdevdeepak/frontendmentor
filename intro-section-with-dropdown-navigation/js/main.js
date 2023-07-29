const elHamburger = document.querySelector(".hamburger");
const elNavigation = document.querySelector(".navigation");
const dropdownButtons = document.querySelectorAll(".dropdown_button");
const ARIA_EXPANDED = "aria-expanded";

const toggleAttributeValue = (element, property) => {
  const isAttributeTrue = element.getAttribute(property) === "true";
  element.setAttribute(property, !isAttributeTrue);
};

// Navigation section
elHamburger.addEventListener("click", (event) => {
  toggleAttributeValue(elHamburger, ARIA_EXPANDED);
  event.stopPropagation();
});

elNavigation.addEventListener("click", (event) => {
  event.stopPropagation();
});


// Dropdown section
let activeDropdownBtn = false;

for (let dropdownButton of dropdownButtons) {
  dropdownButton.addEventListener("click", (event) => {
    const currentDropdownBtn = event.target;

    if (activeDropdownBtn && activeDropdownBtn !== currentDropdownBtn) {
      activeDropdownBtn.setAttribute(ARIA_EXPANDED, false);
    }

    toggleAttributeValue(currentDropdownBtn, ARIA_EXPANDED);
    activeDropdownBtn = currentDropdownBtn;
  });

  // dropdown button and menu container
  dropdownButton.parentElement.addEventListener("click", (event) => {
    event.stopPropagation();
  });
}


// Document events
document.addEventListener("keyup", (event) => {
  if (event.key === "Escape") {
    elHamburger.setAttribute(ARIA_EXPANDED, false);

    if (activeDropdownBtn) {
      activeDropdownBtn.setAttribute(ARIA_EXPANDED, false);
    }
  }
});

document.addEventListener("click", () => {
  elHamburger.setAttribute(ARIA_EXPANDED, false);

  if (activeDropdownBtn) {
    activeDropdownBtn.setAttribute(ARIA_EXPANDED, false);
  }
});
