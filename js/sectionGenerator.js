import elements from "./base.js";

import pratosIndividuais from "./menu-sections/pratosIndividuais.js";
import pratosPara2 from "./menu-sections/pratosPara2.js";

import porcoesTradicionais from "./menu-sections/porcoesTradicionais.js";
import porcoesNaBrasa from "./menu-sections/porcoesNaBrasa.js";
import lanches from "./menu-sections/lanches.js";

import bebidasNaoAlcoolicas from "./menu-sections/bebidasNaoAlcoolicas.js";
import caipirinhas from "./menu-sections/caipirinha.js";
import cervejas from "./menu-sections/cervejas.js";
import drinks from "./menu-sections/drinks.js";
import doses from "./menu-sections/doses.js";
import combos from "./menu-sections/combos.js";

const renderSection = (sectionsTargetName, menuSection) => {
  elements.sectionTitle.innerHTML = sectionsTargetName;

  const html = menuSection;

  document.getElementById("section-removable").remove();

  elements.section.insertAdjacentHTML("beforeend", html);
};

const sectionGenerator = {
  pratosIndividuais: (sectionsTargetName) => {
    renderSection(sectionsTargetName, pratosIndividuais);
  },

  pratosPara2: (sectionsTargetName) => {
    renderSection(sectionsTargetName, pratosPara2);
  },

  porcoesTradicionais: (sectionsTargetName) => {
    renderSection(sectionsTargetName, porcoesTradicionais);
  },

  porcoesNaBrasa: (sectionsTargetName) => {
    renderSection(sectionsTargetName, porcoesNaBrasa);
  },

  lanches: (sectionsTargetName) => {
    renderSection(sectionsTargetName, lanches);
  },

  bebidasNaoAlcoolicas: (sectionsTargetName) => {
    renderSection(sectionsTargetName, bebidasNaoAlcoolicas);
  },

  cervejas: (sectionsTargetName) => {
    renderSection(sectionsTargetName, cervejas);
  },

  caipirinhas: (sectionsTargetName) => {
    renderSection(sectionsTargetName, caipirinhas);
  },
  drinks: (sectionsTargetName) => {
    renderSection(sectionsTargetName, drinks);
  },
  doses: (sectionsTargetName) => {
    renderSection(sectionsTargetName, doses);
  },

  combos: (sectionsTargetName) => {
    renderSection(sectionsTargetName, combos);
  },
};

export default sectionGenerator;
