
import { navigationState } from "./navigationState.js"
const homeLink = document.querySelector("nav li a")

export function changingNavigationRendering () {
    if (navigationState.currentPage === null || navigationState.currentPage === "home") {
navigationState.currentPage = "home"
navigationState.activeElement = homeLink
homeLink.classList.add("header__nav-link--active")

    }else if (navigationState.currentPage === "article") {
        homeLink.classList.remove("header__nav-link--active")
navigationState.activeElement = null
    }
}
homeLink.addEventListener("click", () => {
    const articleSection = document.getElementById("article-container")
const hero = document.querySelector("section.hero")
const latestNewsSection = document.getElementById("latest-news-section")
if (articleSection) {
window.scrollTo(0, 0);
    articleSection.style.display = "none"
    hero.style.display = "unset"
latestNewsSection.style.display = "flex"
   navigationState.currentPage = "home"
   changingNavigationRendering()
}
})