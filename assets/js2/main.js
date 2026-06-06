import {initTheme} from "./features/theme/themeController.js"
import {initSlider} from "./features/slider/sliderController.js"
import { getNews } from "./core/api.js"
import { initNavigation } from "./features/navigaiton/navigationController.js"
import {initTrending} from "./features/trending/trendingController.js"
import {initLatest} from "./features/latest/latestController.js"
import { initDropmenu } from "./features/dropmenu/dropmenuController.js"
import {initArticle} from "./features/article/articleController.js"

async function initApp () {
    initTheme()
    initDropmenu()
    const data = await getNews()
    initNavigation(data)
    initSlider(data, initArticle)
    initTrending(data, initArticle)
    initLatest(data, initArticle)
  
}


initApp()