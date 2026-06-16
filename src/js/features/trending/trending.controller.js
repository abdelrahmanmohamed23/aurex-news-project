import { dispatch } from "../../core/state.js"
import {getNewsBySection} from "../../utils/helpers.js"
import {trendingEvents} from "./trending.events.js"
export function initTrending (news) {
const trendingNews = getNewsBySection(news, "trending")
dispatch(setTrendingNews(trendingNews))
trendingEvents()
}
function setTrendingNews (trendingNews) {
return function (state) {
    return {
    ...state,
    trending: {
        ...state.trending,
        trendingNews
    },  
    lastUpdatedKey: "trending"
}
}
}