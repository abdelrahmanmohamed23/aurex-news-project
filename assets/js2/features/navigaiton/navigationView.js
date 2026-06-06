import { navigationChange } from "../../utils/helpers.js";
import { appState } from "../../core/store.js";
import { updateStateToHomePage } from "./navigationController.js";
import { createArticleCard, newsClickHandle } from "../../utils/helpers.js";
import { getCategoriesNews } from "./navigationModel.js";
import { initArticle } from "../article/articleController.js";

const navList = document.querySelector("nav ul");
const CATEGORIES_MAX_NUMBER = 5;
const main = document.querySelector("main");
function createLink(category) {
  return `
 <li><a data-link-name="${category}" class="header__nav-link">${category}</a></li>

`;
}
function createCategoryPage(category) {
  return `
<section id="category" class="category u-flex"> 
<h2 class="category__title">${category}</h2>
</section>
`;
}

export function addLinksToNav(categories) {
  categories.forEach((element, index) => {
    if (index >= CATEGORIES_MAX_NUMBER) return;
    navList.innerHTML += createLink(element);
  });
}

export function navigaitonHandle(pageState) {
  let position = 0;
  if (!pageState) {
    position++;
    homePage();
  } else if (pageState.id) {
    position++;
    history.pushState(
      { id: pageState.id, position: position },
      "",
      `http://127.0.0.1:5500/index.html/article/news-id-${pageState.id}`,
    );
  } else if (pageState.category) {
    position++;
    history.pushState(
      { category: pageState.category, position: position },
      "",
      `http://127.0.0.1:5500/index.html/${pageState.category}`,
    );
  }
}
export function popstateHandle(data, updateStateToCategory) {
  let lastPosition = 0;
  window.addEventListener("popstate", (e) => {
    const position = e.state ? e.state.position : 0;

    if (window.location.href === "http://127.0.0.1:5500/index.html") {
      homePage();
    } else if (window.location.href.includes("article")) {
      if (appState.article.articleNewsId !== e.state.id) {
        initArticle(data, e.state.id, "window");
        return;
      }
      if (lastPosition < position) {
        history.forward();
      } else {
        history.back();
      }
    } else {
      if (appState.category.categoryName !== e.state.category) {
        setCategoryPage({
          category: e.state.category,
          data: data,
          updateStateToCategory: updateStateToCategory,
          caller: "window",
        });
        return;
      }
      if (lastPosition < position) {
        history.forward();
      } else {
        history.back();
      }
    }

    lastPosition = position;
  });
}

function homePage() {
  updateStateToHomePage();
  const hero = document.querySelector(".hero");
  const latest = document.getElementById("latest");
  const article = document.querySelector(".article");
  const category = document.getElementById("category");

  hero.classList.remove("u-none");
  latest.classList.remove("u-none");
  if (article) article.remove();
  if (category) category.remove();
trending.classList.remove("trending--article")
trending.classList.remove("trending--category")
  changeActiveLink();
  history.replaceState({},"", "http://127.0.0.1:5500/index.html")
  //  document.querySelector(appState.navigation.activeLink).classList.add("header__nav-link--active")
}

// export function bindPopstate () {
//     window.addEventListener("popstate", navigationChange)
// }

export function changeActiveLink() {
  const activeLink = document.querySelector(".header__nav-link--active");
  if (activeLink) {
  activeLink.classList.remove("header__nav-link--active");
  };


  if (!appState.navigation.currentLink) return;
  document
    .querySelector(`[data-link-name='${appState.navigation.currentLink}']`)
    .classList.add("header__nav-link--active");
}

export function linksClickHandle(data, updateStateToCategory) {
  const navList = document.querySelector(".header__nav-list");

  [...navList.children].forEach((element) => {

    element.children[0].addEventListener("click", (e) => {
    if (element.children[0].getAttribute("data-link-name") === "home") {
        homePage()
        return
    }
      setCategoryPage({
        e: e,
        data: data,
        updateStateToCategory: updateStateToCategory,
      });
    });
  });
}
function setCategoryPage(param) {
  let category;
  if (param.category) {
    category = param.category;
  } else {
    category = param.e.currentTarget.getAttribute("data-link-name");
  }
  if (appState.category.category) {
    main.children[0].remove();
  }

  main.insertAdjacentHTML("afterbegin", createCategoryPage(category));
trending.classList.remove("trending--article")
trending.classList.add("trending--category")
  const hero = document.querySelector(".hero");
  const latest = document.getElementById("latest");
  const article = document.querySelector(".article");
  hero.classList.add("u-none");
  latest.classList.add("u-none");
  if (article) article.remove();
  param.updateStateToCategory(category);
  changeActiveLink();
  getCategoriesNews(param.data, category).forEach((element) => {
    document
      .getElementById("category")
      .insertAdjacentHTML("beforeend", createArticleCard(element));
  });
  newsClickHandle(param.data, document.getElementById("category"), initArticle);
  if (param.caller) return;
  navigaitonHandle({ category: category });
}
