import {navigationState} from "../navigation/navigationState.js"
import { changingNavigationRendering } from "../navigation/render.js";
const hero = document.getElementById("hero-container")
const latestNewsSection = document.getElementById("latest-news-section")
const main = document.querySelector("main")

export async function heroArticles (data) {
    const news = await data;
 const heroObserver = new MutationObserver((mutationsList) => {
   for(const mutatation of mutationsList) {
    if (mutatation.type === 'childList') {
   
        mutatation.addedNodes.forEach((addedNode) => {
           if (addedNode.nodeType === Node.ELEMENT_NODE) {
            addedNode.addEventListener("click", (e)=> {
 render(news, e.currentTarget.getAttribute("data-news-id"))
 navigationState.currentPage = "article"
 changingNavigationRendering()
            })
           }
        })
           
            
        

    }
   }
}); const heroObserverConfig = { childList: true, subtree: false };
heroObserver.observe(hero, heroObserverConfig)

}
function render (news,newsId) {
    window.scrollTo(0, 0);
    hero.parentElement.style.display = "none"
    latestNewsSection.style.display = "none"
    const component = `
    <section id="article-container" class="flex" style="grid-row: span 2; flex-direction: column; align-items: center; gap: var( --space-md) ">
    <h1 style="font-size:var(--font-size-3xl)">${news.trending[newsId - 6].title}</h1>
    <p style="color: var(--color-text-muted);font-weight: bold; width: 95%; font-size:var(--font-size-sm)" >${news.trending[newsId - 6].category}</p>
    <img class="u-object-cover" src="${news.trending[newsId - 6].imageUrl}" style="width: 95%;">
    </section>   
    `
    main.insertAdjacentHTML('afterbegin', component);
    
}


export async function trendingArticles (data) {
    const aside = document.querySelector("aside")
    const news = await data;
 const trendingObserver = new MutationObserver((mutationsList) => {
   for(const mutatation of mutationsList) {
    if (mutatation.type === 'childList') {
   
        mutatation.addedNodes.forEach((addedNode) => {
           if (addedNode.nodeType === Node.ELEMENT_NODE) {
            addedNode.addEventListener("click", (e)=> {
                console.log(e.currentTarget)
 render(news, e.currentTarget.getAttribute("data-news-id"))
 navigationState.currentPage = "article"
 changingNavigationRendering()
            })
           }
        })
           
            
        

    }
   }
}); const trendingObserverConfig = { childList: true, subtree: false };
trendingObserver.observe(aside, trendingObserverConfig)

}