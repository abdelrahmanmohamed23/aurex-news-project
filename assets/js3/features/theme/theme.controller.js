
import { themeEvents } from "./theme.events.js";
export function initTheme() {
  themeEvents();
}
export function changeTheme(state) {
  if (state.theme === "light") {
    return { theme: "dark", lastUpdatedKey: "theme" };
  } else {
    return { theme: "light", lastUpdatedKey: "theme" };
  }
}
