
import { categoryEvents } from "./category.events.js"

export function initCategory () {
categoryEvents()

}

export function handleCategoryRequest (category) {
    pushArticleToPopstate(category)
   return function (state) {
    return {
        ...state,
        category,
        activeLinkName: category,
      lastUpdatedKey: "category",
    }
   }
}

function pushArticleToPopstate(category) {
  
  if (
    location.href ===
    `${location.origin}/aurex-news-project/${category}`
  ) return;
   

  history.pushState(
    {pageType:"category", category },
    "",
    `/aurex-news-project/${category}`,
  );
}