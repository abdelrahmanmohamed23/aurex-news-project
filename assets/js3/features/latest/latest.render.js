import {addArticlesCards} from "../../utils/helpers.js"
const latestSection = document.getElementById("latest")
export function latestRender (state) {

addArticlesCards(state.latest.latestNews, "latest", latestSection)
}