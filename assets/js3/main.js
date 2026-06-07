import { initTheme } from "./features/theme/theme.controller.js";
import {getNews} from "./core/app.service.js"
import { initSlider } from "./features/slider/slider.controller.js";
async function initApp () {
initTheme()
const news = await getNews()
initSlider(news)
}
initApp()