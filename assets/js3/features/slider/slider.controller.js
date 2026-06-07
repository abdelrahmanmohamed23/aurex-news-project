import {getNewsBySection} from "../../utils/helpers.js"
import { dispatch } from "../../core/state.js";
import { sliderEvents } from "./slider.events.js";
const SLIDER_DELAY = 5000;
export function initSlider(news) {
  const sliderNews = getNewsBySection(news, "hero");
  dispatch(setSliderNews(sliderNews));
  dispatch(setupSliderInterval);
  sliderEvents();
}

function setSliderNews(sliderNews) {
  return function (state) {
    return {
      ...state,
      slider: {
        ...state.slider,
        sliderNews,
      },
      lastUpdatedKey: "slider"
    };
  };
}
export function setupSliderInterval(state) {
  return {
    ...state,
    slider: {
      ...state.slider,
      intervalId: setInterval(() => {
        dispatch(sliderAnimation);
      }, SLIDER_DELAY),
    },
  };
}

function sliderAnimation(state) {
  if (
    state.slider.animation.nextElementNumber === state.slider.sliderNews.length
  ) {
    return {
      ...state,
      slider: {
        ...state.slider,
        animation: {
          animationStarted: true,
          nextElementNumber: 1,
          perviousElementNumber: state.slider.animation.activeElementNumber,
          activeElementNumber: state.slider.animation.activeElementNumber + 1,
        },
      },
      lastUpdatedKey: "slider",
    };
  }
  if (
    state.slider.animation.activeElementNumber ===
    state.slider.sliderNews.length
  ) {
    return {
      ...state,
      slider: {
        ...state.slider,
        animation: {
          animationStarted: true,
          nextElementNumber: 1 + state.slider.animation.nextElementNumber,
          perviousElementNumber:
            1 + state.slider.animation.perviousElementNumber,
          activeElementNumber: 1,
        },
      },
       lastUpdatedKey: "slider"
    };
  }

  return {
    ...state,
    slider: {
      ...state.slider,
      animation: {
        animationStarted: true,
        nextElementNumber: 1 + state.slider.animation.nextElementNumber,
        perviousElementNumber: state.slider.animation.activeElementNumber,
        activeElementNumber: 1 + state.slider.animation.activeElementNumber,
      },
    },
     lastUpdatedKey: "slider",
  };
}

export function clearSliderInterval(state) {
  clearInterval(state.slider.intervalId);
  return {
    ...state,
    slider: {
      ...state.slider,
      intervalId: null,
    },
  };
}
