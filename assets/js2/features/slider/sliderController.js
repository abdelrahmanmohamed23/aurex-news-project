import {addSlides, sliderPreparation, moveSlide, bindSlideHover} from "./sliderView.js"
import { state } from "./sliderState.js"

import {getDataBySection, handleShowArticlesClick, newsClickHandle} from "../../utils/helpers.js"
const slider = document.getElementById("slider");
const SLIDER_DELAY = 5000;
export function initSlider (data, initArticle) {
const heroData = getDataBySection(data, "hero")
addSlides(heroData)
handleAnimation()
bindSlideHover(hoverStartHandler, hoverEndHandler)
// bindNewsClick(slider,handleShowArticlesClick)
newsClickHandle(data,slider,initArticle)
}

function handleAnimation() {
sliderPreparation()
  state.intervalId = setInterval(handleState, SLIDER_DELAY);
}
function handleState() {

  if (state.animation.nextElementNumber === 5) {
    state.animation.nextElementNumber = 1;
    state.animation.perviousElementNumber = state.animation.activeElementNumber;
    state.animation.activeElementNumber++;
moveSlide();
    return;
  }
if (state.animation.activeElementNumber === 5) {
   state.animation.perviousElementNumber++;
   state.animation.activeElementNumber = 1;
   state.animation.nextElementNumber++
   moveSlide();
    return;
}
  state.animation.perviousElementNumber = state.animation.activeElementNumber;
  state.animation.activeElementNumber++;
  state.animation.nextElementNumber++;
  moveSlide();
}
 function hoverStartHandler () {
clearInterval(state.intervalId)
}
 function hoverEndHandler () {
 state.intervalId = setInterval(handleState, SLIDER_DELAY);
}