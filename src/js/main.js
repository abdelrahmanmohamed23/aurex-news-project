
import { initTheme } from "./features/theme/theme.controller.js";
import { getNews } from "./core/app.service.js";
import { initSlider } from "./features/slider/slider.controller.js";
import { initTrending } from "./features/trending/trending.controller.js";
import { initLatest } from "./features/latest/latest.controller.js";
import { initDropdown } from "./features/dropdown/dropdown.controller.js";
import { initArticle } from "./features/article/article.controller.js";
import { initNavigation } from "./features/navigation/navigation.controller.js";
import { initCategory } from "./features/category/category.controller.js";
import {initFooter} from "./features/footer/footer.controller.js"
async function initApp() {
    const news = await getNews();
  initSlider(news);
  initTrending(news);
  initLatest(news);
  initTheme();
  initDropdown();
  initArticle();
  initFooter()
  initNavigation(news);
  initCategory(news);
}
initApp();
