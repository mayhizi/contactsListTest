import { SEARCH_ID } from "../mocks/constants.js";

export const searchInputHandler = () => {
  const contactNames = document.querySelectorAll(".contactName");
  const searchValue = document.getElementById(SEARCH_ID).value;
  contactNames.forEach(function (node) {
    const regexp = new RegExp(searchValue.toLowerCase());
    if (regexp.test(node.innerText.toLowerCase())) {
      node.setAttribute("class", "contactName");
    } else {
      node.setAttribute("class", "hidden contactName");
    }
  });
};
