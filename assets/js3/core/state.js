import { render } from "./render.js";

let state = {
theme: "light",
slider: {
    sliderNews: null,
     animation: {
        animationStarted: false,
    activeElementNumber: 0,
    nextElementNumber: 1,
   perviousElementNumber: 0
  },
  intervalId: null
},
  lastUpdatedKey: null,
};
export function getState () {
    return state
}
export function dispatch(stateUpdater) {

state = stateUpdater(state);
   
  

  render(state);
}
