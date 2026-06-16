
const homeNavLink = document.querySelector("nav ul").querySelector("[data-link-name='home']");
import { dispatch,getState } from "../../core/state.js";
import { handleBrowserNavigation, handleHomeURL } from "./navigation.controller.js";
import { setupSliderInterval } from "../../utils/helpers.js";

export function navigaitonEvents() {
  window.addEventListener("popstate", (event) => {
    handleBrowserNavigation(event.state);
  });
  homeNavLink.addEventListener("click", ()=> {
    dispatch((state)=> {
        return {
        ...state,
        navigation: {
            ...state.navigation, 
            activePageType: "home"
        }, activeLinkName : "home",
         lastUpdatedKey: "navigation"
    }
    })
    handleHomeURL()
    if (getState().slider.intervalId === null) {
      dispatch(setupSliderInterval)
    }
  })
}
