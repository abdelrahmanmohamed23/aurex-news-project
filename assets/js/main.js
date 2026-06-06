import {initArticles} from "./articles/init.js"
import {initTheme} from "./theme/themeInit.js"
import { initCarousel } from "./carousel/carouselInit.js"
import {getNews} from "./shared/services/newsService.js"
import { initTrending } from "./trending/init.js"
import {initLatestNews} from "./news/init.js"
import { initMenu } from "./menu/init.js"
import {initNavigation} from "./navigation/init.js"
async function initApp () {
    initTheme()
    initMenu()
    initNavigation()
     initArticles(getNews())
    initCarousel(getNews())
    initTrending(getNews())
initLatestNews(getNews())


    
}
initApp()