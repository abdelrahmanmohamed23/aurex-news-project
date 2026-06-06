

import {getDataBySection,addArticlesCards,handleShowArticlesClick,newsClickHandle} from "../../utils/helpers.js"

const trendingSection = document.getElementById("trending")
export function initTrending (data,initArticle) {
const trendingData = getDataBySection(data, "trending")
addArticlesCards(trendingData,trendingSection,"trending")
newsClickHandle(data,trendingSection,initArticle)

}
