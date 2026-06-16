import { setupPage, scrollToTop } from "../../utils/helpers.js";
const main = document.querySelector("main");
const hero = document.querySelector(".hero");
const trending = document.querySelector(".trending");
const latest = document.getElementById("latest");
export function articleRender(state) {
  const allNews = [
    ...state.slider.sliderNews,
    ...state.trending.trendingNews,
    ...state.latest.latestNews,
  ];

  const news = allNews.find((element) => {
    return element.id === state.article.newsId;
  });

  displayArticle(news);
}

function createArticle(news) {
  return `
        <article class="u-flex article" >
    <h1 class="article__title">${news.title}</h1>
    <p class="article__description" >${news.category[0].toUpperCase() + news.category.slice(1)} | ${news.date}</p>
    <img crossorigin="anonymous" alt="${news.image.alt}" srcset="${news.image.sizes.large} 1200w, ${news.image.sizes.medium} 768w, ${news.image.sizes.small} 480w"
            
     sizes="(max-width: 1000px) 90vw, 68vw" onload="this.classList.remove('u-opacity-0')" class="u-object-cover article__img u-opacity-0" src="${news.image.sizes.small}" >
    <p class="article__content">${news.article}</p>
    </article>  
    
    `;
}

function displayArticle(news) {
  setupPage("article");
  main.insertAdjacentHTML("afterbegin", createArticle(news));
  scrollToTop();
}
