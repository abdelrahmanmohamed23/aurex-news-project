import { dropmenuState } from "./dropmenuState.js";
import {bindResize, handleNav, bindDropmenuBtnClick} from "./dropmenuView.js"


const DROPDOWN_BREAKPOINT = 780;
export function initDropmenu () {
updateState()
handleNav()
bindResize(updateState)
bindDropmenuBtnClick(DropmenuBtnClick)

}

function updateState () {
    dropmenuState.windowSize = window.innerWidth
   if (dropmenuState.windowSize <= DROPDOWN_BREAKPOINT) {
        dropmenuState.dropmenuState = "closed"
    }else {
        dropmenuState.dropmenuState = null
    }
    handleNav()
}

function DropmenuBtnClick () {
    if (dropmenuState.dropmenuState === "closed") {
    dropmenuState.dropmenuState = "opened"
    handleNav()
    }else {
         dropmenuState.dropmenuState = "closed"
    handleNav()
    }
}