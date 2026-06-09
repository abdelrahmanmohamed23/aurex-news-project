import {sliderAnimation} from "../features/slider/slider.controller.js"
import {dispatch} from "../core/state.js"
export function changeImage(img, url, alt) {
  img.setAttribute("src", url);
  img.setAttribute("alt", alt);
}

export function getNewsBySection (news, section) {

return news.filter((element)=> {
return element.display_section === section;
})
}

function createArticleCard (news, section) {
    return `
           <a class="article-card u-flex u-none" data-news-id="${news.id}">
          <img
          onload="this.parentElement.classList.remove('u-none')"
            class="u-object-cover article-card__img ${section === "latest" || section === "category" ? "article-card__img--latest" : ""}"
            src="${news.image.sizes.small}"
            alt="${news.image.alt}"
          />
          <div class="article-card__content ${section === "latest" || section === "category" ? "u-line-bottom" : ""}">
            <h3 class="u-line-clamp article-card__title">${news.title}</h3>
            <p class="article-card__description"><span></span> | <span>${news.category}</span></p>
          </div>
        </a>

    `
}
export function addArticlesCards (news, section, sectionElement) {
   news.forEach(element => {
sectionElement.insertAdjacentHTML("beforeend", createArticleCard(element, section));

   });
    
}


export function requestArticleDisplay (newsId) {
    const requestArticleEvent = new CustomEvent("articleRequest", {
        detail: {
 newsId
        }
    })
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
     lastUpdatedKey: "slider"
  };
}
const SLIDER_DELAY = 5000;
export function setupSliderInterval(state) {
  return {
    ...state,
    slider: {
      ...state.slider,
      intervalId: setInterval(() => {
        dispatch(sliderAnimation);
      }, SLIDER_DELAY),
    },  lastUpdatedKey: "slider"
  };
}