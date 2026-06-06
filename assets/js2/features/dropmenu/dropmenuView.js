import { dropmenuState } from "./dropmenuState.js";
const dropmenuBtn = document.getElementById("dropmenu-btn");
const navList = document.querySelector("nav ul");
export function bindResize(handler) {
  window.addEventListener("resize", handler);
}

export function handleNav() {
  if (dropmenuState.dropmenuState === "closed") {
    dropmenuClose();
  } else if (dropmenuState.dropmenuState === "opened") {
    dropmenuOpen();
  } else {
    defaultNav();
  }
}

function dropmenuClose() {
  dropmenuBtn.classList.remove("u-none");
  dropmenuBtn.classList.add("header__nav-button--close");
  dropmenuBtn.classList.remove("header__nav-button--open");
  navList.classList.add("header__nav-list--dropmenu", "u-none");
}
function dropmenuOpen() {
  navList.classList.remove("u-none");
  dropmenuBtn.classList.add("header__nav-button--open");
  dropmenuBtn.classList.remove("header__nav-button--close");
}
export function bindDropmenuBtnClick(handler) {
  dropmenuBtn.addEventListener("click", handler);
}
function defaultNav() {
  navList.classList.remove("u-none");
  navList.classList.remove("header__nav-list--dropmenu");

  dropmenuBtn.classList.add("u-none");

  dropmenuBtn.classList.remove("header__nav-button--close");
  dropmenuBtn.classList.remove("header__nav-button--open");
}
