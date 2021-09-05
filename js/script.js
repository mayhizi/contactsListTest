const CONTACT_DETAILS_ID = 'contactDetails';
const FAVOURITE_ID = 'favourite';
const CLOSE_DETAILS_ID = 'closeDetails';
const CONTACT_LIST_ID = "contactList";
const SEARCH_ID = "search";
const CONTACT_FILTER_ID = 'contactFilter';
const SEARCH_BUTTON_ID = 'searchButton';


const createContactDetailsElement = (name, email, favorite) => {
    return `
<span id='closeDetails'><img src="./assets/close.svg" width="40px" height="40px"></span>
<div class="name"> ${name} <span id='favourite' ><img src=${favorite ? "./assets/star.svg" : "./assets/star_border.svg"} width="40px" height="40px"></span>
</div>
<div class="email"> ${email} </div>
`
}

const favouriteOnClickHandler = (e, contactId) => {
    contacts[contactId].favourite = !contacts[contactId].favourite;
    const favouriteImageElement = e.currentTarget.getElementsByTagName("img")[0];
    if (contacts[contactId].favourite) {
        favouriteImageElement.src = "./assets/star.svg";
    } else {
        favouriteImageElement.src = "./assets/star_border.svg";

    }
}
const closeDetailsOnClickHandler = () => {
    const contactDetails = document.getElementById(CONTACT_DETAILS_ID);
    contactDetails.innerHTML = "";
    contactDetails.setAttribute("class", "hidden");
}
const contactOnClickHandler = (e) => {
    const contactId = parseInt(e.currentTarget.id);
    console.log({ e, contactId });
    const contactDetails = document.getElementById(CONTACT_DETAILS_ID);
    const isFavourite = contacts[contactId].favourite;
    contactDetails.innerHTML = createContactDetailsElement(contacts[contactId].name, contacts[contactId].email, isFavourite);

    contactDetails.setAttribute("class", "");

    document.getElementById(FAVOURITE_ID).onclick = (e) => favouriteOnClickHandler(e, contactId);

    document.getElementById(CLOSE_DETAILS_ID).onclick = closeDetailsOnClickHandler
}

const createContactElement = (name, id) => {
    const el = document.createElement("div");
    el.innerHTML = name;
    el.className = 'contactName';
    el.id = id;
    el.onclick = contactOnClickHandler

    document.getElementById(CONTACT_LIST_ID).appendChild(el);

}
const contactFilterOnClickHandler = (e) => {
    const contactNames = document.querySelectorAll('.contactName');
    if (e.currentTarget.innerText === "Show all") {
        e.currentTarget.innerText = "Filter favorites"
        contactNames.forEach(function(node, i) {
            node.setAttribute("class", "contactName");
        })
    } else {
        e.currentTarget.innerText = "Show all";
        contactNames.forEach(function(node, i) {

            if (contacts[i].favourite) {
                node.setAttribute("class", "contactName");
            } else {
                node.setAttribute("class", "hidden contactName");
            }
        })
    }
}

const searchInputHandler = (e) => {
    const contactNames = document.querySelectorAll('.contactName');
    const searchValue = document.getElementById(SEARCH_ID).value;
    contactNames.forEach(function(node) {
        const regexp = new RegExp(searchValue.toLowerCase());
        if (regexp.test(node.innerText.toLowerCase())) {
            console.log("found");
            node.setAttribute("class", "contactName");
        } else {
            node.setAttribute("class", "hidden contactName");
        }
    })
}
window.onload = function() {
    function render() {
        if (contacts) {
            document.getElementById(CONTACT_LIST_ID).innerHTML = "";

            for (let i = 0; i < contacts.length; i++) {
                createContactElement(contacts[i].name, i);
            }

            document.getElementById(CONTACT_FILTER_ID).onclick = contactFilterOnClickHandler

            document.getElementById(SEARCH_BUTTON_ID).onclick = searchInputHandler
        }
    }

    render();
};