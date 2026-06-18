import { articleEvents } from "./article.events.js";

export function initArticle() {
  articleEvents();
}

export function handleArticleRequest(newsId) {
  return function (state) {
    pushArticleToPopstate(newsId);
    return {
      ...state,
         
      article: {
        ...state.article,
        article: true,
        newsId,
      },
      activeLinkName: null,
      lastUpdatedKey: "article",
    };
  };
}


function pushArticleToPopstate(newsId) {
  
  if (
    location.href ===
    `${location.origin}/aurex-news-project/article/news-id-${newsId}`
  ) return;
   

  history.pushState(
    {pageType:"article", newsId },
    "",
    `/aurex-news-project/article/news-id-${newsId}`,
  );
}

