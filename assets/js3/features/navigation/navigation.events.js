
const homeNavLink = document.querySelector("nav ul").querySelector("[data-link-name='home']");
import { dispatch } from "../../core/state.js";
import { handleBrowserNavigation, handleHomeURL } from "./navigation.controller.js";

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
  })
}
