import { dispatch } from "../../core/state.js";

import { requestArticleDisplay , clearSliderInterval, setupSliderInterval} from "../../utils/helpers.js";
const slider = document.getElementById("slider");


export function sliderEvents() {
slider.addEventListener("mouseenter", ()=>{
    dispatch(clearSliderInterval)

})
slider.addEventListener("mouseleave", () => {
    dispatch(setupSliderInterval)
  
});
 [...slider.children].forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault()
      requestArticleDisplay(Number(element.getAttribute("data-news-id")));
     
    });
  });
  slider.addEventListener("focusin",()=> {
    dispatch(clearSliderInterval)
  })
  slider.addEventListener("focusout", ()=> {
    dispatch(setupSliderInterval)
  })
  
}
