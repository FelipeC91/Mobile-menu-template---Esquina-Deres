import elements from "./base.js";
import sectionGenerator from "./sectionGenerator.js";

const toggleMenu = (e) => {
  elements.sectionMenuIcon.style.transitionDuration = ".2s";

  showMenu();
  elements.logoImg.style.width = "20vw";

  elements.section.style.animation = `slideLeft 550ms ease-out`;
  elements.section.style.animationFillMode = "forwards";
};

const hideMenu = () => {
  elements.section.style.display = "block";

  const childs = elements.menu.querySelectorAll(".menu > *");

  for (let i = 0; i < childs.length; i++) {
    childs[i].style.animation = `slideout .${i + 2}s ease-in-out`;
    childs[i].style.animationFillMode = "forwards";
  }

  elements.sectionMenu.style.width = "15vw";

  elements.sectionMenuIcon.style.transitionDuration = "1s";
  elements.sectionMenuIcon.style.opacity = "0.6";

  elements.floatIcon.style.transitionDuration = "1.3s";
  elements.floatIcon.style.display = "block";
};

const showMenu = () => {
  elements.sectionMenu.style.width = "80vw";

  elements.sectionMenuIcon.style.opacity = "0";

  elements.floatIcon.style.transitionDuration = ".1s";
  elements.floatIcon.style.display = "none";
  elements.section.style.display = "none    ";

  const childs = elements.menu.querySelectorAll(".menu > *");

  for (let i = 0; i < childs.length; i++) {
    childs[i].style.animation = `slidein .${i + 2}s ease-in-out`;
    childs[i].style.animationFillMode = "forwards";
  }
};

const renderSection = (sectionsTargetName, functionName) => {
  const test = sectionGenerator[functionName];
  console.log(test);
  test(sectionsTargetName);
  elements.section.style.animation = `slideRight .9s ease-in`;
  elements.section.style.animationFillMode = "forwards";
};

//######ATTACH EVENTS######
elements.sectionsTarget.forEach((element) => {
  element.addEventListener("click", (e) => {
    hideMenu();

    elements.sectionMenuIcon.style.transitionDuration = ".1s";

    elements.logoImg.style.width = "16rem";
    let name = e.target.innerHTML;
    let functionName = e.target.getAttribute("data-function-name");

    renderSection(name, functionName);
    elements.sectionMenuIcon.addEventListener("click", toggleMenu);
  });
});

elements.sectionMenuIcon.addEventListener("click", toggleMenu);
