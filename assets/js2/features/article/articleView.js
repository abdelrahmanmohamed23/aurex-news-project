import { appState } from "../../core/store.js"

import {navigationChange} from "../../utils/helpers.js"
const main = document.querySelector("main")
const hero = document.querySelector(".hero")
const trending = document.querySelector(".trending")
const latest = document.getElementById("latest")
function createArticle (news, index){
    return `
        <article class="u-flex article" >
    <h1 class="article__title">${news[index].title}</h1>
    <p class="article__description" >${news[index].category} | ${news[index].date}</p>
    <img class="u-object-cover article__img" src="${news[index].image.sizes.large}">
    <p class="article__content">${news[index].article}</p>
    </article>  
    
    `
    
}

export function newArticleHandle (data, id) {
        showArticle(data, id)
}

function showArticle (data, id) {
        if (appState.category.category) {
        main.children[0].remove()
    }
 const article = createArticle(  data, id-1)
 if (appState.article.article) {
 main.children[0].remove()
    main.insertAdjacentHTML('afterbegin', article);
    // navigationChange("article", e.detail.articleId)
    return
 }
 
 hero.classList.add("u-none")
 latest.classList.add("u-none")
trending.classList.add("trending--article")
trending.classList.remove("trending--category")
    main.insertAdjacentHTML('afterbegin', article);

    // navigationChange({type: "article", id:  e.detail.articleId})
}

//  export function stopActiveLink () {
//     document.querySelector(appState.navigation.activeLink).classList.remove("header__nav-link--active")
  

// }