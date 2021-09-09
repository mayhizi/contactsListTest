import { contacts } from "../mocks/contacts.js";

export const CONTACT_FILTER_ID = "contactFilter";

export const contactFilterOnClickHandler = (e) => {
    const contactNames = document.querySelectorAll(".contactName");
    if (e.currentTarget.innerText === "Show all") {
      e.currentTarget.innerText = "Filter favorites";
      contactNames.forEach(function (node, i) {
        node.setAttribute("class", "contactName");
      });
    } else {
      e.currentTarget.innerText = "Show all";
      contactNames.forEach(function (node, i) {
        if (contacts[i].favourite) {
          node.setAttribute("class", "contactName");
        } else {
          node.setAttribute("class", "hidden contactName");
        }
      });
    }
  };