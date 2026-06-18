import { dispatch} from "../../core/state.js";
import { getCategories } from "./navigation.service.js";
import {navigaitonEvents} from "./navigation.events.js"
import {requestArticleDisplay, setupSliderInterval} from "../../utils/helpers.js"
export function initNavigation(news) {
    navigaitonEvents()
  const categories = getCategories(news);
  dispatch(setCategories(categories));
  dispatch((state) => {
    return {
        ...state, 
        navigation: {
            ...state.navigation, 
            linksRendered: true
        }
    }
  })

}

function setCategories(categories) {
  return function (state) {


    return {
      ...state,
      navigation: {
        ...state.navigation,
        categories,
      },
      lastUpdatedKey: "navigation",
    };
  };
}

export function handleBrowserNavigation (historyState) {
 
if (!historyState) {



dispatch(updateStateFromHistoryState(null))
  dispatch(setupSliderInterval)

return
}

if (historyState.pageType === "article"){
    requestArticleDisplay(historyState.newsId);
    dispatch(updateStateFromHistoryState(historyState.pageType))


} else if (historyState.pageType === "category"){
  requestCategoryDisplay(historyState.category)
  dispatch(updateStateFromHistoryState(historyState.pageType, historyState.category))
}
}

function updateStateFromHistoryState (pageType, category) {

if (!pageType) {
return function (state) {
    return {
        ...state,

        navigation: {
            ...state.navigation, 
            activePageType: "home",
        
        },activeLinkName : "home",
          lastUpdatedKey: "navigation"
    }
}
}else if (pageType === "article"){
    return function (state) {
    return {
        ...state,
       
        navigation: {
            ...state.navigation, 
            activePageType: pageType,
       
        },activeLinkName: null,
        lastUpdatedKey: "navigation"
    }
}

} else if (pageType === "category") {
 return function (state) {
    return {
        ...state,
       
        navigation: {
            ...state.navigation, 
            activePageType: pageType,
       
        },activeLinkName: category,
        lastUpdatedKey: "navigation"
    }
}
}
}

export function handleHomeURL () {
   
    if (location.href === `${location.origin}/aurex-news-project/` ) return
  history.pushState(
    null,
    "",
    "/aurex-news-project/",
  );

}
function requestCategoryDisplay (category) {

  const requestCategoryEvent = new CustomEvent("categoryRequest", {
        detail: {
 category
        }
    })
    window.dispatchEvent(requestCategoryEvent);

}