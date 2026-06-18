import { sliderAnimation } from "../features/slider/slider.controller.js";
import { dispatch } from "../core/state.js";
export function changeImage(img, url, alt) {
  img.setAttribute("src", url);
  img.setAttribute("alt", alt);
}

export function getNewsBySection(news, section) {
  return news.filter((element) => {
    return element.display_section === section;
  });
}

function createArticleCard(news, section) {
  return `
           <a href="/article/news-id-${news.id}" class="article-card u-flex u-opacity-0" data-news-id="${news.id}">
      

          <img 
          crossorigin="anonymous"
          ${section === "latest" || section === "category" ? ' sizes="(max-width: 1350px) 240px, 25vw" loading="lazy"' : 'sizes="(max-width: 1350px) 160px, 11vw"'}
          onload="this.parentElement.classList.remove('u-opacity-0')"
            class="u-object-cover article-card__img ${section === "latest" ? "article-card__img--latest" : section === "category" ? "article-card__img--category" : ""}"
            srcset="${news.image.sizes.large} 1200w, ${news.image.sizes.medium} 768w, ${news.image.sizes.small} 480w"
            src="${news.image.sizes.small}"
            alt="${news.image.alt}"
          />
      
          <div class="article-card__content ${section === "latest" || section === "category" ? "u-line-bottom" : ""}">
            <h3 class="u-line-clamp article-card__title">${news.title}</h3>
            <p class="article-card__description">${news.category[0].toUpperCase() + news.category.slice(1)} | ${news.date}</p>
          </div>
        </a>

    `;
}
export function addArticlesCards(news, section, sectionElement) {
  news.forEach((element) => {
    sectionElement.insertAdjacentHTML(
      "beforeend",
      createArticleCard(element, section),
    );
  });
}

export function requestArticleDisplay(newsId) {
  const requestArticleEvent = new CustomEvent("articleRequest", {
    detail: {
      newsId,
    },
  });
  window.dispatchEvent(requestArticleEvent);
}

export function clearSliderInterval(state) {
  clearInterval(state.slider.intervalId);
  return {
    ...state,
    slider: {
      ...state.slider,
      intervalId: null,
    },
    lastUpdatedKey: "slider",
  };
}
const SLIDER_DELAY = 5000;
export function setupSliderInterval(state) {
  if (state.slider.intervalId !== null) {
    return {
      ...state,
    };
  }
  return {
    ...state,
    slider: {
      ...state.slider,
      intervalId: setInterval(() => {
        dispatch(sliderAnimation);
      }, SLIDER_DELAY),
    },
    lastUpdatedKey: "slider",
  };
}

export function setupPage(pageType) {
  const hero = document.querySelector(".hero");
  const latest = document.getElementById("latest");
  const article = document.querySelector(".article");
  const category = document.getElementById("category");
const main = document.querySelector("main")
  const trending = document.getElementById("trending");

  if (pageType === "article") {
    if (article) article.remove();
    if (category) category.remove();
 main.classList.add("main--article")
    hero.classList.add("u-none");
    latest.classList.add("u-none");
    trending.classList.add("trending--article");
    trending.classList.remove("trending--category");
  } else if (pageType === "category") {
    trending.classList.add("trending--category");
    hero.classList.add("u-none");
    latest.classList.add("u-none");
     main.classList.add("main--category")
    if (article) article.remove();
    if (category) category.remove();

  } else {
    trending.classList.remove("trending--category");
    trending.classList.remove("trending--article");
 main.classList.remove("main--article")
  main.classList.remove("main--category")
    hero.classList.remove("u-none");
    latest.classList.remove("u-none");
    if (article) article.remove();
    if (category) category.remove();
  }
}

export function scrollToTop() {
  requestAnimationFrame(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
}
