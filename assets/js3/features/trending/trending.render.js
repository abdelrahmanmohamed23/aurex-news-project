import {addArticlesCards} from "../../utils/helpers.js"
const trendingSection = document.getElementById("trending")
export function trendingRender (state) {
addArticlesCards(state.trending.trendingNews, "trending", trendingSection)
}

