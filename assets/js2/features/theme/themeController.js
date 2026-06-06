import {changeTheme,bindBtnClick } from "./themeView.js"
import { state } from "./themeState.js"
export function initTheme () {
bindBtnClick(btnClickHandler)
}




function btnClickHandler () {
    const theme = state.theme;
if (theme === "dark") {
    state.theme = "light"
} else {
    state.theme = "dark"
}

changeTheme(state.theme)

}