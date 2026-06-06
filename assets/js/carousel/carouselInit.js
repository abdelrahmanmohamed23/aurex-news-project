
import { state } from "./carouselState.js";
import {render,addSlidersHover} from "./carouselRender.js"
import { config } from "./config.js";
import {loadNews, handleAnimation} from "./carouselLogic.js"

export async function initCarousel(dataPromise) {
  await loadNews(dataPromise)
  handleAnimation()
  addSlidersHover()

  // await setSliders(newsPromise)
  // animation()
  //   state.intervalId = setInterval(() => {
  //   intervalFunction();
  // }, config.animationDelay);
  // carouselAddEvents();
  

}
