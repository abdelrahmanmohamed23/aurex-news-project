import { articleEvents } from "./article.events.js";

export function initArticle() {
  articleEvents();
}

export function handleArticleRequest(newsId) {
  return function (state) {
//     if (state.article.article) {
//     //   let newState = handleArticleRemoveRequest(state);
//     //   newState = {
//     //       ...newState,
//     //       article: {
//     //         ...newState.article,
//     //         article: true,
//     //         newsId,
//     //       },
//     //       lastUpdatedKey: "article",

//     //   };
//       pushArticleToPopstate(newsId);
//     return {
//     ...state,
//     article: {
//       ...state.article,
//       article: true,
//       articleRendered: true,
//       newsId,
//     },
//     lastUpdatedKey: "article",
//   };

    
      
//     }
    pushArticleToPopstate(newsId);
    return {
      ...state,
         
      article: {
        ...state.article,
        article: true,
        articleRendered: false,
        newsId,
      },
      activeLinkName: null,
      lastUpdatedKey: "article",
    };
  };
}

export function handleArticleRemoveRequest(state) {


  return {
    ...state,
    article: {
      ...state.article,
      article: false,
      articleRendered: true,
      newsId: null,
    },
    
    lastUpdatedKey: "article",
  };
  
}

function pushArticleToPopstate(newsId) {
  
  if (
    location.href ===
    `${location.origin}/article/news-id-${newsId}`
  ) return;
   

  history.pushState(
    {pageType:"article", newsId },
    "",
    `/article/news-id-${newsId}`,
  );
}

