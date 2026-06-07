import {trendingRender} from "../features/trending/trending.render.js"
import { themeRender } from "../features/theme/theme.render.js";
import {sliderRender} from "../features/slider/slider.render.js"
import {latestRender} from "../features/latest/latest.render.js"
export function render (state) {
  

    switch (state.lastUpdatedKey) {
        case "theme": 
themeRender(state)

        break;
        case "slider": 
 sliderRender(state)
        break;
        case "trending": 
trendingRender(state)
        break;
        case  "latest":
latestRender(state)
            break;
    }


}
