import { render } from "./carouselRender.js";
import { state } from "./carouselState.js";
import { config } from "./config.js";
export async function loadNews(data) {
  const news = await data;

  render(news);
}

export function handleAnimation() {
  state.intervalId = setInterval(intervalFunction, config.animationDelay);
}

function intervalFunction() {

  if (state.animation.nextElementNumber === 5) {
    state.animation.nextElementNumber = 1;
    state.animation.perviousElementNumber = state.animation.activeElementNumber;
    state.animation.activeElementNumber++;
render();
    return;
  }
if (state.animation.activeElementNumber === 5) {
   state.animation.perviousElementNumber++;
   state.animation.activeElementNumber = 1;
   state.animation.nextElementNumber++
   render();
    return;
}
  state.animation.perviousElementNumber = state.animation.activeElementNumber;
  state.animation.activeElementNumber++;
  state.animation.nextElementNumber++;
  render();
}
export function slidersHoverHandle () {
clearInterval(state.intervalId)
}
export function slidersHoverEndHandle () {
 state.intervalId = setInterval(intervalFunction, config.animationDelay);
}