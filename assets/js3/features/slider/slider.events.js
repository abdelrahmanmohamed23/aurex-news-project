import { dispatch } from "../../core/state.js";
import {clearSliderInterval, setupSliderInterval} from "./slider.controller.js"
const slider = document.getElementById("slider");


export function sliderEvents() {
slider.addEventListener("mouseenter", ()=>{
    dispatch(clearSliderInterval)

})
slider.addEventListener("mouseleave", () => {
    dispatch(setupSliderInterval)
  
});

  [...slider.children].forEach((element) => {

// element.addEventListener("click"){

// }
  });
  
}
