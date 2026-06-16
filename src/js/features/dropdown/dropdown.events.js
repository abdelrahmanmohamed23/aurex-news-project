import {handleNavResponsiveness, dropdownToggle} from "./dropdown.controller.js"
import { dispatch } from "../../core/state.js";

const dropdownBtn = document.getElementById("dropdown-btn");
export function dropdownEvents () {

window.addEventListener("resize", () => {
    dispatch(handleNavResponsiveness)
})
dropdownBtn.addEventListener("click", ()=> {
    dispatch(dropdownToggle)
})
}