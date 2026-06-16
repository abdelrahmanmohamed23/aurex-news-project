const dropdownBtn = document.getElementById("dropdown-btn");
const navList = document.querySelector("nav ul");

export function dropdownRender (state) {
 
    const dropdownAppearance = state.dropdown.appearance
if (dropdownAppearance === null) {
defaultNav()
    return
}

if (dropdownAppearance) {
    dropdownOpen()

} else {
   dropdownClose()
}
}



function defaultNav() {
  navList.classList.remove("u-none");
  navList.classList.remove("header__nav-list--dropdown");

 dropdownBtn.classList.add("u-none");

 dropdownBtn.classList.remove("header__nav-button--close");
  dropdownBtn.classList.remove("header__nav-button--open");
}

function dropdownClose() {
  dropdownBtn.classList.remove("u-none");
  dropdownBtn.classList.add("header__nav-button--close");
  dropdownBtn.classList.remove("header__nav-button--open");
  navList.classList.add("header__nav-list--dropdown", "u-none");
}

function dropdownOpen() {
  navList.classList.remove("u-none");
  dropdownBtn.classList.add("header__nav-button--open");
  dropdownBtn.classList.remove("header__nav-button--close");
}