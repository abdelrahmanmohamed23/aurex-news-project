import { dispatch } from "../../core/state.js";
import { handleArticleRequest } from "./article.controller.js";
import { clearSliderInterval} from "../../utils/helpers.js";
export function articleEvents() {
  window.addEventListener("articleRequest", (event) => {
    dispatch(handleArticleRequest(event.detail.newsId));
    dispatch(clearSliderInterval)
  });

}
