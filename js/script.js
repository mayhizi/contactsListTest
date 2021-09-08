import {
  createContactElement,
  contactFilterOnClickHandler,
} from "./contact.js";
import { searchInputHandler } from "./search.js";
import { contacts } from "../mocks/contacts.js";

window.onload = function () {
  function render() {
    if (contacts) {
      document.getElementById(CONTACT_LIST_ID).innerHTML = "";

      for (let i = 0; i < contacts.length; i++) {
        createContactElement(contacts[i].name, i);
      }

      document.getElementById(CONTACT_FILTER_ID).onclick =
        contactFilterOnClickHandler;

      document.getElementById(SEARCH_BUTTON_ID).onclick = searchInputHandler;
    }
  }

  render();
};
