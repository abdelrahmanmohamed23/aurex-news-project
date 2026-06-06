import { changeImage } from "../../utils/helpers.js";
const themeChangerBtn = document.getElementById("theme-changer");
  const themeChangerBtnIcon = themeChangerBtn.querySelector("img");
  const root = document.documentElement;


export function bindBtnClick (handler) {
       themeChangerBtn.addEventListener("click", handler)


}

 export function changeTheme(theme) {
  if (theme === "light") {
  
    root.removeAttribute("data-theme")
changeImage(themeChangerBtnIcon, `/assets/icons/moon-solid.png`, "Crescent Moon");
   
  } else {
  root.setAttribute("data-theme", "dark");
    changeImage(themeChangerBtnIcon, `/assets/icons/sun.png`, "Sun");
  }
}