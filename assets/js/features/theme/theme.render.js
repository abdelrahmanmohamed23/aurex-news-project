import { changeImage } from "../../utils/helpers.js";
const root = document.documentElement;

const themeChangerBtnIcon = document.getElementById("theme-changer").children[0];
export function themeRender (state) {
  
if (state.theme === "light"){
 root.removeAttribute("data-theme")
changeImage(themeChangerBtnIcon, `/assets/icons/moon-solid.png`, "Crescent Moon");
}else {
 root.setAttribute("data-theme", "dark");
changeImage(themeChangerBtnIcon, `/assets/icons/sun.png`, "Sun");
}
}