import {changeTheme} from "./themeController.js";
import {qs} from "../shared/utils/dom.js"
export function handleThemeChange () {
   qs("#themeChangerBtn").addEventListener("click", changeTheme)

}