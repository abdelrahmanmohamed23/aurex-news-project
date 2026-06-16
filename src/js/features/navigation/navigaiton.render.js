const navList = document.querySelector("nav ul");

import { setupPage,scrollToTop} from "../../utils/helpers.js"
export function navigationRender(state) {
  if (!state.navigation.linksRendered) {
    addLinksToNav(state.navigation.categories);
  
  }

  
  if (state.navigation.activePageType === "home") {
    displayHome();
  }
}

function addLinksToNav(categories) {
  categories.forEach((element) => {
    navList.insertAdjacentHTML("beforeend", createLink(element));
  });
}

function createLink(category) {
  return `
 <li><a href="/${category}" data-link-name="${category}" class="header__nav-link">${category[0].toUpperCase() + category.slice(1)}</a></li>

`;
}

function displayHome() {

   setupPage("home")
scrollToTop()
}


export function handleActiveNavLink (state) {
  
    const activeLinkName = state.activeLinkName
    const activeLink = document.querySelector(".header__nav-link--active")
  
if (activeLinkName === null) {
  if (activeLink){ activeLink.classList.remove("header__nav-link--active")}
}else if (activeLinkName === "home") {
   if (activeLink){ activeLink.classList.remove("header__nav-link--active")}
  navList.querySelector("[data-link-name='home']").classList.add("header__nav-link--active")
}else {
   if (activeLink){ activeLink.classList.remove("header__nav-link--active")}
  navList.querySelector(`[data-link-name='${activeLinkName}']`).classList.add("header__nav-link--active")
}
}
