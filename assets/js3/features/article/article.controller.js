import {articleEvents} from "./article.events.js"

export function initArticle () {
articleEvents()

}

export function handleArticleRequest (newsId) {
return function (state) {
  
if (state.article.article){
    return {
        
...state, 
article:{
    ...state.article,
    article: true,
    articleRendered: true,
    newsId
},
lastUpdatedKey: "article"
    }

}

    return {
        
...state, 
article:{
    ...state.article,
    article: true,
    newsId
}, 
lastUpdatedKey: "article"
    }
}
}