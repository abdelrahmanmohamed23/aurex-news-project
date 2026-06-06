import { state } from "./carouselState.js";
import {slidersHoverEndHandle, slidersHoverHandle} from "./carouselLogic.js"
const carouselParent = document.getElementById("hero-container");
function createSlider(news) {
  return `
  <a class="hero__link u-size-full u-none " data-news-id="${news.id}">
            <img onload="this.parentElement.classList.remove('u-none')" class="hero__img u-size-full u-object-cover u-opacity-0" src="${news.image.sizes.large}" alt="" />
            <div class="flex hero__content">
              <p class="hero__category">${news.category}</p>
              <h2 class="u-line-clamp hero__title">${news.title}</h2>
              <p class="hero__description">${news.date}</p>
            </div>
            </a>
          `;

}


export function render(data) {
  addSliders(data);
  animation();
}

function addSliders(news) {
  console.log(news)
  if (!news) return;
  // if (state.numberOfSliders === news.length) return;
  const newsKeys = Object.keys(news);
  for (let i = 0; i < news.length; i++) {
    carouselParent.innerHTML += createSlider(news[newsKeys[i]]);
    state.numberOfSliders++;
   
  }
  
}
function animation() {
  if (!state.animation.started) {
    animationPreparation();
    return;
  }
  animationMove();
}

function animationMove() {
  toEnd(
    carouselParent.querySelector(
      `:scope > :nth-child(${state.animation.activeElementNumber})`,
    ),
  );
  toActive(
    carouselParent.querySelector(
      `:scope > :nth-child(${state.animation.nextElementNumber})`,
    ),
  );
  if (state.animation.perviousElementNumber){
  toStart(carouselParent.querySelector(
      `:scope > :nth-child(${state.animation.perviousElementNumber})`,
    ))
    }
}

function animationPreparation() {
  state.animation.started = true;
  [...carouselParent.children].forEach((element, index) => {
    if (index !== 0) toStart(element);
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
export function addSlidersHover () {
   [...carouselParent.children].forEach((element) => {
   element.addEventListener("mouseenter", ()=> {
    slidersHoverHandle()
   })
   element.addEventListener("mouseleave", ()=> {
    slidersHoverEndHandle()
   })
  });
}

// import {animationEnding,carouselParent} from "./carouselController"

// // import { hoverHandling, links, render, getImgs, showImg} from "./carouselController.js"
// // import { elements } from "./elements.js"

// export function carouselAddEvents () {
// //    links.forEach((element) => {
// // element.addEventListener("mouseenter",() => {
// //     hoverHandling("start")
// //     render()
// // })
// // element.addEventListener("mouseleave" , () => {
// //      hoverHandling("end")
// //      render()
// // })
// // }
// // )

// // getImgs().forEach((element) => {element.addEventListener("load", () => {
// //     showImg(element)
// // })})

// }
