import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const iconMenu = document.getElementById("ICON_MENU");
const listNav = document.querySelector(".list-nav");
const backgroundNav = document.querySelector(".list-nav-background");

iconMenu.addEventListener("click", () => {
    console.log("Hello");
    backgroundNav.classList.toggle("show-nav");
    listNav.classList.toggle("show-nav");
    iconMenu.classList.toggle("icon-close");

    if (listNav.classList.contains("show-nav")) {
        disableBodyScroll(listNav);
    } else {
        enableBodyScroll(listNav);
    }
});
