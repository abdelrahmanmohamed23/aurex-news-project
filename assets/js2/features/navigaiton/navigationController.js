import { appState } from "../../core/store.js"
import {getCategories} from "./navigationModel.js"
import {addLinksToNav, popstateHandle, linksClickHandle} from "./navigationView.js"

export function initNavigation (data) {
    const categories = getCategories(data)
    //    bindPopstate()
    addLinksToNav(categories)
    popstateHandle(data, updateStateToCategory)
   linksClickHandle(data,updateStateToCategory)
}

// export function stateUpdate (currentPage, activeLink) {
    
// appState.navigation.activeLink = activeLink
// appState.navigation.currentPage = currentPage
// }

export function updateStateToHomePage () {
 appState.article.article = false
 appState.category.category = false
 appState.article.articleNewsId = null
 appState.category.categoryName = null
appState.navigation.currentLink = "home"
}


function updateStateToCategory (category) {
 appState.article.article = false
 appState.article.articleNewsId = null
 appState.category.category = true
 appState.category.categoryName = category
appState.navigation.currentLink = category;
}