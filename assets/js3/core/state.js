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
trending: {
    trendingNews: null
},
  lastUpdatedKey: null,
};

export function dispatch(stateUpdater) {

state = stateUpdater(state);
   
  

  render(state);
}
