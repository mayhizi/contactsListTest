import {
  FAVOURITE_ID,
  CLOSE_DETAILS_ID,
  CONTACT_DETAILS_ID,
  favouriteOnClickHandler,
  closeDetailsOnClickHandler,
} from "./contactDetails.js";
import { contacts } from "../mocks/contacts.js";

export const CONTACT_LIST_ID = "contactList";

export const createContactDetailsElement = (name, email, favorite) => {
  return `
<span id='closeDetails'><img src="./assets/close.svg" class="img" ></span>
<div class="name"> ${name} <span id='favourite' ><img src=${
    favorite ? "./assets/star.svg" : "./assets/star_border.svg"
  } class="img" ></span>
</div>
<div class="email"> ${email} </div>
`;
};

export const contactOnClickHandler = (e) => {
  const contactId = parseInt(e.currentTarget.id);
  const contactDetails = document.getElementById(CONTACT_DETAILS_ID);
  const isFavourite = contacts[contactId].favourite;
  contactDetails.innerHTML = createContactDetailsElement(
    contacts[contactId].name,
    contacts[contactId].email,
    isFavourite
  );

  contactDetails.setAttribute("class", "");

  document.getElementById(FAVOURITE_ID).onclick = (e) =>
    favouriteOnClickHandler(e, contactId);

  document.getElementById(CLOSE_DETAILS_ID).onclick =
    closeDetailsOnClickHandler;
};

export const createContactElement = (name, id) => {
  const el = document.createElement("div");
  el.innerHTML = name;
  el.className = "contactName";
  el.id = id;
  el.onclick = contactOnClickHandler;

  document.getElementById(CONTACT_LIST_ID).appendChild(el);
};
