const dropmenuBtn = document.getElementById("dropmenu-btn");
const navList = document.querySelector("nav ul");

export function dropmenuRender (state) {
    const dropmenuAppearance = state.dropmenu.dropmenuAppearance
if (dropmenuAppearance === null) {
defaultNav()
    return
}

if (dropmenuAppearance) {
    dropmenuOpen()

} else {
    dropmenuClose()
}
}



function defaultNav() {
  navList.classList.remove("u-none");
  navList.classList.remove("header__nav-list--dropmenu");

  dropmenuBtn.classList.add("u-none");

  dropmenuBtn.classList.remove("header__nav-button--close");
  dropmenuBtn.classList.remove("header__nav-button--open");
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