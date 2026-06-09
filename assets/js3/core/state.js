import { render } from "./render.js";

let state = {
   activeLinkName: "home",
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
latest : {
    latestNews: null
},
dropmenu : {
appearance: null,
},
article: {
article: false,
articleRendered: false,
newsId: null
},
navigation: {
    categories: null,
    linksRendered: false,
    activePageType: null, 
},
category: null,
footerYear: null,
  lastUpdatedKey: null
};

export function dispatch(stateUpdater) {

state = stateUpdater(state);
   
  

  render(state);
}
