import { trendingRender } from "../features/trending/trending.render.js";
import { themeRender } from "../features/theme/theme.render.js";
import { sliderRender } from "../features/slider/slider.render.js";
import { latestRender } from "../features/latest/latest.render.js";
import { dropmenuRender } from "../features/dropmenu/dropmenu.render.js";
import { articleRender } from "../features/article/article.render.js";
import {
  navigationRender,
  handleActiveNavLink,
} from "../features/navigation/navigaiton.render.js";
import { categoryRender } from "../features/category/category.render.js";
import { footerRender } from "../features/footer/footer.render.js";
export function render(state) {
  switch (state.lastUpdatedKey) {
    case "theme":
      themeRender(state);

      break;
    case "slider":
      sliderRender(state);
      break;
    case "trending":
      trendingRender(state);
      break;
    case "latest":
      latestRender(state);
      break;
    case "dropmenu":
      dropmenuRender(state);
      break;
    case "article":
      articleRender(state);

      break;
    case "navigation":
      navigationRender(state);

      break;
    case "category":
      categoryRender(state);
      break;
    case "footer":
      footerRender(state);
      break;
  }
  handleActiveNavLink(state);
}
