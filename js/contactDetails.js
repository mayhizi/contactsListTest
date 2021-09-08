import { contacts } from "../mocks/contacts.js";

export const CONTACT_DETAILS_ID = "contactDetails";
export const FAVOURITE_ID = "favourite";
export const CLOSE_DETAILS_ID = "closeDetails";

export const favouriteOnClickHandler = (e, contactId) => {
  contacts[contactId].favourite = !contacts[contactId].favourite;
  const favouriteImageElement = e.currentTarget.getElementsByTagName("img")[0];
  if (contacts[contactId].favourite) {
    favouriteImageElement.src = "./assets/star.svg";
  } else {
    favouriteImageElement.src = "./assets/star_border.svg";
  }
};
export const closeDetailsOnClickHandler = () => {
  const contactDetails = document.getElementById(CONTACT_DETAILS_ID);
  contactDetails.innerHTML = "";
  contactDetails.setAttribute("class", "hidden");
};
