import {changeTheme} from "./theme.controller.js"
import { dispatch } from "../../core/state.js";
const themeChangerBtn = document.getElementById("theme-changer");

export function themeEvents () {
themeChangerBtn.addEventListener("click", () => {
dispatch(changeTheme)
})
}

