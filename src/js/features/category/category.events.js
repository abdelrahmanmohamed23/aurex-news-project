
import {handleCategoryRequest} from "./category.controller.js"
import { dispatch } from "../../core/state.js"
import { requestArticleDisplay,clearSliderInterval } from "../../utils/helpers.js"

export function categoryEvents () {
    const links = Array.from(document.querySelectorAll("nav a")).slice(1)
links.forEach((element)=> {
element.addEventListener("click", (event) => {
    dispatch(handleCategoryRequest(event.currentTarget.getAttribute("data-link-name")))
   dispatch(clearSliderInterval)
})
})


window.addEventListener("categoryRequest", (event)=> {
   dispatch(handleCategoryRequest(event.detail.category))
      dispatch(clearSliderInterval)
})
window.addEventListener("requestAddingClick", (event)=> {
    
    event.detail.news.forEach((element)=> {
element.addEventListener("click", (clickEvent)=> {
  requestArticleDisplay(Number(clickEvent.currentTarget.getAttribute("data-news-id")));
})
    })
})
}