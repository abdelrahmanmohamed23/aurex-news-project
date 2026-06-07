import { dispatch } from "../../core/state.js";
import {getNewsBySection} from "../../utils/helpers.js"
import {latestEvents} from "./latest.events.js"
export function initLatest (news) {
const latestNews = getNewsBySection(news, "latest")
dispatch(setLatestNews(latestNews))
latestEvents()
}

function setLatestNews (latestNews) {
return function (state) {
    return {
    ...state,
    latest: {
        ...state.latest,
        latestNews
    },  
    lastUpdatedKey: "latest"
}
}
}