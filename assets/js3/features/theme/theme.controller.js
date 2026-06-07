
import { themeEvents } from "./theme.events.js";
export function initTheme() {

  themeEvents();
}
export function changeTheme(state) {
 
  if (state.theme === "light") {
  
    return {...state, theme: "dark", lastUpdatedKey: "theme" };
    
  } else {
  
    return {...state, theme: "light", lastUpdatedKey: "theme" };
   
  }
}
