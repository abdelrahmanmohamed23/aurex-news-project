import {changeTheme} from "./theme.controller.js"
import { dispatch } from "../../core/state.js";
const themeChangerBtnIcon = document.getElementById("theme-changer");

export function themeEvents () {
themeChangerBtnIcon.addEventListener("click", () => {
dispatch(changeTheme)
})
}

