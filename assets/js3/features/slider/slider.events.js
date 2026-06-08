import { dispatch } from "../../core/state.js";
import {setupSliderInterval} from "./slider.controller.js"
import { requestArticleDisplay , clearSliderInterval} from "../../utils/helpers.js";
const slider = document.getElementById("slider");


export function sliderEvents() {
slider.addEventListener("mouseenter", ()=>{
    dispatch(clearSliderInterval)

})
slider.addEventListener("mouseleave", () => {
    dispatch(setupSliderInterval)
  
});
 [...slider.children].forEach((element) => {
    element.addEventListener("click", () => {
      requestArticleDisplay(Number(element.getAttribute("data-news-id")));
     
    });
  });
  
}
