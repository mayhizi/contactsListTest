import {
  CONTACT_LIST_ID,
  CONTACT_FILTER_ID,
  SEARCH_BUTTON_ID,
  createContactElement,
  contactFilterOnClickHandler,
  searchInputHandler,
} from "./utils.js";
import {contacts} from "../mocks/contacts.js";

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
