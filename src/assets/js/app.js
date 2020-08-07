import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const iconMenu = document.getElementById("ICON_MENU");
const listNav = document.querySelector(".nav-list");
const backgroundNav = document.querySelector(".nav-background");

iconMenu.addEventListener("click", () => {
    backgroundNav.classList.toggle("show-nav");
    listNav.classList.toggle("show-nav");
    iconMenu.classList.toggle("icon-close");

    if (listNav.classList.contains("show-nav")) {
        console.log("Nav open");
        disableBodyScroll(listNav);
    } else {
        console.log("Nav closed");
        enableBodyScroll(listNav);
    }
});
