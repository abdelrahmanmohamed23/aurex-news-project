
import { changeWindowSize } from "./logic.js"
import { state } from "./state.js"

 const nav = document.querySelector("nav")
 const navButton = document.querySelector("nav > button")
export function render () {


   

    if (state.windowSize < 590){
//  nav.style.display = "none"

dropMenuNav()



 
    }
    else {
      defaultNav()
    }
   
}
export function changingWindowSizeHandle () {
window.addEventListener("resize",()=> {
    changeWindowSize()
    render()
})
}
function dropMenuNav () {
    
  navButton.classList.remove("u-none")

    nav.style.flexDirection = "column"
nav.children[1].classList.add("header__nav-list--dropmenu","u-none")

}
function defaultNav () {
 nav.children[1].classList.remove("u-none")
         nav.children[1].classList.remove("header__nav-list--dropmenu")
        nav.style.flexDirection = "row"
        navButton.classList.add("u-none")
        state.dropMenuOpened = false;
        navButton.children[0].classList.add("header__nav-button--close")
  navButton.children[0].classList.remove("header__nav-button--open")

}

navButton.addEventListener("click", () => {
    if (!state.dropMenuOpened){
         nav.children[1].classList.remove("u-none")
         state.dropMenuOpened = true
         navButton.children[0].classList.add("header__nav-button--open")
          navButton.children[0].classList.remove("header__nav-button--close")
         return
    }
    nav.children[1].classList.add("u-none")
 navButton.children[0].classList.add("header__nav-button--close")
  navButton.children[0].classList.remove("header__nav-button--open")
   state.dropMenuOpened = false;

})