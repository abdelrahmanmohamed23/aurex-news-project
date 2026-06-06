import {newArticleHandle} from "../article/articleView.js"
import { appState } from "../../core/store.js"; 
import {navigaitonHandle, changeActiveLink} from "../navigaiton/navigationView.js"
export function initArticle (data, id, caller) {
  newArticleHandle(data, id)
  
updateStateToArticle(id)
  changeActiveLink()
if (caller) return
navigaitonHandle({id: id})
}


function updateStateToArticle (newsId) {
    appState.article.article = true;
    appState.article.articleNewsId = newsId
    appState.category.category = false;
    appState.category.categoryName = null
    appState.navigation.currentLink = null
  
}


