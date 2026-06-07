import {handleNavResponsiveness, dropmenuToggle} from "./dropmenu.controller.js"
import { dispatch } from "../../core/state.js";

const dropmenuBtn = document.getElementById("dropmenu-btn");
export function dropmenuEvents () {

window.addEventListener("resize", () => {
    dispatch(handleNavResponsiveness)
})
dropmenuBtn.addEventListener("click", ()=> {
    dispatch(dropmenuToggle)
})
}