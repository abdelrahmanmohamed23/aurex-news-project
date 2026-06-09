import { dispatch } from "../../core/state.js";
import { handleArticleRequest, handleArticleRemoveRequest } from "./article.controller.js";
import { clearSliderInterval} from "../../utils/helpers.js";
export function articleEvents() {
  document.addEventListener("articleRequest", (event) => {
    dispatch(handleArticleRequest(event.detail.newsId));
    dispatch(clearSliderInterval)
  });

}
