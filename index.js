import { renderTemplate, setActive, showPage } from "./utils.js"
import {getRiders, deleteRider } from "./js-for-pages/riders.js"
import { riderHandlers } from "./js-for-pages/edit-riders.js";

function renderMenuItems(evt) {
    const element = evt.target
    setActive(element)
    const id = element.id
    renderTemplate(id)  //This setups the HTML for the page
    switch (id) {
        //Here you can execute JavaScript for the selected page
        case "page-riders": {
            getRiders()
            break
        }
        case "page-about": {
            break
        }
        case "page-add-edit-riders": {
            riderHandlers()
            break
        }

    }
}

document.getElementById("menu").onclick = renderMenuItems;
showPage("page-about") //Set the default page to render