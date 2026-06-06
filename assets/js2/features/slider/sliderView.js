import { state } from "./sliderState.js";
const slider = document.getElementById("slider");

function createSlide(news) {
  return `
  <a class="hero__link u-size-full u-none " data-news-id="${news.id}">
            <img onload="this.parentElement.classList.remove('u-none')" class="hero__img u-size-full u-object-cover u-opacity-0" src="${news.image.sizes.large}" alt="${news.image.alt}" />
            <div class="flex hero__content">
              <p class="hero__category">${news.category}</p>
              <h2 style="text-shadow: ${news.image.text_shadow};" class="u-line-clamp hero__title">${news.title}</h2>
              <p style="text-shadow: ${news.image.text_shadow};" class="hero__description">${news.date}</p>
            </div>
            </a>
          `;
}

export function addSlides(heroData) {
  for (let i = 0; i < heroData.length; i++) {
    slider.innerHTML += createSlide(heroData[i]);
  }
}

export function moveSlide() {
  toEnd(
    slider.querySelector(
      `:scope > :nth-child(${state.animation.activeElementNumber})`,
    ),
  );
  toActive(
    slider.querySelector(
      `:scope > :nth-child(${state.animation.nextElementNumber})`,
    ),
  );
  if (state.animation.perviousElementNumber) {
    toStart(
      slider.querySelector(
        `:scope > :nth-child(${state.animation.perviousElementNumber})`,
      ),
    );
  }
}
export function sliderPreparation() {
  [...slider.children].forEach((element, index) => {
    if (index !== 0) {
      toStart(element);
    }
  });
}

function toStart(element) {
  element.style.opacity = 0;
  element.style.transform = "translateX(-100%)";
}
function toEnd(element) {
  element.style.opacity = 1;
  element.style.transform = "translateX(100%)";
}
function toActive(element) {
  element.style.opacity = 1;
  element.style.transform = "translateX(0)";
}

export function bindSlideHover (hoverStartHandler, hoverEndHandler) {
  slider.addEventListener("mouseenter", hoverStartHandler)
  slider.addEventListener("mouseleave", hoverEndHandler)
}

export function slideClickHandle (element,handler) {
  [...slider.children].forEach((element) => {
   element.addEventListener("click" ,(e) => {
    handler(e.currentTarget.getAttribute("data-news-id"))
   } )
  });
}