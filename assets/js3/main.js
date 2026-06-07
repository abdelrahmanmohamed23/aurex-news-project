import { initTheme } from "./features/theme/theme.controller.js";
import {getNews} from "./core/app.service.js"
import { initSlider } from "./features/slider/slider.controller.js";
import {initTrending} from "./features/trending/trending.controller.js"
import {initLatest} from "./features/latest/latest.controller.js"
import {initDropmenu} from "./features/dropmenu/dropmenu.controller.js"
async function initApp () {
initTheme()
initDropmenu()
const news = await getNews()
initSlider(news)
initTrending(news)
initLatest(news)
}
initApp()