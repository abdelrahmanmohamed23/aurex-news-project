
import { appState } from "../core/store.js";
export function changeImage(img, url, alt) {
 
  img.setAttribute("src", url)
  img.setAttribute("alt", alt)
}
export function getDataBySection(data, section) {
  return data.filter((element) => {
    return element.display_section === section;
  });
}

export function createArticleCard (news, section) {
    return `
           <a class="article-card u-flex u-none" data-news-id="${news.id}">
          <img
          onload="this.parentElement.classList.remove('u-none')"
            class="u-object-cover article-card__img ${section === "latest" ? "article-card__img--latest" : ""}"
            src="${news.image.sizes.small}"
            alt="${news.image.alt}"
          />
          <div class="article-card__content ${section === "latest" ? "u-line-bottom" : ""}">
            <h3 class="u-line-clamp article-card__title">${news.title}</h3>
            <p class="article-card__description"><span></span> | <span>${news.category}</span></p>
          </div>
        </a>

    `
}
export function addArticlesCards (data, sectionElement, section) {
   data.forEach(element => {
    sectionElement.innerHTML += createArticleCard(element, section)
   });
    
}
export function handleShowArticlesClick (articleId) {

const newArticle  = new CustomEvent("newArticle", {
  detail: {
    articleId: articleId
  }
})
window.dispatchEvent(newArticle);
appState.articleId = articleId;
}

export function newsClickHandle (data,parent,handler) {
  [...parent.children].filter((element)=> {
    return element.tagName === "A"
  }).forEach((element) => {
   element.addEventListener("click" ,(e) => {
    handler(data,e.currentTarget.getAttribute("data-news-id"))
   } )
  });
}

export function navigationChange(stateData) {

  if (appState.navigation.currentPage === "home") {

    
homePage()
console.log("there is an error")
return
  }

history.pushState({}, "", `http://127.0.0.1:5500/index.html/article/news-id-${stateData.id}`)
}
